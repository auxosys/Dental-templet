from PIL import Image
import numpy as np
import subprocess
import os

img = Image.open('./public/logo-2.jpg').convert('RGB')
arr = np.array(img)

# Detect green vs black
# Green is roughly where G > R and G > B by some margin
# Black is where R,G,B are all low

is_black = (arr[:,:,0] < 100) & (arr[:,:,1] < 100) & (arr[:,:,2] < 100)
is_green = (arr[:,:,1] > arr[:,:,0] + 10) & (arr[:,:,1] > arr[:,:,2] + 10)

# Create masks (0 means black in PBM, 255 means white)
black_mask = np.full(arr.shape[:2], 255, dtype=np.uint8)
black_mask[is_black] = 0

green_mask = np.full(arr.shape[:2], 255, dtype=np.uint8)
green_mask[is_green] = 0

Image.fromarray(black_mask).save('black.pbm')
Image.fromarray(green_mask).save('green.pbm')

# Potrace them
subprocess.run(["potrace", "-s", "black.pbm", "-o", "black.svg"])
subprocess.run(["potrace", "-s", "green.pbm", "-o", "green.svg"])

def extract_paths(svg_file):
    import xml.etree.ElementTree as ET
    tree = ET.parse(svg_file)
    root = tree.getroot()
    paths = []
    g = root.find('.//{http://www.w3.org/2000/svg}g')
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
    
    for p in black_paths:
        svg_template += f'<path fill="{black_color}" d="{p}"/>\n'
    for p in green_paths:
        svg_template += f'<path fill="{green_color}" d="{p}"/>\n'
        
    svg_template += "</g></svg>"
    
    with open(output, 'w') as f:
        f.write(svg_template)

make_combined_svg('./public/logo-black-green.svg', '#171A18', '#4F8A7D')
make_combined_svg('./public/logo-white-green.svg', '#FFFFFF', '#4F8A7D')

print("Done generating colored SVGs")

