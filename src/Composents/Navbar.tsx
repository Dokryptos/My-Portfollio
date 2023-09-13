import React,{ FunctionComponent, useState} from 'react'
import classNames from "classnames";
import { Link, useNavigate } from 'react-router-dom';
import DOK from '../Assets/desktop/Dok1.svg'
import DOKblack from "../Assets/desktop/Dok-black.svg"
import {motion} from 'framer-motion'
import "./Navbar.css"

interface NavbarProps {
    imageUrl: boolean;
}



const Navbar: FunctionComponent<NavbarProps>= ({imageUrl}) => {

    let navigate = useNavigate()
    let [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleRedirect = () => {
        navigate('/');
    }


    return(
        <>  
            {openMenu && (
                <motion.div
                initial={{ y: '100%'}}                
                animate={{ y: '0%'}}
                exit={{ y: '100%'}}
                transition={{ duration: 0.4}}
                className='navbar-container'
                onClick={handleOpenMenu}
                >
                    <ul className='ul-Link'>
                        <Link to={"/menu"}>
                            <li>Work</li>
                        </Link>
                        <Link to={'/about'}>
                            <li>About</li>
                        </Link>
                        <Link to={"mailto:pierredok@outlook.fr"}>
                            <li>Contact me</li>
                        </Link>
                    </ul>
                </motion.div>
            )}

        <div>
            { imageUrl ? (
            <div className='div-btn-nav'>
                <button  className={classNames ("navbar-burger", {'open': openMenu})} onClick={handleOpenMenu}>
                    <span className="burger-bar black" ></span>
                    <span className="burger-bar black" ></span>
                    <span className="burger-bar black" ></span>
                </button>
            <img src={DOKblack} alt='DOK-menu' className='img-nav' onClick={handleRedirect}/>
            </div>
            ) : (
            <div className='div-btn-nav'>
                <div  className={classNames ("navbar-burger", {'open': openMenu})} onClick={handleOpenMenu}>
                    <span className="burger-bar white" ></span>
                    <span className="burger-bar white" ></span>
                    <span className="burger-bar white" ></span>
                </div>
                    <img src={DOK} alt='DOK-black' className='img-nav' onClick={handleRedirect} />
            </div>
            )}

        </div>


        </>
    )


}

export default Navbar