import Image from 'next/image';

export interface SkillData {
    index : number,
    title : string,
    content : {
        name : string,
        images : string[],
    }[]
}

function Skill({data} : {data : SkillData}) {
    const contents = data.content.map((content, i) => {
        const images = content.images?.map((path) => 
            <div key={path} className="relative w-8 h-8">
                <Image src={'/skills/' + path} fill alt={path}/>
            </div>
        );

        return (
            <div key={i} className="flex flex-col gap-1 m-auto">
                <div className="text-base text-primary">
                    {content.name}
                </div>
                <div className="flex gap-2 justify-center">
                    {images}
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col mx-auto min-w-[80%]">
            <div className="text-xl">
                {data.title}
            </div>
            <div className="bg-backgroundAccent w-full h-0.5 mt-2 mb-6"/>
            <div className="grid grid-cols-2 gap-8 auto-rows-fr text-center">
                {contents}
            </div>
        </div>
    )
}

export default function Skills({data} : {data : SkillData[]}) {
    const skillComponents = data.map((skill, i) => 
        <Skill key={i} data={skill}/>
    )
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-2/3 gap-y-16">
                {skillComponents}
            </div>
        </div>
    )
}