import Markdown from "markdown-to-jsx"
import Image from "next/image";
import { RefObject } from "react";

export interface ProjectData {
    metadata : {
        title : string,
        subtitle : string,
        image : string,
        start_date : Date | undefined,
        end_date : Date | undefined,
        index : number,
    },
    content : string,
    skills : RelatedSkillsData[]
}

interface RelatedSkillsData {
    title : string,
    images : string[],
}

function RelatedSkills({data} : {data : RelatedSkillsData[]}) {
    const skillComponents = data.map((d, i) => {
        const images = d.images?.map((path) => 
            <div key={path} className="relative w-8 h-8">
                <Image src={'/skills/' + path} fill alt={path}/>
            </div>
        );

        return (
            <div key={i} className="flex flex-col gap-2 m-auto">
                <div className="text-base">
                    {d.title}
                </div>
                <div className="flex gap-2 justify-center">
                    {images}
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col mt-8 self-start w-full">
            <div className="text-xl">
                Related Skills
            </div>
            <div className="bg-backgroundAccent w-full h-0.5 mt-2 mb-6"/>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 auto-rows-fr text-center">
                {skillComponents}
            </div>
        </div>
    )
}

interface ProjectCardProps {
    data : ProjectData, 
    translate : number,
    selected : boolean
}

export default function ProjectCard({data, translate, selected} : ProjectCardProps) {
    const metadata = data.metadata;
    const content = data.content;

    const dateSpan = 
        `, ${metadata.start_date?.toLocaleDateString('default', {month: 'long', year: 'numeric'})} - 
        ${metadata.end_date?.toLocaleDateString('default', {month: 'long', year: 'numeric'})}`

    const relatedSkills = data.skills.length ? (<RelatedSkills data={data.skills}/>) : (<div/>)

    return (
        <div 
            className={`absolute top-0 left-1/2 animate__animated ${selected ? 'animate__fadeIn' : 'animate__fadeOut'}`} 
            style={{translate : translate+'% 0'}}>
            <div className="min-w-96 rounded-lg flex flex-col items-center">
                <div className="text-2xl">{metadata.title}</div>
                <div className="text-lg">{metadata.subtitle}{metadata.start_date && dateSpan}</div>
                <Image src={'/projects/' + metadata.image} alt={metadata.title} width={1280} height={720} className="rounded-lg w-[90%] my-8"/>
                <Markdown className="text-justify text-base font-inter flex flex-col gap-4 w-full">{content}</Markdown>
                {relatedSkills}
            </div>
        </div>

    )
}