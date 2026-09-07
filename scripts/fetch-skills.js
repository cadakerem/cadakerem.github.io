import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const README_URL = 'https://raw.githubusercontent.com/cadakerem/CadaKerem/main/README.md';

https.get(README_URL, (res) => {
  if (res.statusCode === 404) {
    // Try master branch if main is not found
    https.get('https://raw.githubusercontent.com/cadakerem/CadaKerem/master/README.md', parseResponse);
  } else {
    parseResponse(res);
  }
}).on('error', err => {
  console.error('Error fetching data:', err.message);
});

function parseResponse(res) {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    if (res.statusCode === 200) {
      const lines = data.split('\n');
      let isTechStackSection = false;
      let currentCategory = null;
      
      const skillCategories = [];
      
      for (let line of lines) {
        line = line.trim();
        
        if (line.startsWith('## Tech Stack & Tools')) {
          isTechStackSection = true;
          continue;
        }
        
        if (isTechStackSection && line.startsWith('## ') && !line.startsWith('### ')) {
          break;
        }
        
        if (isTechStackSection) {
          if (line.startsWith('### **')) {
            currentCategory = line.replace('### **', '').replace('**', '').trim();
            skillCategories.push({
              title: currentCategory,
              skills: []
            });
          } else if (line.startsWith('![') && currentCategory) {
            const match = line.match(/!\[(.*?)\]/);
            if (match && match[1]) {
              skillCategories[skillCategories.length - 1].skills.push(match[1]);
            }
          }
        }
      }
      
      const dataDir = path.join(__dirname, '../src/data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      fs.writeFileSync(
        path.join(dataDir, 'skills.json'),
        JSON.stringify(skillCategories, null, 2)
      );

      console.log(`Successfully fetched ${skillCategories.length} skill categories from Profile README.`);
    } else {
      console.error('Failed to fetch README:', res.statusCode);
    }
  });
}
