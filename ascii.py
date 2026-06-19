from PIL import Image
import sys

def print_ascii(path):
    print(f"--- {path} ---")
    try:
        im = Image.open(path)
        im = im.convert('RGBA')
        im = im.resize((40, 20))
        for y in range(im.size[1]):
            line = ""
            for x in range(im.size[0]):
                r,g,b,a = im.getpixel((x,y))
                if a > 50:
                    line += "#"
                else:
                    line += "."
            print(line)
    except Exception as e:
        print(e)

print_ascii('public/companies/Frame 181.png')
print_ascii('public/partners/hotel/image 249@2x.png')
print_ascii('public/partners/hotel/image 253@2x.png')
