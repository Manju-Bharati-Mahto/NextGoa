import os
import subprocess

for d in ['public/companies', 'public/partners/hotel']:
    for f in sorted(os.listdir(d)):
        if f.endswith('.png'):
            path = os.path.join(d, f)
            res = subprocess.run(['tesseract', path, 'stdout'], capture_output=True, text=True)
            if 'ITC' in res.stdout or 'HOTEL' in res.stdout:
                print(f"Found {res.stdout.strip()} in {f}")
