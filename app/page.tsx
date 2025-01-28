import Showcase from "./showcase/showcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { getProjects } from "@/utils/projects";
import { ProjectData } from "./showcase/projects/projectCard";
import Bio from "./bio";

export interface ShowcaseData {
    projects : ProjectData[],
}

export default function Home() {
    const showcase = {
        projects: getProjects(),
    } as ShowcaseData;

    return (
        <>
            <header className="flex p-8 gap-8 w-full bg-background justify-center md:justify-start">
                <a 
                    href="https://github.com/aaqil-a" 
                    target="_blank" 
                    className="h-8 w-8 transition rounded-full hover:text-accentDarker">
                    <FontAwesomeIcon className="h-8" icon={faGithub}/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/m-aaqil-abdullah/" 
                    target="_blank" 
                    className="bg-accent transition hover:bg-accentDarker flex items-center justify-center h-8 w-8 p-2 rounded-full">
                    <FontAwesomeIcon className="h-4 text-background" icon={faLinkedinIn}/>
                </a>
            </header>

            <Bio/>

            <Showcase data={showcase}/>

        </>
    );
}
