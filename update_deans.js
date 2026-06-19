const fs = require('fs');
const path = require('path');

// 1. Update types.ts
const typesPath = 'src/data/programmes/types.ts';
let typesContent = fs.readFileSync(typesPath, 'utf8');
if (!typesContent.includes('linkedin?: string;')) {
    typesContent = typesContent.replace('image?: string;', 'image?: string;\n  linkedin?: string;');
    fs.writeFileSync(typesPath, typesContent);
}

// 2. Update data files
const links = {
    'Dr. Anuradha Pillai': 'https://in.linkedin.com/in/dr-anuradha-pillai-a35539318/',
    'Dr. Anupam Kumar': 'https://www.linkedin.com/in/dr-anupam-kumar/',
    'Dr. Kshitiz Sharma': 'https://in.linkedin.com/in/dr-kshitiz-sharma-blr',
    'Dr. Jeyalakshmi.K': 'https://www.linkedin.com/company/parul-university-goa/',
    'Dr. Jeyalakshmi K.': 'https://www.linkedin.com/company/parul-university-goa/',
    'Dr. Lalit Lata Jha': 'https://www.linkedin.com/in/dr-lalit-lata-jha-2494841a',
    'Dr. Aseem Yadav': 'https://www.linkedin.com/in/dr-aseem-yadav-1a84a1317/',
    'Dr. Prashant Sharma': 'https://www.linkedin.com/company/parul-university-goa/', // fallback
    'Dr. Rajesh Sharma': 'https://www.linkedin.com/company/parul-university-goa/', // fallback
    'Dr. Aravind Kumar': 'https://www.linkedin.com/company/parul-university-goa/', // fallback
};

const dataDir = 'src/data/programmes';
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'types.ts');

for (const file of files) {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find dean name
    const match = content.match(/dean:\s*\{\s*name:\s*"([^"]+)"/);
    if (match) {
        const name = match[1];
        const link = links[name] || 'https://www.linkedin.com/company/parul-university-goa/';
        
        if (!content.includes('linkedin:')) {
            content = content.replace(/dean:\s*\{\s*name:\s*"([^"]+)",/, `dean: {\n    name: "$1",\n    linkedin: "${link}",`);
            fs.writeFileSync(filePath, content);
        }
    }
}
