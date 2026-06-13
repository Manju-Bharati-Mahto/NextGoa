from PIL import Image, ImageChops
import os

def trim_white_and_transparent(image_path):
    try:
        im = Image.open(image_path).convert('RGBA')
        bg_white = Image.new('RGBA', im.size, (255, 255, 255, 255))
        im_no_transparency = Image.alpha_composite(bg_white, im)
        diff = ImageChops.difference(im_no_transparency, bg_white)
        # convert to grayscale and threshold to ensure we don't crop too much if there are slight off-white pixels
        diff = diff.convert('L')
        bbox = diff.getbbox()
        if bbox:
            im_cropped = im.crop(bbox)
            im_cropped.save(image_path)
            print(f"Trimmed {image_path}")
        else:
            print(f"Empty or all-white image {image_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

# Find all images
for root, dirs, files in os.walk('public/abroad/partners'):
    for file in files:
        if file.lower().endswith(('.png', '.webp', '.jpg', '.jpeg')):
            trim_white_and_transparent(os.path.join(root, file))

