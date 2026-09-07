import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USERNAME = 'cadakerem';
const TOPIC_FILTER = 'portfolio';

const options = {
  hostname: 'api.github.com',
  path: `/users/${USERNAME}/repos?per_page=100&sort=updated`,
  headers: {
    'User-Agent': 'Node.js Fetcher'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    if (res.statusCode === 200) {
      const repos = JSON.parse(data);
      const portfolioRepos = repos.filter(repo => repo.topics && repo.topics.includes(TOPIC_FILTER));
      
      const formattedProjects = portfolioRepos.map(repo => ({
        id: repo.id,
        title: repo.name,
        description: repo.description || 'A portfolio project.',
        tech: [...new Set([repo.language, ...(repo.topics || []).filter(t => t !== TOPIC_FILTER)])].filter(Boolean),
        github: repo.html_url,
        link: repo.homepage || repo.html_url,
        updated_at: repo.updated_at
      }));

      // Also grab languages for tech stack
      const languages = new Set();
      portfolioRepos.forEach(repo => {
        if (repo.language) languages.add(repo.language);
      });

      const dataDir = path.join(__dirname, '../src/data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      fs.writeFileSync(
        path.join(dataDir, 'projects.json'),
        JSON.stringify(formattedProjects, null, 2)
      );

      console.log(`Successfully fetched ${formattedProjects.length} projects.`);
    } else {
      console.error('Failed to fetch repositories:', res.statusCode);
    }
  });
}).on('error', err => {
  console.error('Error fetching data:', err.message);
});
