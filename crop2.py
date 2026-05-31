import numpy as np
from PIL import Image

def crop_nearly_transparent(image_path):
    img = Image.open(image_path).convert("RGBA")
    data = np.array(img)
    alpha = data[:, :, 3]
    
    # Find rows and columns where max alpha is > 20
    rows = np.any(alpha > 20, axis=1)
    cols = np.any(alpha > 20, axis=0)
    
    if not np.any(rows) or not np.any(cols):
        print("Image is entirely transparent")
        return
        
    ymin, ymax = np.where(rows)[0][[0, -1]]
    xmin, xmax = np.where(cols)[0][[0, -1]]
    
    print(f"Cropping from (0,0,{img.width},{img.height}) to ({xmin},{ymin},{xmax},{ymax})")
    
    cropped = img.crop((xmin, ymin, xmax + 1, ymax + 1))
    cropped.save(image_path)
    print("New size:", cropped.size)

crop_nearly_transparent('public/b3-cropped.png')
