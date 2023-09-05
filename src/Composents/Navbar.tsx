import React,{ FunctionComponent, useState} from 'react'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import DOK from '../Assets/desktop/Dok1.svg'
import DOKblack from "../Assets/desktop/Dok-black.svg"
import {motion} from 'framer-motion'
import "./Navbar.css"

interface NavbarProps {
    imageUrl: boolean;
}



const Navbar: FunctionComponent<NavbarProps>= ({imageUrl}) => {

    let [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }


    return(
        <>  
            {openMenu && (
                <motion.div
                initial={{ y: '100%'}}                
                animate={{ y: '0'}}
                exit={{ y: '100%'}}
                transition={{ duration: 0.4}}
                className='navbar-container'
                >
                    <ul className='ul-Link'>
                        <Link to={"/menu"}>
                            <li>Work</li>
                        </Link>
                        <Link to={'/about'}>
                            <li>About</li>
                        </Link>
                        <Link to={"/contact"}>
                            <li>Contact me</li>
                        </Link>
                    </ul>
                </motion.div>
            )}

        <div>
            { imageUrl ? (
            <div>
                <button  className={classNames ("navbar-burger", {'open': openMenu})} onClick={handleOpenMenu}>
                    <span className="burger-bar black" ></span>
                    <span className="burger-bar black" ></span>
                    <span className="burger-bar black" ></span>
                </button>
            <img src={DOKblack} alt='DOK-menu' className='img-nav'/>
            </div>
            ) : (
            <div>
                <div  className={classNames ("navbar-burger", {'open': openMenu})} onClick={handleOpenMenu}>
                    <span className="burger-bar white" ></span>
                    <span className="burger-bar white" ></span>
                    <span className="burger-bar white" ></span>
                </div>
                <img src={DOK} alt='DOK-black' className='img-nav' />
            </div>
            )}

        </div>


        </>
    )


}

export default Navbar