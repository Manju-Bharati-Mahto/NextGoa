import urllib.request
import os

universities = {
    "University of Waikato": "https://upload.wikimedia.org/wikipedia/en/8/81/University_of_Waikato_logo.svg",
    "Victoria University of Wellington": "https://upload.wikimedia.org/wikipedia/en/0/07/Victoria_University_of_Wellington_logo.svg",
    "Massey University": "https://upload.wikimedia.org/wikipedia/en/3/30/Massey_University_logo.svg",
    "Humber Polytechnic": "https://upload.wikimedia.org/wikipedia/en/0/0a/Humber_College_logo.svg",
    "Charles Sturt University": "https://upload.wikimedia.org/wikipedia/en/b/b3/Charles_Sturt_University_logo.svg",
    "Western Sydney University": "https://upload.wikimedia.org/wikipedia/en/e/eb/Western_Sydney_University_logo.svg",
    "Nottingham Trent University": "https://upload.wikimedia.org/wikipedia/en/7/77/Nottingham_Trent_University_logo.svg",
    "University of Bradford": "https://upload.wikimedia.org/wikipedia/en/9/91/University_of_Bradford_logo.svg",
    "University of Surrey": "https://upload.wikimedia.org/wikipedia/en/6/6c/University_of_Surrey_logo.svg",
    "Birmingham City University": "https://upload.wikimedia.org/wikipedia/en/4/4e/Birmingham_City_University_logo.svg",
    "Neoma Business School": "https://upload.wikimedia.org/wikipedia/en/2/23/NEOMA_Business_School_logo.svg",
}

os.makedirs('public/abroad', exist_ok=True)
req = urllib.request.Request

for name, url in universities.items():
    try:
        r = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(r) as response:
            if response.status == 200:
                with open(f"public/abroad/{name}.svg", "wb") as f:
                    f.write(response.read())
                print(f"Downloaded {name}")
    except Exception as e:
        print(f"Error {name}: {e}")
