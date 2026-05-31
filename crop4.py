from PIL import Image

image_path = 'public/b3-final.png'
img = Image.open(image_path)
width, height = img.size

# The user sees a vertical line artifact on the edges of the image.
# We will crop 150 pixels from all sides to completely remove any edge artifacts.
crop_amount = 150

cropped = img.crop((crop_amount, crop_amount, width - crop_amount, height - crop_amount))
cropped.save(image_path)
print(f"Cropped {crop_amount}px from all sides. New size: {cropped.size}")
