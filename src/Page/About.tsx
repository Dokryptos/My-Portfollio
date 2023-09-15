

import { FunctionComponent, useRef, useEffect} from 'react'
import DOK from "../Assets/desktop/Dok1.svg"
import AboutImg from "../Assets/desktop/InternetPage.svg"
import MobileDOK from "../Assets/mobile/DOK.svg"
import MobileAbout from "../Assets/mobile/internet-Page.svg"
import "./Home.css"
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import Transition from '../Composents/Transition'
import Cursor from "../Assets/mobile/down.svg"



const About: FunctionComponent = () => {

    // Ref the Scroll Bar for have the ScrollYProgress only on the Div 'Container'
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    // Define Media Query
    const isMobile = useMediaQuery({
        query: "(max-device-width: 768px)",
      });







    // Redirect to the menu Page after scrolling 100% the About Page
    let navigate = useNavigate(); // Navigate = Redirect
  
    useEffect(() => {
      function checkScrollBar() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;


        if ((scrollY + 1) + windowHeight === documentHeight) {        
          navigate('/menu');
        } 
      }
  
      window.addEventListener('scroll', checkScrollBar);
  
      return () => {
        window.removeEventListener('scroll', checkScrollBar);
      };
    }, [navigate]); // Need navigate dependancy
  





        // Render Scroll Smooth
        const smoothScroll = useSpring(scrollYProgress, {
            damping:40,
            stiffness:300,
        })


        // Use Framer Motion functiuon for design the Desktop animation of the about Page
        const scaleY1 = useTransform(smoothScroll, [0, 0.2, 0.3, 0.4], [0.9, 1.6, 0.9, 0])
        const scaleY2 = useTransform(smoothScroll, [0.3, 0.5, 0.8], [0, 0.8, 0])
        const scaleY3 = useTransform(smoothScroll, [0.7, 0.9, 1], [0, -1.6, -1])


        
        const opacity1 = useTransform(smoothScroll, [0, 0.4, 0.041], [1, 1, 0])
        const opacity2 = useTransform(smoothScroll, [0.3, 0.8, 0.81], [1, 1, 0])
        const opacity3 = useTransform(smoothScroll, [0,0.699, 0.7, 1, 1.5], [0, 0, 1, 1 ,1])

        const translateY1 = useTransform(smoothScroll, [0, 0.2, 0.4], ['45vh', '2.5vh', '2.5vh']);
        const translateY2 = useTransform(smoothScroll, [0.3, 0.5, 0.8], ['80vh', '10vh', '2.5vh']);
        const translateY3 = useTransform(smoothScroll, [0.7, 0.9,  1], ['97.5vh', '96vh', '60vh']);
        



        // Use Framer Motion function for design the Mobile animation of the about Page
        const mobileScaleY1 = useTransform(smoothScroll, [0, 0.2, 0.3, 0.4], [2, 3.8, 2, 0])
        const mobileScaleY2 = useTransform(smoothScroll, [0.22, 0.3, 0.5, 0.8], [0, 1, 1 , 1])
        const mobileScaleY3 = useTransform(smoothScroll, [0.45, 0.6, 0.85, 0.95], [0, -2, -5.8, -1])


        
        const mobileOpacity1 = useTransform(smoothScroll, [0, 0.4, 0.041], [1, 1, 0])
        const mobileOpacity2 = useTransform(smoothScroll, [0.22, 0.8, 0.81], [1, 1, 0])
        const mobileOpacity3 = useTransform(smoothScroll, [0,0.45, 0.7, 1, 1.5], [1, 1, 1, 1 ,1])

        const mobileTranslateY1 = useTransform(smoothScroll, [0, 0.2,0.4], ['33vh', '1vh' ,'1vh']);
        const mobileTranslateY2 = useTransform(smoothScroll, [0.22, 0.3 , 0.45, 0.6, 0.9], ['90vh', '37vh' , '2.5vh', '-30vh', '-150vh']);
        const mobileTranslateY3 = useTransform(smoothScroll, [0.5, 0.85,  0.95], ['99vh', '98vh', '17.5vh']);


            return(
                <>
                {/* Condition if the Media query is under isMobile send this code */}
                {isMobile ? (
                        <div className='mobile-container' ref={ref}>
                            <img src={Cursor} alt='Cursor-down' className='Cursor' />                            
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
                                
                                <motion.div 
                                
                                style={{
                                    scaleY: mobileScaleY3,
                                    transformOrigin: `top center`,
                                    position: "fixed",
                                    opacity: mobileOpacity3,
                                    translateY: mobileTranslateY3
                                }}>
                                    <img src={MobileDOK} alt='DOK' className='mobile-img'/>    
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
                            transformOrigin: `top center`,
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


export default Transition(About)