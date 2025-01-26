'use client'

function BioLine({text} : {text : string}) {
    return (
        <div className="min-h-6 flex overflow-hidden items-center text-nowrap">
            <span className={"bg-background " + (text.length && "pr-2")}>
                {text}
            </span>
            <div className="min-w-6 h-2 grow -z-10 animate__animated animate__slideInLeft animate__slow bg-accentDarker"/>
        </div>
    )
} 

export default function Bio() {
    return (<div className="flex flex-col items-center justify-center w-full min-h-[80vh] p-8 gap-6">
        <h1 className="text-5xl font-bold text-center">
            M. Aaqil Abdullah
        </h1>
        <h2 className="text-3xl mb-6 text-center">
            Developer Portfolio
        </h2>
        <div className="text-l">
            <BioLine text="I like to work on meaningful"/>
            <BioLine text="projects while learning"/>
            <BioLine text="something new."/>
        </div>
    </div>)
}