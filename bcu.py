import urllib.request
opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)')]
urllib.request.install_opener(opener)
url = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Birmingham_City_University_logo.svg/250px-Birmingham_City_University_logo.svg.png"
urllib.request.urlretrieve(url, "public/abroad/Birmingham City University.png")
