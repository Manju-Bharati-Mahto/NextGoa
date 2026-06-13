import urllib.request
opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)')]
urllib.request.install_opener(opener)
try:
    url = "https://upload.wikimedia.org/wikipedia/en/4/4e/Birmingham_City_University_logo.svg"
    urllib.request.urlretrieve(url, "public/abroad/partners/UK/birmingham_new.svg")
    print("Downloaded SVG")
except Exception as e:
    print("Error:", e)
