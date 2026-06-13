import urllib.request
import urllib.parse
import re
import os

universities = [
    "University of Waikato",
    "Victoria University of Wellington",
    "Massey University",
    "Humber College",
    "Charles Sturt University",
    "Western Sydney University",
    "Nottingham Trent University",
    "University of Bradford",
    "University of Surrey",
    "Birmingham City University",
    "NEOMA Business School"
]

os.makedirs('public/abroad', exist_ok=True)
opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)')]
urllib.request.install_opener(opener)

for uni in universities:
    try:
        url = "https://en.wikipedia.org/wiki/" + urllib.parse.quote(uni.replace(" ", "_"))
        html = urllib.request.urlopen(url).read().decode('utf-8')
        
        # Find the logo in the infobox
        infobox_match = re.search(r'<table class="infobox[^>]*>(.*?)</table>', html, re.DOTALL)
        if not infobox_match:
            print(f"No infobox for {uni}")
            continue
            
        img_match = re.search(r'<img[^>]*src="([^"]+)"', infobox_match.group(1))
        if not img_match:
            print(f"No image in infobox for {uni}")
            continue
            
        img_url = "https:" + img_match.group(1)
        
        # Download the image
        filename = f"public/abroad/{uni.replace('Humber College', 'Humber Polytechnic')}.png"
        urllib.request.urlretrieve(img_url, filename)
        print(f"Downloaded {uni} from {img_url}")
        
    except Exception as e:
        print(f"Error {uni}: {e}")
