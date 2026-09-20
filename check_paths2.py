import xml.etree.ElementTree as ET
tree = ET.parse('test.svg')
paths = tree.getroot().findall('.//{http://www.w3.org/2000/svg}path')
print(f"Total paths: {len(paths)}")
for i, p in enumerate(paths):
    print(f"Path {i}: length {len(p.attrib['d'])}")
