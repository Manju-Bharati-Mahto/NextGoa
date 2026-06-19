from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

try:
    im = Image.open('/Users/apple/Downloads/NextGoa-main/public/companies/oberoi.png')
    im = trim(im)
    im.save('/Users/apple/Downloads/NextGoa-main/public/companies/oberoi.png')
    
    im2 = Image.open('/Users/apple/Downloads/NextGoa-main/public/partners/hotel/oberoi.png')
    im2 = trim(im2)
    im2.save('/Users/apple/Downloads/NextGoa-main/public/partners/hotel/oberoi.png')
    print("Cropped successfully.")
except Exception as e:
    print(e)
