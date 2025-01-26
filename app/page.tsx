import Showcase from "./showcase/showcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { getProjects } from "@/utils/projects";
import { ProjectData } from "./showcase/projects/projectCard";
import { getSkills } from "@/utils/skills";
import { SkillData } from "./showcase/skills";
import { PropsWithChildren } from "react";

export interface ShowcaseData {
    projects : ProjectData[],
    skills : SkillData[],
    awards : string[],
}

function BioLine({text} : {text : string}) {
    return (
        <div className="min-h-6 flex items-center overflow-hidden text-nowrap">
            <span className={"bg-background " + (text.length && "pr-2")}>
                {text}
            </span>
            <div className="min-w-6 h-2 grow -z-10 animate__animated animate__slideInLeft animate__slow bg-accentDarker"/>
        </div>
    )
} 

export default function Home() {
    const showcase = {
        projects: getProjects(),
        skills : getSkills(),
        awards : [],
    } as ShowcaseData;

    return (
        <>
            <header className="absolute flex p-8 gap-8 w-full bg-background">
                <a 
                    href="https://github.com/aaqil-a" 
                    target="_blank" 
                    className="h-8 w-8 transition rounded-full hover:text-accentDarker">
                    <FontAwesomeIcon className="h-8" icon={faGithub}></FontAwesomeIcon>
                </a>
                <a 
                    href="https://www.linkedin.com/in/m-aaqil-abdullah/" 
                    target="_blank" 
                    className="bg-accent transition hover:bg-accentDarker flex items-center justify-center h-8 w-8 p-2 rounded-full">
                    <FontAwesomeIcon className="h-4 text-background" icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
                <a 
                    href="https://maaqila-general.s3.ap-southeast-2.amazonaws.com/resume.pdf" 
                    target="_blank" 
                    className="outline transition outline-2 rounded-xl px-4 flex items-center gap-2 h-8 hover:text-accentDarker">
                    Resumé
                </a>
            </header>

            {/* Bio */}
            <div className="flex flex-col items-center w-full min-h-[90vh] pt-48 pb-8">
                <h1 className="text-5xl font-bold mb-6 text-center">
                    M. Aaqil Abdullah
                </h1>
                <h2 className="text-3xl mb-12 text-center">
                    Developer Portfolio
                </h2>
                <div className="text-l">
                    <BioLine text="I like to work on meaningful projects while"/>
                    <BioLine text="learning something new."/>
                    <BioLine text=""/>
                </div>
            </div>

            <Showcase data={showcase}/>
        </>
    );
}
