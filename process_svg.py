import xml.etree.ElementTree as ET

def create_colored_svg(input_file, output_file, color1, color2):
    tree = ET.parse(input_file)
    root = tree.getroot()
    
    # SVG namespaces
    ET.register_namespace('', "http://www.w3.org/2000/svg")
    
    # Get the 'g' element
    g = root.find('.//{http://www.w3.org/2000/svg}g')
    
    # Remove fill from the g tag so paths can override it
    if 'fill' in g.attrib:
        del g.attrib['fill']
        
    paths = g.findall('{http://www.w3.org/2000/svg}path')
    
    for i, path in enumerate(paths):
        # We will guess which paths are the tooth based on their order
        # Looking at the file, Path 1 (index 1) is likely the tooth outline
        # Path 2 (index 2) is a tooth mark
        # Path 3 (index 3) is a tooth mark
        if i in [1, 2, 3]:
            path.set('fill', color2)
        else:
            path.set('fill', color1)
            
    tree.write(output_file)

# Black and green
create_colored_svg('./public/logo-2.svg', './public/logo-black-green.svg', '#171A18', '#4F8A7D')
# White and green
create_colored_svg('./public/logo-2.svg', './public/logo-white-green.svg', '#FFFFFF', '#4F8A7D')

