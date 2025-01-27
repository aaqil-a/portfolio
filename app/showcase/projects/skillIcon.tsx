'use client'

import { useState } from "react";
import Image from "next/image";

export default function SkillIcon({name, path} : {name : string, path : string}) {
    const [isHovering, setHovering] = useState(false);

    function startHover() {
        setHovering(true);
    }
    function endHover() {
        setHovering(false)
    }

    return (
        <div onTouchStart={startHover} onTouchEnd={endHover} onMouseEnter={startHover} onMouseLeave={endHover} className="relative">
            {isHovering &&
            <div 
                className="bg-backgroundAccent absolute py-1 px-2 rounded -translate-y-[120%] left-1/2 -translate-x-1/2 text-nowrap text-sm">                
                {name}
            </div>
            }
            <div className="relative w-8 h-8">
                <Image src={'/skills/' + path} fill alt={path}/>
            </div>
        </div>
    )
}