import path from "path";
import fs from 'fs';
import { SkillData } from "@/app/showcase/skills";

const dataDir = path.join(process.cwd(), '/content/skills');

export function getSkills() {
    const fileNames = fs.readdirSync(dataDir);
    const data = fileNames.map((fileName) => {
        const file = fs.readFileSync(path.join(dataDir, fileName), 'utf-8');
        const jsonData = JSON.parse(file);
        return jsonData as SkillData;
    })
    return data.sort((a, b) => a.index > b.index ? 1 : -1);
}