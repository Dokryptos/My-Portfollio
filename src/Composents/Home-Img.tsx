

import React, { FunctionComponent, useRef} from 'react'
import DOK from "../Assets/desktop/Dok1.svg"
import AboutImg from "../Assets/desktop/InternetPage.svg"
import "./Home-Img.css"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'






export const HomeImg: FunctionComponent = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const isMobile = useMediaQuery({ maxWidth: 767})

    
    if(isMobile === true){

        const scaleY1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0.9, 1.6, 0.9, 0])
        const scaleY2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0])
        const scaleY3 = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, -1.5, 0])
        
        const opacity1 = useTransform(scrollYProgress, [0, 0.4, 0.041], [1, 1, 0])
        const opacity2 = useTransform(scrollYProgress, [0.3, 0.8, 0.81], [1, 1, 0])
        const opacity3 = useTransform(scrollYProgress, [0,0.699, 0.7, 1, 1], [0, 0, 1, 1 ,0])

        const translateY1 = useTransform(scrollYProgress, [0, 0.2, 0.4], ['45vh', '2.5vh', '2.5vh']);
        const translateY2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], ['80vh', '2.5vh', '2.5vh']);
        const translateY3 = useTransform(scrollYProgress, [0.7, 0.9,  1], ['100vh', '95vh', '0vh']);

        return(
            <>
                <div className='image-container' ref={ref}>
                    <motion.div                         
                    style={{
                        scaleY: scaleY1,
                        transformOrigin: `top center`,
                        position: "fixed",
                        opacity: opacity1,
                        translateY: translateY1
                    }}>
                        <img src={DOK} alt='DOK' className='Parallax-img'/>    
                    </motion.div>   
                    
                    <motion.div
                    style={{
                        scale: scaleY2,
                        transformOrigin: `50% 0% 0px `,
                        position: "fixed",
                        opacity: opacity2,
                        translateY: translateY2
                    }}>
                        <img src={AboutImg} alt='About-Parallax' className='Parallax-about' />
                    </motion.div>
                    
                    <motion.div style={{
                        scaleY: scaleY3,
                        transformOrigin: `bot center`,
                        position: "fixed",
                        opacity: opacity3,
                        translateY: translateY3
                    }}>
                        <img src={DOK} alt='DOK' className='Parallax-img'/>    
                    </motion.div>
                </div>
    
            </>
        )
    
    } else {

        const scaleY1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0.9, 1.6, 0.9, 0])
        const scaleY2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0])
        const scaleY3 = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, -1.5, 0])
        
        const opacity1 = useTransform(scrollYProgress, [0, 0.4, 0.041], [1, 1, 0])
        const opacity2 = useTransform(scrollYProgress, [0.3, 0.8, 0.81], [1, 1, 0])
        const opacity3 = useTransform(scrollYProgress, [0,0.699, 0.7, 1, 1], [0, 0, 1, 1 ,0])

        const translateY1 = useTransform(scrollYProgress, [0, 0.2, 0.4], ['45vh', '2.5vh', '2.5vh']);
        const translateY2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], ['80vh', '2.5vh', '2.5vh']);
        const translateY3 = useTransform(scrollYProgress, [0.7, 0.9,  1], ['100vh', '95vh', '0vh']);
        
        return(
        <>
            <div className='image-container' ref={ref}>
                <motion.div                         
                style={{
                    scaleY: scaleY1,
                    transformOrigin: `top center`,
                    position: "fixed",
                    opacity: opacity1,
                    translateY: translateY1
                }}>
                    <img src={DOK} alt='DOK' className='Parallax-img'/>    
                </motion.div>   
                
                <motion.div
                style={{
                    scale: scaleY2,
                    transformOrigin: `50% 0% 0px `,
                    position: "fixed",
                    opacity: opacity2,
                    translateY: translateY2
                }}>
                    <img src={AboutImg} alt='About-Parallax' className='Parallax-about' />
                </motion.div>
                
                <motion.div style={{
                    scaleY: scaleY3,
                    transformOrigin: `bot center`,
                    position: "fixed",
                    opacity: opacity3,
                    translateY: translateY3
                }}>
                    <img src={DOK} alt='DOK' className='Parallax-img'/>    
                </motion.div>
            </div>

        </>
    )
    }
    
}