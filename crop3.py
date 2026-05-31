from PIL import Image

def crop_nearly_transparent(image_path):
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    xmin, xmax = width, 0
    ymin, ymax = height, 0
    
    # Simple bounding box for alpha > 20
    # To be fast, we'll subsample slightly
    for y in range(0, height, 5):
        for x in range(0, width, 5):
            if pixels[x, y][3] > 20:
                if x < xmin: xmin = x
                if x > xmax: xmax = x
                if y < ymin: ymin = y
                if y > ymax: ymax = y
                
    if xmin >= xmax or ymin >= ymax:
        print("Image is entirely transparent")
        return
        
    print(f"Cropping from (0,0,{width},{height}) to ({xmin},{ymin},{xmax},{ymax})")
    
    cropped = img.crop((xmin, ymin, xmax + 1, ymax + 1))
    cropped.save(image_path)
    print("New size:", cropped.size)

crop_nearly_transparent('public/b3-cropped.png')
