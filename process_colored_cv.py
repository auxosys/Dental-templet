import cv2
import numpy as np
import subprocess

img = cv2.imread('./public/logo-2.jpg')
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Green mask
# Hue for green is around 35-85, let's just pick up any color with high saturation
sat = hsv[:,:,1]
val = hsv[:,:,2]

# High saturation = green tooth and dots. Text is black (low sat, low val)
is_green = (sat > 40) & (val > 100)
is_black = (val < 100)

green_mask = np.full(img.shape[:2], 255, dtype=np.uint8)
green_mask[is_green] = 0

black_mask = np.full(img.shape[:2], 255, dtype=np.uint8)
black_mask[is_black] = 0

# Remove noise using morphological opening
kernel = np.ones((5,5), np.uint8)
green_mask = cv2.morphologyEx(green_mask, cv2.MORPH_OPEN, kernel)
green_mask = cv2.morphologyEx(green_mask, cv2.MORPH_CLOSE, kernel)

black_mask = cv2.morphologyEx(black_mask, cv2.MORPH_OPEN, kernel)
black_mask = cv2.morphologyEx(black_mask, cv2.MORPH_CLOSE, kernel)

cv2.imwrite('green.pbm', green_mask)
cv2.imwrite('black.pbm', black_mask)

subprocess.run(["potrace", "-s", "black.pbm", "-o", "black.svg"])
subprocess.run(["potrace", "-s", "green.pbm", "-o", "green.svg"])

def extract_paths(svg_file):
    import xml.etree.ElementTree as ET
    tree = ET.parse(svg_file)
    paths = []
    g = tree.getroot().find('.//{http://www.w3.org/2000/svg}g')
    if g is not None:
        for p in g.findall('{http://www.w3.org/2000/svg}path'):
            paths.append(p.attrib['d'])
    return paths

black_paths = extract_paths('black.svg')
green_paths = extract_paths('green.svg')

def make_combined_svg(output, black_color, green_color):
    svg_template = f"""<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="398.000000pt" height="500.000000pt" viewBox="0 0 398.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" stroke="none">
"""
    for p in black_paths: svg_template += f'<path fill="{black_color}" d="{p}"/>\n'
    for p in green_paths: svg_template += f'<path fill="{green_color}" d="{p}"/>\n'
    svg_template += "</g></svg>"
    with open(output, 'w') as f: f.write(svg_template)

make_combined_svg('./public/logo-black-green.svg', '#171A18', '#4F8A7D')
make_combined_svg('./public/logo-white-green.svg', '#FFFFFF', '#4F8A7D')
print("Done")
