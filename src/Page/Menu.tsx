
import React,{useState, FunctionComponent, ImgHTMLAttributes} from 'react'
import './Menu.css'
import Navbar from '../Composents/Navbar'
import { Header } from '../Composents/Header'
import { motion } from 'framer-motion'
import Menu1 from '../Assets/desktop/Menu1.svg'



export const Menu: FunctionComponent = () => {

    let [backgroundColor, setBackgroundColor] = useState<string>('#252527')
    let [imageBoolean, setImageBoolean] = useState<boolean>(false)
    let [imageMenu, setImageMenu] = useState<string | undefined>(Menu1)

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


    return(
        <div className='menu-container' style={{ backgroundColor: backgroundColor}}>
            <Header onColorChange={handleLinkClick} />
            <Navbar imageUrl={imageBoolean} />
            <motion.div className='projet'>
                <ul className='list-project'>
                    <motion.li 
                    initial={{translateX: '50vw', translateY: '30vh'}}
                    animate={{ translateX: '10vw', translateY: '30vh'}}
                    transition={{ duration: 1, ease: [0, 0, 0.5, 1]}}
                    onClick={() => {handleChangeImg(1)
                    }}>Chef on the Way</motion.li>

                    <li onClick={() => {handleChangeImg(2)}}>Events App</li>
                    <li onClick={() => {handleChangeImg(3)}}>Zombie Survival</li>
                    <li onClick={() => {handleChangeImg(4) }}>Lapicide</li>
                </ul>
            </motion.div >
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{ duration: 2}}
            >
                <img src={imageMenu} alt='imgMenu'  />
            </motion.div>
        </div>
    )
}
