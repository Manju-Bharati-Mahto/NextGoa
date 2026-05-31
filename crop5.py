from PIL import Image

image_path = 'Assets/b3.png'
img = Image.open(image_path).convert("RGBA")
width, height = img.size
pixels = img.load()

xmin, xmax = width, 0
ymin, ymax = height, 0

# Sample every 10th pixel for speed
for y in range(0, height, 10):
    for x in range(0, width, 10):
        if pixels[x, y][3] > 200:
            if x < xmin: xmin = x
            if x > xmax: xmax = x
            if y < ymin: ymin = y
            if y > ymax: ymax = y

# Add a 150px buffer inside the opaque bounds to ensure no edge artifacts are kept
buffer = 150
xmin += buffer
xmax -= buffer
ymin += buffer
# We'll also trim the bottom slightly just in case, but keep as much height as possible
ymax -= buffer

if xmin >= xmax or ymin >= ymax:
    print("Error calculating bounds")
else:
    print(f"Cropping {image_path} from ({xmin}, {ymin}) to ({xmax}, {ymax})")
    cropped = img.crop((xmin, ymin, xmax, ymax))
    # Save as RGB to permanently flatten any remaining tiny alpha values (like 254) to solid
    out_path = 'public/b3-down.png'
    cropped.convert("RGB").save(out_path)
    print(f"Saved to {out_path} with size {cropped.size}")
