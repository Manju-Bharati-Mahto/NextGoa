import struct

def get_image_info(data):
    if data[:8] == b'\x89PNG\r\n\x1a\n':
        # PNG
        w, h = struct.unpack('>LL', data[16:24])
        return 'PNG', w, h
    return 'Unknown', 0, 0

for filename in ['Group 32728.png', 'Group 32863.png', 'Group 32864.png', 'Group 32865.png']:
    try:
        with open('/Users/apple/Downloads/NextGoa-main/Wavy background/' + filename, 'rb') as f:
            data = f.read(24)
            fmt, w, h = get_image_info(data)
            print(f'{filename}: {fmt} {w}x{h}')
    except Exception as e:
        print(f'{filename}: {e}')
