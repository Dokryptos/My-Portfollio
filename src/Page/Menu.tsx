
import React,{useState, FunctionComponent, useEffect} from 'react'
import './Menu.css'
import Navbar from '../Composents/Navbar'
import { Header } from '../Composents/Header'
import { motion } from 'framer-motion'
import Menu1 from '../Assets/desktop/Menu1.svg'



export const Menu: FunctionComponent = () => {

    let [backgroundColor, setBackgroundColor] = useState<string>('#252527')
    let [imageBoolean, setImageBoolean] = useState<boolean>(false)
    let [imageMenu, setImageMenu] = useState<string | undefined>(Menu1)
    let [isImgVisible, setIsImgVisible] = useState<boolean>(false) 
    let [isLiVisible, setIsLiVisible] = useState<boolean>(false) 

    const handleLinkClick = (color: string) => {
        setBackgroundColor(color);
        setImageBoolean(true);
    };

    const handleChangeImg = (value:number) => {
        if(value === 1){
            return setImageMenu(Menu1)
        } else if(value === 2){
            return setImageMenu(Menu1)
        }else if(value === 3){
            return setImageMenu(Menu1)
        }else if (value === 4){
            return setImageMenu(Menu1)
        } else {
            return setImageMenu(Menu1)
        }

    }


    useEffect(() => {
        const timeOutImg = setTimeout(() => {
            setIsImgVisible(true);
        }, 1500);

        const timeOutLi = setTimeout(() => {
            setIsLiVisible(true)
        }, 1000)

        return () => {
            clearTimeout(timeOutImg);
            clearTimeout(timeOutLi);
        };
    })

    const liVariants = {
        hidden: {translateX: '38vw', translateY: '25vh'},
        visible: { translateX: '10vw', translateY: '25vh'},
    }

    const imgVariants = {
        hidden: { opacity: 0, translateY: '25vh'},
        visible: { opacity: 1, translateY: '25vh'},
    };

    return(
        <div className='menu-container' style={{ backgroundColor: backgroundColor}}>
            <Header onColorChange={handleLinkClick} />
            <Navbar imageUrl={imageBoolean} />
            <div className='projet'>
                <ul className={`list-project`}>

                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}
                    transition={{ duration: 0.5, ease: [0, 0, 0.5, 1]}}
                    onClick={() => {handleChangeImg(1)}}>
                        Chef on the Way</motion.li>


                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}
                    transition={{ duration: 0.75, ease: [0, 0, 0.5, 1]}} 
                    onClick={() => {handleChangeImg(2)}}>
                        Events App</motion.li>
                    

                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}                    
                    transition={{ duration: 1, ease: [0, 0, 0.5, 1]}}
                    onClick={() => {handleChangeImg(3)}}>
                        Zombie Survival</motion.li>
                    

                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}
                    transition={{ duration: 1.25, ease: [0, 0, 0.5, 1]}} 
                    onClick={() => {handleChangeImg(4) }}>
                        Lapicide</motion.li>

                </ul>

            <motion.div
            initial='hidden'
            animate={isImgVisible ? 'visible' : 'hidden'}
            variants={imgVariants}
            transition={{ duration: 0.5}}
            
            >
                <img src={imageMenu} alt='imgMenu' className="img-menu" />
            </motion.div>
        </div >
    </div>
    )
}
