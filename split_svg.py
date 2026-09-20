import xml.etree.ElementTree as ET
import copy

tree = ET.parse('./public/logo-2.svg')
root = tree.getroot()
ET.register_namespace('', "http://www.w3.org/2000/svg")
g = root.find('.//{http://www.w3.org/2000/svg}g')
paths = g.findall('{http://www.w3.org/2000/svg}path')

for i, p in enumerate(paths):
    new_tree = copy.deepcopy(tree)
    new_g = new_tree.getroot().find('.//{http://www.w3.org/2000/svg}g')
    # Remove all paths except the i-th one
    for child in list(new_g):
        new_g.remove(child)
    new_g.append(p)
    new_tree.write(f'./public/path_{i}.svg')
