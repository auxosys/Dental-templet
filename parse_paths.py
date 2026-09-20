import xml.etree.ElementTree as ET
import re

tree = ET.parse('./public/logo-2.svg')
root = tree.getroot()
paths = root.findall('.//{http://www.w3.org/2000/svg}path')

def parse_bbox(d):
    coords = [int(c) for c in re.findall(r'-?\d+', d)]
    if not coords: return (0,0,0,0)
    xs = coords[0::2]
    ys = coords[1::2]
    return min(xs), min(ys), max(xs), max(ys)

for i, p in enumerate(paths):
    d = p.attrib['d']
    bbox = parse_bbox(d)
    print(f"Path {i}: bbox {bbox}")

