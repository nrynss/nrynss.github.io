import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import toml from '@iarna/toml';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'content', 'blog');
const targetDir = path.join(__dirname, 'src', 'pages', 'blog', 'posts');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.readdirSync(sourceDir).forEach(file => {
    if (!file.endsWith('.md')) return;
    if (file === '_index.md') return;

    console.log(`Processing ${file}...`);
    const content = fs.readFileSync(path.join(sourceDir, file), 'utf8');

    let frontmatterRaw = '';
    let body = '';
    let data = {};

    // Detect Frontmatter type
    if (content.startsWith('+++')) {
        const parts = content.split('+++');
        if (parts.length >= 3) {
            frontmatterRaw = parts[1];
            body = parts.slice(2).join('+++').trim();
            try {
                data = toml.parse(frontmatterRaw);
            } catch (e) {
                console.error(`Error parsing TOML in ${file}`, e);
                return;
            }
        }
    } else if (content.startsWith('---')) {
        const parts = content.split('---');
        if (parts.length >= 3) {
            frontmatterRaw = parts[1];
            body = parts.slice(2).join('---').trim();
            try {
                data = yaml.load(frontmatterRaw);
            } catch (e) {
                console.error(`Error parsing YAML in ${file}`, e);
                return;
            }
        }
    } else {
        console.log(`Skipping ${file}: Unknown frontmatter format`);
        return;
    }

    try {
        const newData = {
            layout: '../../../layouts/MarkdownPostLayout.astro',
            title: data.title,
            pubDate: data.date,
            description: data.description || data.summary || "No description provided.",
            author: data.author || "Nrynss",
            image: {
                url: data.cover ? data.cover.image : "/images/blogimage.webp",
                alt: data.cover ? data.cover.alt : data.title
            },
            tags: data.tags || ["General"],
            ...data
        };

        delete newData.date;
        delete newData.cover;
        delete newData.summary;
        // remove showComments if present, or keep it
        // delete newData.showComments; 

        let newBody = body
            .replace(/{{< review-callout (.*?) >}}/g, '<ReviewCallout $1>')
            .replace(/{{< \/review-callout >}}/g, '</ReviewCallout>')
            .replace(/{{< svg-animation (.*?) >}}/g, '<SvgAnimation $1 />');

        const imports = [];
        if (newBody.includes('<ReviewCallout')) {
            imports.push(`import ReviewCallout from '../../../components/ReviewCallout.astro';`);
        }
        if (newBody.includes('<SvgAnimation')) {
            imports.push(`import SvgAnimation from '../../../components/SvgAnimation.astro';`);
        }

        if (imports.length > 0) {
            newBody = `${imports.join('\n')}\n\n${newBody}`;
        }

        const yamlString = yaml.dump(newData);
        const newContent = `---\n${yamlString}---\n\n${newBody}`;

        fs.writeFileSync(path.join(targetDir, file), newContent);
        console.log(`Migrated ${file}`);

    } catch (e) {
        console.error(`Error processing ${file}:`, e);
    }
});
