

import React, { FunctionComponent, useRef} from 'react'
import DOK from "../Assets/desktop/Dok1.svg"
import AboutImg from "../Assets/desktop/InternetPage.svg"
import MobileDOK from "../Assets/mobile/DOK.svg"
import MobileAbout from "../Assets/mobile/internet-Page.svg"
import "./Home-Img.css"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'






export const HomeImg: FunctionComponent = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const isMobile = useMediaQuery({
        query: "(max-device-width: 480px)",
      });

    const isTab = useMediaQuery({
        query: "(max-device-width: 768px)",
    });

        const scaleY1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0.9, 1.6, 0.9, 0])
        const scaleY2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 0.8, 0])
        const scaleY3 = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, -1.6, 0])
        
        const opacity1 = useTransform(scrollYProgress, [0, 0.4, 0.041], [1, 1, 0])
        const opacity2 = useTransform(scrollYProgress, [0.3, 0.8, 0.81], [1, 1, 0])
        const opacity3 = useTransform(scrollYProgress, [0,0.699, 0.7, 1, 1], [0, 0, 1, 1 ,0])

        const translateY1 = useTransform(scrollYProgress, [0, 0.2, 0.4], ['45vh', '2.5vh', '2.5vh']);
        const translateY2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], ['80vh', '10vh', '2.5vh']);
        const translateY3 = useTransform(scrollYProgress, [0.7, 0.9,  1], ['100vh', '95vh', '2.5vh']);
        


        const mobileScaleY1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [2, 6.8, 2, 0])
        const mobileScaleY2 = useTransform(scrollYProgress, [0.22, 0.3, 0.5, 0.8], [0, 1, 1 , 1])
        const mobileScaleY3 = useTransform(scrollYProgress, [0.45, 0.6, 0.85, 1], [0, -2, -6.8, -1])
        
        const mobileOpacity1 = useTransform(scrollYProgress, [0, 0.4, 0.041], [1, 1, 0])
        const mobileOpacity2 = useTransform(scrollYProgress, [0.22, 0.8, 0.81], [1, 1, 0])
        const mobileOpacity3 = useTransform(scrollYProgress, [0,0.45, 0.7, 1, 1.01], [0, 1, 1, 1 ,1])

        const mobileTranslateY1 = useTransform(scrollYProgress, [0, 0.2, 0.3], ['70vh', '2.5vh', '2.5vh']);
        const mobileTranslateY2 = useTransform(scrollYProgress, [0.22, 0.3 , 0.45, 0.6, 0.9], ['90vh', '37vh' , '2.5vh', '-10vh', '-100vh']);
        const mobileTranslateY3 = useTransform(scrollYProgress, [0.5, 0.85,  1], ['100vh', '98vh', '15vh']);


        return(
        <>
        {isMobile ? (

                <div className='mobile-container' ref={ref}>
                    <motion.div                         
                        style={{
                            scaleY: mobileScaleY1,
                            transformOrigin: `top center`,
                            position: "fixed",
                            opacity: mobileOpacity1,
                            translateY: mobileTranslateY1
                        }}>
                            <img src={MobileDOK} alt='DOK' className='mobile-img'/>    
                        </motion.div>   
                        
                        <motion.div
                        style={{
                            scale: mobileScaleY2,
                            transformOrigin: `50% 0% 0px `,
                            position: "fixed",
                            opacity: mobileOpacity2,
                            translateY: mobileTranslateY2
                        }}>
                            <img src={MobileAbout} alt='About-Parallax' className='mobile-about' />
                        </motion.div>
                        
                        <motion.div style={{
                            scaleY: mobileScaleY3,
                            transformOrigin: `bot center`,
                            position: "fixed",
                            opacity: mobileOpacity3,
                            translateY: mobileTranslateY3
                        }}>
                            <img src={MobileDOK} alt='DOK' className='mobile-img'/>    
                        </motion.div>
                </div>
        ) : isTab ? (
            <div>
                <p>TAB</p>
                <motion.div>

                </motion.div>
            </div>
        ) : ( 
            <div className='desktop-container' ref={ref}>
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
        )}

        </>
    )
}