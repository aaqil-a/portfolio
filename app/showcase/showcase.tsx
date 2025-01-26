'use client'

import { JSX, useState } from "react";
import Projects from "./projects/projects";
import Awards from "./awards";
import Skills, { SkillData } from "./skills";
import { ShowcaseData } from "../page";
import { ProjectData } from "./projects/projectCard";

enum ShowcasePage {
    Projects="projects",
    Skills="skills",
    Awards="awards",
}

interface ShowcaseHeaderProps { 
    value : ShowcasePage, 
    selected : boolean,
    onClickHeader : (v : ShowcasePage) => void
}

function ShowcaseHeader({ value, selected, onClickHeader } : ShowcaseHeaderProps) {
    return (
        <div
            className={selected ? 'underline underline-offset-[16px] decoration-4 decoration-accent' : 'text-[#706E81] hover:text-gray-400'} 
            // onClick={handleClick}
            >
            {value.charAt(0).toUpperCase() + value.substring(1)}
        </div>
    )
}

export default function Showcase({data} : {data : ShowcaseData}) {
    const [page, setPage] = useState(ShowcasePage.Projects)

    let CurrentComponent = Projects;
    let currentData : ProjectData[] = data.projects;
    // if (page == ShowcasePage.Skills) {
    //     currentData = data.skills;
    //     CurrentComponent = Skills;
    // } else if(page == ShowcasePage.Awards) {
    //     CurrentComponent = Awards;
    //     currentData = data.awards;
    // }

    return (
        <div className="animate__animated animate__fadeIn animate__delay-2s">
            <div className="flex items-center justify-center gap-32 w-full text-3xl">
                <ShowcaseHeader value={ShowcasePage.Projects} selected={page == ShowcasePage.Projects} onClickHeader={setPage}/>
            </div>
            <div className="py-8 mt-8 min-h-screen">
                <CurrentComponent data={currentData}/>
            </div>
        </div>
    )
}