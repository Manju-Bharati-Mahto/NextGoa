from PIL import Image

def crop_transparent(image_path):
    img = Image.open(image_path).convert("RGBA")
    bbox = img.getbbox() # Returns (left, upper, right, lower) of the non-zero regions
    if bbox:
        img = img.crop(bbox)
        img.save(image_path)
        print("Cropped image to:", img.size)
    else:
        print("Image is entirely transparent")

crop_transparent('public/b3.png')
