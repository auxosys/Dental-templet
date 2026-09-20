import xml.etree.ElementTree as ET

tree = ET.parse('./public/logo-2.svg')
root = tree.getroot()
paths = root.findall('.//{http://www.w3.org/2000/svg}path')

for i, p in enumerate(paths):
    print(f"Path {i}: length {len(p.attrib['d'])}")
