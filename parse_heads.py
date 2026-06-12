import re
import json

with open('/Users/apple/.gemini/antigravity/brain/809b5100-8359-4580-b9c5-8c6593b47040/.system_generated/steps/956/content.md', 'r') as f:
    html = f.read()

# Find the queries-area div
start = html.find('<div class="queries-area grey-box-area">')
end = html.find('<ul class="nav nav-pills tab-layout-2">', start)
section_html = html[start:end]

heads = []
matches = re.finditer(r'<h5 class="queries-title">\s*(.*?)\s*</h5>\s*<p>\s*(.*?)\s*</p>\s*<a[^>]*>\s*(.*?)\s*</a>', section_html, re.DOTALL)

for match in matches:
    name = match.group(1).strip()
    title = match.group(2).strip()
    phone = match.group(3).strip()
    # clean up html entities if any
    name = re.sub(r'<[^>]+>', '', name)
    title = re.sub(r'<[^>]+>', '', title)
    phone = re.sub(r'<[^>]+>', '', phone)
    
    heads.append({
        "name": name,
        "title": title,
        "phone": phone
    })

print(json.dumps(heads, indent=2))
