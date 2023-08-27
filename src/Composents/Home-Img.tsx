

import React, { FunctionComponent, useEffect, useState} from 'react'
import DOK from "../Assets/desktop/Dok1.png"
import "./Home-Img.css"

export const HomeImg: FunctionComponent = () => {
    let [scrollY, setScrollY] = useState(0 || Number);

        const handleScrollBar = () => {
            setScrollY(window.scrollY);
        };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollBar);

        return () => {
            window.removeEventListener("scroll", handleScrollBar);
        };
    }, []);

    const imageHeight = Math.min(100, (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    
    return(
        <>
        <div className='relative h-screen'>
            <div className='image-container'>
                    <img  
                    src={DOK} 
                    style={{ 
                        height: `${imageHeight}vh`,
                        transform: `translateY(${scrollY}px)`,
                }}
                    className='object-cover w-full h-50 transition-transform duration-0 transform max-h-screen max-w-screen'  
                    />
            </div>
        </div>
        </>
    )
}