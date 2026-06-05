import os
import zlib
import struct

def get_png_dominant_color(filepath):
    with open(filepath, 'rb') as f:
        # Check PNG signature
        if f.read(8) != b'\x89PNG\r\n\x1a\n':
            return None
        
        width = 0
        height = 0
        idat_data = b''
        
        while True:
            chunk_header = f.read(8)
            if len(chunk_header) < 8:
                break
            length, chunk_type = struct.unpack('>I4s', chunk_header)
            chunk_data = f.read(length)
            f.read(4) # CRC
            
            if chunk_type == b'IHDR':
                width, height, depth, color_type, compression, filter_method, interlace = struct.unpack('>IIBBBBB', chunk_data)
            elif chunk_type == b'IDAT':
                idat_data += chunk_data
            elif chunk_type == b'IEND':
                break
                
        if not idat_data:
            return None
            
        try:
            decompressed = zlib.decompress(idat_data)
        except Exception as e:
            return f"Error decompressing: {e}"
            
        # Parse pixel data (assuming 8-bit RGBA or RGB)
        # PNG has a filter byte at the start of each scanline
        bytes_per_pixel = 4 if color_type == 6 else 3
        scanline_width = 1 + width * bytes_per_pixel
        
        # Sample pixels
        r_sum = 0
        g_sum = 0
        b_sum = 0
        pixel_count = 0
        
        for y in range(height):
            scanline_start = y * scanline_width
            filter_type = decompressed[scanline_start]
            # Just sample without full defiltering (since we just want a rough color estimate)
            for x in range(0, width, 10): # Sample every 10th pixel
                pixel_start = scanline_start + 1 + x * bytes_per_pixel
                if pixel_start + 3 <= len(decompressed):
                    r = decompressed[pixel_start]
                    g = decompressed[pixel_start + 1]
                    b = decompressed[pixel_start + 2]
                    r_sum += r
                    g_sum += g
                    b_sum += b
                    pixel_count += 1
                    
        if pixel_count == 0:
            return (0, 0, 0)
        return (int(r_sum / pixel_count), int(g_sum / pixel_count), int(b_sum / pixel_count))

for filename in sorted(os.listdir('public/connect')):
    if filename.endswith('.png'):
        path = os.path.join('public/connect', filename)
        rgb = get_png_dominant_color(path)
        print(f"{filename}: {rgb}")
