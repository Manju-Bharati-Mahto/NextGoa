import os
from PIL import Image

def is_golden(im):
    # Resize to 1x1 to get average color
    im2 = im.resize((1, 1))
    color = im2.getpixel((0, 0))
    if im.mode == 'RGBA':
        # Many logos have transparent backgrounds, average color might be misleading.
        # Let's count golden pixels instead.
        pass
    
    golden_pixels = 0
    total_pixels = 0
    for color, count in im.getcolors(maxcolors=100000) or []:
        if im.mode == 'RGBA' and color[3] < 10:
            continue # ignore transparent
        r, g, b = color[:3]
        # Golden color: R>180, G>150, B<120, R>G>B
        if r > 180 and g > 130 and b < 150 and r > g and g > b:
            golden_pixels += count
        total_pixels += count
    
    if total_pixels > 0 and (golden_pixels / total_pixels) > 0.05:
        return True
    return False

for d in ['public/companies', 'public/partners/hotel']:
    for f in os.listdir(d):
        if f.endswith('.png') and f != 'oberoi.png':
            try:
                im = Image.open(os.path.join(d, f))
                if is_golden(im):
                    print("Found golden logo:", os.path.join(d, f))
            except Exception as e:
                pass
