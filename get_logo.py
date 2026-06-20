import urllib.request
import json
import re

url = "https://duckduckgo.com/?q=oberoi+hotels+logo+transparent+png&iax=images&ia=images"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    token = re.search(r"vqd=([\d-]+)", html).group(1)
    
    search_url = f"https://duckduckgo.com/i.js?l=us-en&o=json&q=oberoi+hotels+logo+transparent+png&vqd={token}&f=,,,&p=1"
    req2 = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
    res = urllib.request.urlopen(req2).read().decode('utf-8')
    data = json.loads(res)
    
    for item in data['results']:
        if item['image'].endswith('.png'):
            print("Downloading:", item['image'])
            img_data = urllib.request.urlopen(urllib.request.Request(item['image'], headers={'User-Agent': 'Mozilla/5.0'})).read()
            with open('/Users/apple/Downloads/NextGoa-main/public/companies/oberoi.png', 'wb') as f:
                f.write(img_data)
            with open('/Users/apple/Downloads/NextGoa-main/public/partners/hotel/oberoi.png', 'wb') as f:
                f.write(img_data)
            print("Done")
            break
except Exception as e:
    print("Error:", e)
