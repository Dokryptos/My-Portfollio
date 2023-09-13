
import React,{useState, FunctionComponent, useEffect} from 'react'
import './Menu.css'
import Navbar from '../Composents/Navbar'
import { Header } from '../Composents/Header'
import { motion } from 'framer-motion'
import ChefOnTheWay from '../Assets/desktop/ChefOnTheWay.svg'
import EventApp from '../Assets/desktop/Events-app.svg'
import ZombieSurvival from '../Assets/desktop/Zombie.svg'
import Lapicide from '../Assets/desktop/Lapicide.svg'
import { Link } from 'react-router-dom'


export const Menu: FunctionComponent = () => {

    let [backgroundColor, setBackgroundColor] = useState<string>('#252527')
    let [imageBoolean, setImageBoolean] = useState<boolean>(false)
    let [imageMenu, setImageMenu] = useState<string | undefined>(ChefOnTheWay)
    let [isImgVisible, setIsImgVisible] = useState<boolean>(false) 
    let [isLiVisible, setIsLiVisible] = useState<boolean>(false) 
    let [link, setLink] = useState<string>('https://chef-ontheway.netlify.app')

    const handleLinkClick = (color: string) => {
        setBackgroundColor(color);
        setImageBoolean(true);
    };



    {/*
    https://event-app.adaptable.app/
    https://lapicide.netlify.app/

*/}
    const handleChangeImg = (value:number) => {
        if(value === 1){
            return (
                setImageMenu(ChefOnTheWay),
                setLink('https://chef-ontheway.netlify.app')
                )
        } else if(value === 2){
            return(
                setImageMenu(EventApp),
                setLink('https://event-app.adaptable.app')
            )
        }else if(value === 3){
            return (
                setImageMenu(ZombieSurvival),
                setLink('https://dokryptos.github.io/FinalTest-Survival_Game/index.html')
            )
        }else if (value === 4){
            return (
                setImageMenu(Lapicide),
                setLink('https://lapicide.netlify.app')
            )
        } else {
            return (
                setImageMenu(ChefOnTheWay),
                setLink('https://chef-ontheway.netlify.app')
                )
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
                    transition={{ type:'spring', duration:0.75}}
                    onClick={() => {handleChangeImg(1)}}>
                        Chef on the Way</motion.li>


                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}
                    transition={{ type:'spring', duration: 1.25}} 
                    onClick={() => {handleChangeImg(2)}}>
                        Events App</motion.li>
                    

                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}                    
                    transition={{ type:'spring', duration: 1.75}}
                    onClick={() => {handleChangeImg(3)}}>
                        Zombie Survival</motion.li>
                    

                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}
                    transition={{ type:'spring', duration: 2.5}} 
                    onClick={() => {handleChangeImg(4) }}>
                        Lapicide</motion.li>

                </ul>

            <motion.div
            initial='hidden'
            animate={isImgVisible ? 'visible' : 'hidden'}
            variants={imgVariants}
            transition={{ duration: 0.5}}
            
            >   
            <Link to={link} target='_blank'>
                                <img src={imageMenu} alt='imgMenu' className="img-menu" />
            </Link>
            </motion.div>
        </div >
    </div>
    )
}
