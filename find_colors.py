from PIL import Image

img = Image.open('./public/logo-2.jpg').convert('RGB')
colors = img.getcolors(maxcolors=1000000)

# Sort by count
colors.sort(reverse=True, key=lambda x: x[0])

for count, color in colors[:20]:
    print(f"Color {color}: {count} pixels")
