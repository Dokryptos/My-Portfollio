

import React, { FunctionComponent, useEffect, useState, useRef, useLayoutEffect} from 'react'
import DOK from "../Assets/desktop/Dok1.png"
import "./Home-Img.css"
import { motion, useScroll, useTransform } from 'framer-motion'






export const HomeImg: FunctionComponent = () => {
    const ref = useRef(null)
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
    });

    
    const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.7, 0])
    const translateY = useTransform(scrollYProgress, [0, 1], ['50vh', '-50vh']);

    return(
        <>
            <div className='image-container' ref={ref}>
                <motion.div                         
                style={{
                    scaleY,
                    translateY,
                }}
                >
                    <img src={DOK} alt='DOK' className='DOK-img'/>    
                </motion.div>   

            </div>
        </>
    )
}