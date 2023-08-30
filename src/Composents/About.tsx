import React,{ FunctionComponent, useRef} from "react"
import AboutImg from "../Assets/desktop/InternetPage.svg"
import { motion, useScroll, useTransform } from "framer-motion"
import "./About.css"

export const About: FunctionComponent = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const scaleY = useTransform(scrollYProgress, [0, 0.4 , 1], [1, 1.8, 0])
    const translateY = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1.7, 0])

    return(
        <>
        <div className="about-container" ref={ref}>
            <motion.div
            style={{
                scaleY,
                translateY
            }}
            >
                <img src={AboutImg} alt="About-anim" className="about-img" />
            </motion.div>
        </div>
        </>
    )
}