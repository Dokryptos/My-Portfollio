
import React,{useState, FunctionComponent} from 'react'
import './Menu.css'
import Navbar from '../Composents/Navbar'
import { Header } from '../Composents/Header'
import { motion } from 'framer-motion'




export const Menu: FunctionComponent = () => {

    let [backgroundColor, setBackgroundColor] = useState<string>('#252527')
    let [imageBoolean, setImageBoolean] = useState<boolean>(false)
    
    const handleLinkClick = (color: string) => {
        setBackgroundColor(color);
        setImageBoolean(true);
    };


    return(
        <div className='menu-container' style={{ backgroundColor: backgroundColor}}>
            <Header onColorChange={handleLinkClick} />
            <Navbar imageUrl={imageBoolean} />
            <div className='projet'>
                <ul>
                    <li></li>
                </ul>
            </div >
            <div>
                <img />
            </div>
        </div>
    )
}
