'use client'

import { useState } from "react";
import Projects from "./projects/projects";
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
}

function ShowcaseHeader({ value, selected } : ShowcaseHeaderProps) {
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
    const [page] = useState(ShowcasePage.Projects)

    const CurrentComponent = Projects;
    const currentData : ProjectData[] = data.projects;
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
                <ShowcaseHeader value={ShowcasePage.Projects} selected={page == ShowcasePage.Projects}/>
            </div>
            <div className="py-8 mt-8 min-h-screen">
                <CurrentComponent data={currentData}/>
            </div>
        </div>
    )
}