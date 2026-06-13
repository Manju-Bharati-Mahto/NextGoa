from PIL import Image
import os
import glob

def trim_transparency(image_path):
    try:
        im = Image.open(image_path)
        if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
            im = im.convert('RGBA')
            bg = Image.new('RGBA', im.size, (255, 255, 255, 0))
            diff = Image.composite(im, bg, im)
            bbox = diff.getbbox()
            if bbox:
                im_cropped = im.crop(bbox)
                im_cropped.save(image_path)
                print(f"Trimmed {image_path}")
            else:
                print(f"Empty image {image_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

# Find all images
for root, dirs, files in os.walk('public/abroad/partners'):
    for file in files:
        if file.lower().endswith(('.png', '.webp')):
            trim_transparency(os.path.join(root, file))

