const fs = require('fs');
const path = require('path');
const dir = 'src/components/programmes';
const files = fs.readdirSync(dir).filter(f => f.endsWith('ProgrammePicker.tsx'));
for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  content = content.replace(/useEffect\(\(\) => \{\s+const urlParams = new URLSearchParams\(window\.location\.search\);\s+const levelParam = urlParams\.get\('level'\);\s+if \(levelParam && Object\.keys\(programmeData\)\.includes\(levelParam\)\) \{\s+setActiveLevel\(levelParam\);\s+\}\s+\}, \[\]\);/g,
  `useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const levelParam = urlParams.get('level');
    if (levelParam) {
      setActiveLevel(levelParam);
    }
  }, []);`);
  fs.writeFileSync(path.join(dir, file), content);
  console.log('Fixed ' + file);
}
