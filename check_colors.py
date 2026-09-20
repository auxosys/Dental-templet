from PIL import Image

img = Image.open('./public/logo-2.jpg').convert('RGB')
colors = img.getcolors(maxcolors=100000)

# Check if there are greenish pixels
green_pixels = 0
black_pixels = 0
for count, (r, g, b) in colors:
    if g > r + 10 and g > b + 10:
        green_pixels += count
    if r < 50 and g < 50 and b < 50:
        black_pixels += count
        
print(f"Green pixels: {green_pixels}")
print(f"Black pixels: {black_pixels}")
