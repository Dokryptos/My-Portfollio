

import React, { FunctionComponent, useRef} from 'react'
import DOK from "../Assets/desktop/Dok1.svg"
import AboutImg from "../Assets/desktop/InternetPage.svg"
import "./Home-Img.css"
import { motion, useScroll, useTransform } from 'framer-motion'






export const HomeImg: FunctionComponent = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    
    const scaleY1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [1, 1.7, 0.5, 0])
    const scaleY2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0])
    const scaleY3 = useTransform(scrollYProgress, [0.7, 0.9, 1], [1, 1.7, 0])
    
    const translateY1 = useTransform(scrollYProgress, [0, 0.3, 0.4], ['40vh', '70vh', '100vh']);
    const translateY2 = useTransform(scrollYProgress, [0, 1], ['20vh', '50vh']);
    const translateY3 = useTransform(scrollYProgress, [0, 1], ['100vh', '40vh']);

    return(
        <>
            <div className='image-container' ref={ref}>
                <motion.div                         
                style={{
                    scaleY: scaleY1,
                    translateY: translateY1,
                    transformOrigin: `50% 0% 0px `
                }}>
                    <img src={DOK} alt='DOK' className='Parallax-img'/>    
                </motion.div>   
                
                <motion.div
                style={{
                    scale: scaleY2,
                    translateY: translateY2
                }}>
                    <img src={AboutImg} alt='About-Parallax' className='Parallax-about' />
                </motion.div>
                
                <motion.div style={{
                    scaleY: scaleY3,
                    translateY: translateY3
                }}>
                    <img src={DOK} alt='DOK' className='Parallax-img'/>    
                </motion.div>
            </div>

        </>
    )
}