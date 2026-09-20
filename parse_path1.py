import xml.etree.ElementTree as ET
import re

tree = ET.parse('./public/logo-2.svg')
root = tree.getroot()
paths = root.findall('.//{http://www.w3.org/2000/svg}path')

path1 = paths[1].attrib['d']
commands = re.findall(r'[M|m][^M^m]*', path1)
print(f"Path 1 has {len(commands)} subpaths:")
for i, c in enumerate(commands):
    print(f"Subpath {i}: length {len(c)}")
