import Markdown from "markdown-to-jsx"
import Image, { StaticImageData } from "next/image";
import SkillIcon from "./skillIcon";

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
    skills : string[],
    images : string[],
}

function RelatedSkills({data} : {data : RelatedSkillsData[]}) {
    const skillComponents = data.map((d, i) => {
        const images = d.skills.map((name, j) => 
            <SkillIcon key={name} name={name} path={d.images[j]}/>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 auto-rows-fr text-center">
                {skillComponents}
            </div>
        </div>
    )
}

interface ProjectCardProps {
    data : ProjectData, 
    image : StaticImageData,
    translate : number,
    selected : boolean
}


export default function ProjectCard({data, image, translate, selected} : ProjectCardProps) {
    const metadata = data.metadata;
    const content = data.content;


    const dateSpan = 
        `, ${metadata.start_date?.toLocaleDateString('default', {month: 'long', year: 'numeric'})} - 
        ${metadata.end_date?.toLocaleDateString('default', {month: 'long', year: 'numeric'})}`

    const relatedSkills = data.skills.length ? (<RelatedSkills data={data.skills}/>) : (<div/>)

    return (
        <div 
            className={`absolute max-w-2xl w-[96%] p-2 pb-16 top-0 left-1/2 animate__animated animate__faster ${selected ? 'animate__fadeIn' : 'animate__fadeOut'}`} 
            style={{translate : translate+'% 0'}}>
            <div className="rounded-lg flex flex-col items-center text-center">
                <div className="text-2xl">{metadata.title}</div>
                <div className="text-lg">{metadata.subtitle}{metadata.start_date && dateSpan}</div>
                <Image placeholder="blur" src={image} alt={metadata.title} width={1280} height={720} className="rounded-lg w-[90%] my-8"/>
                <Markdown className="text-left text-sm text-justify md:text-base font-inter flex flex-col gap-4 w-full">{content}</Markdown>
                {relatedSkills}
            </div>
        </div>
    )
}