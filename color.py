from PIL import Image
import os

for d in ['public/companies', 'public/partners/hotel']:
    for f in sorted(os.listdir(d)):
        if f.endswith('.png'):
            path = os.path.join(d, f)
            try:
                im = Image.open(path)
                im = im.convert('RGBA')
                w, h = im.size
                
                # count non-transparent pixels
                gold = 0
                total = 0
                for x in range(w):
                    for y in range(h):
                        r, g, b, a = im.getpixel((x, y))
                        if a > 50:
                            total += 1
                            if r > 150 and g > 120 and b < 150 and r > g:
                                gold += 1
                if total > 0 and gold/total > 0.1:
                    print(f"Golden {gold/total*100:.1f}%: {path}")
            except Exception as e:
                pass
