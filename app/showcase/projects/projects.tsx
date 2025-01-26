'use client'

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectCard, { ProjectData } from "./projectCard"
import { useState } from "react"
import ProjectButton from "./projectButton"
import csiroImage from "../../../public/projects/csiro.jpg";
import seismicVisImage from "../../../public/projects/seismicvis.jpg";
import techlauncherImage from "../../../public/projects/techlauncher.png";
import wyrmtongueImage from "../../../public/projects/wyrmtongue.png";
import { StaticImageData } from "next/image"

export default function Projects({ data } : {data : ProjectData[]}) {
    const [project, setProject] = useState(0);

    const projectButtons = data.map((_, i) => 
        <ProjectButton key={i} idx={i} selected={i == project} onProjectButtonClick={setProject}/>
    )

    const images : ({[key : string] : StaticImageData} ) = {
        "csiro": csiroImage,
        "seismicvis" : seismicVisImage,
        "techlauncher" : techlauncherImage,
        "wyrmtongue" : wyrmtongueImage,   
    }

    const projectsGap = 150;
    const [offset, setOffset] = useState(0)
    const projectComponents = data.map((projectData, i) => 
        <ProjectCard 
            key={i} 
            translate={-50 + projectsGap*i - offset} 
            selected={project == i} data={projectData}
            image={images[projectData.metadata.image]}    
        />
    )

    let animationId : NodeJS.Timeout | undefined = undefined;

    function nextProject() {
        slideAnimation();
        setProject(i => Math.min(i+1, data.length-1));
    }
    function prevProject() {
        slideAnimation(false);
        setProject(i => Math.max(i-1, 0));
    }

    function slideAnimation(forward = true){
        let translate = 0;
        const startOffset = project * projectsGap;

        function endAnimation() {
            clearInterval(animationId);
            setOffset(startOffset + translate);
        }

        animationId = setInterval(() => {
            if(translate >= projectsGap || translate <= -projectsGap) {
                endAnimation();
            } else {
                if(forward) translate += 15;
                else translate -= 15;
                if (translate > projectsGap) translate = projectsGap;
                else if (translate < -projectsGap) translate = -projectsGap; 
                setOffset(startOffset + translate);
            }
        }, 1)
    }

    return (
        <div className="flex flex-col gap-8 items-center">
            <div className="flex gap-8 text-3xl items-center">
                <button 
                    className={'flex items-center ' + (project == 0 ? 'text-backgroundAccent' : 'text-primary hover:text-secondary')}
                    disabled={project == 0}
                    onClick={prevProject}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {projectButtons}
                <button 
                    className={'flex items-center ' + (project == data.length-1 ? 'text-backgroundAccent' : 'text-primary hover:text-secondary')}
                    disabled={project == data.length-1}
                    onClick={nextProject}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="relative w-full overflow-x-clip">
                {projectComponents}
            </div>
        </div>
    )
}