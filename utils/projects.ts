import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';
import { ProjectData } from '@/app/showcase/projects/projectCard';

const dataDir = path.join(process.cwd(), '/content/projects');

export function getProjects() {
    const folders = fs.readdirSync(dataDir);
    const data = folders.map((folderName) => {
        const descDir = path.join(dataDir, folderName, 'description.md');
        const skillsDir = path.join(dataDir, folderName, 'skills.json');

        const descFile = fs.existsSync(descDir) && fs.readFileSync(descDir, 'utf-8');
        const skillsFile = fs.existsSync(skillsDir) && fs.readFileSync(skillsDir, 'utf-8');

        const skills = skillsFile ? JSON.parse(skillsFile) : [];

        if(descFile) {
            const matterData = matter(descFile);
            return {
                metadata : matterData.data,
                content : matterData.content,
                skills : skills,
            } as ProjectData
        }
    })
    const filtered = data.filter((d) => d != undefined);
    return filtered.sort((a, b) => a.metadata.index > b.metadata.index ? 1 : -1);

}