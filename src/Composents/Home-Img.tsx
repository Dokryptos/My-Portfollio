

import React, { FunctionComponent, useEffect, useState, useRef, useLayoutEffect} from 'react'
import DOK from "../Assets/desktop/Dok1.png"
import "./Home-Img.css"
import { motion, useScroll } from 'framer-motion'






export const HomeImg: FunctionComponent = () => {
    const { scrollYProgress } = useScroll();
    const imageHeight = Math.min(100, (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    
    return(
        <>
            <div className='image-container'>
                <motion.div
                className='image'
                style={{
                    scaleX: scrollYProgress,
                }}
                initial={{translateY: 0}}
                animate={{translateY: -scrollY / 2}}
                >
                    <img src={DOK}/> 
                </motion.div>
            </div>
        </>
    )
}