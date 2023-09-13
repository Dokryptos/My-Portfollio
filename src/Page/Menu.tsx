
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
import { useMediaQuery } from 'react-responsive'

export const Menu: FunctionComponent = () => {

    // Sent color to the Header for the Color fonction
    let [backgroundColor, setBackgroundColor] = useState<string>('#252527')
    // Sent color oh the Image for the Logo color function
    let [imageBoolean, setImageBoolean] = useState<boolean>(false)

    // Set up for the selection of project with link, image and Back ground Color
    let [imageMenu, setImageMenu] = useState<string | undefined>(ChefOnTheWay)
    let [isSelected, setIsSelected] = useState<number>(0)
    let [link, setLink] = useState<string>('https://chef-ontheway.netlify.app')

    // Set up timer for Starter animation
    let [isImgVisible, setIsImgVisible] = useState<boolean>(false) 
    let [isLiVisible, setIsLiVisible] = useState<boolean>(false) 


    // Set up for Navbar and Header color Function
    const handleLinkClick = (color: string) => {
        setBackgroundColor(color);
        setImageBoolean(true);
    };

    const isMobile = useMediaQuery({
        query: "(max-device-width: 768px)",
      });


    // Onclick function for the Menu Page with Image, link Background color
    const handleChangeImg = (value:number) => {
        if(value === 1){
            return (
                setImageMenu(ChefOnTheWay),
                setLink('https://chef-ontheway.netlify.app'),
                setIsSelected(1)
                )
        } else if(value === 2){
            return(
                setImageMenu(EventApp),
                setLink('https://event-app.adaptable.app'),
                setIsSelected(2)
            )
        }else if(value === 3){
            return (
                setImageMenu(ZombieSurvival),
                setLink('https://dokryptos.github.io/FinalTest-Survival_Game/index.html'),
                setIsSelected(3)
            )
        }else if (value === 4){
            return (
                setImageMenu(Lapicide),
                setLink('https://lapicide.netlify.app'),
                setIsSelected(4)
            )
        } else {
            return (
                setImageMenu(ChefOnTheWay),
                setLink('https://chef-ontheway.netlify.app')
                )
        }

    }


    // Timer when you coming inside this page for animation
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



    // Variants for Motion framer Li animation
    const liVariants = {
        hidden: {translateX: '38vw', translateY: '25vh'},
        visible: { translateX: '10vw', translateY: '25vh'},
    }
    const imgVariants = {
        hidden: { opacity: 0, translateY: '25vh'},
        visible: { opacity: 1, translateY: '25vh'},
    };



    return(
        <>
        {isMobile ? (
                    <div className='menu-container' style={{ backgroundColor: backgroundColor}}>
            
                    <Header onColorChange={handleLinkClick} />
                    <Navbar imageUrl={imageBoolean} />
        
        
                    <div className='projet'>
                        <ul className={`list-project`}>
        
                            <li 
                            className={isSelected === 1 ? 'selected' : 'not'}
                            onClick={() => {handleChangeImg(1)}}>
                                Chef on the Way</li>
        
        
                            <li 
                            className={isSelected === 2 ? 'selected' : 'not'}
                            onClick={() => {handleChangeImg(2)}}>
                                Events App</li>
                            
        
                            <li 
                            className={isSelected === 3 ? 'selected' : 'not'}
                            onClick={() => {handleChangeImg(3)}}>
                                Zombie Survival</li>
                            
        
                            <li 
                            className={isSelected === 4 ? 'selected' : 'not'}
                            onClick={() => {handleChangeImg(4) }}>
                                Lapicide</li>
        
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
                    <h3 className='img-text'>View it Online</h3>
                    </motion.div>
                </div >
            </div>
        
        ) : (
        <div className='menu-container' style={{ backgroundColor: backgroundColor}}>
            
            <Header onColorChange={handleLinkClick} />
            <Navbar imageUrl={imageBoolean} />


            <div className='projet'>
                <div className='list-project'>
                <ul className='list-project-ul'>

                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}
                    transition={{ type:'spring', duration:0.75}}
                    className={isSelected === 1 ? 'selected' : 'not'}
                    onClick={() => {handleChangeImg(1)}}>
                        Chef on the Way</motion.li>


                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}
                    transition={{ type:'spring', duration: 1.25}}
                    className={isSelected === 2 ? 'selected' : 'not'}
                    onClick={() => {handleChangeImg(2)}}>
                        Events App</motion.li>
                    

                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}                    
                    transition={{ type:'spring', duration: 1.75}}
                    className={isSelected === 3 ? 'selected' : 'not'}
                    onClick={() => {handleChangeImg(3)}}>
                        Zombie Survival</motion.li>
                    

                    <motion.li 
                    initial='hidden'
                    animate={isLiVisible ? 'visible' : 'hidden'}      
                    variants={liVariants}
                    transition={{ type:'spring', duration: 2.5}} 
                    className={isSelected === 4 ? 'selected' : 'not'}
                    onClick={() => {handleChangeImg(4) }}>
                        Lapicide</motion.li>

                </ul>
            </div>
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
        )}
    </>
    )
}
