import React,{ FunctionComponent, useState} from 'react'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import DOK from '../Assets/desktop/Dok1.svg'
import DOKblack from "../Assets/desktop/Dok-black.svg"



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
            <nav className={`${openMenu} ? 'openNav' : 'closeNav' `}>
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
            </nav>

        <div>
            <button  className={classNames ("navbar-burger", {'open': openMenu})} onClick={handleOpenMenu}>
                <span className="burger-bar"></span>
            </button>
            { imageUrl ? (
            <img src={DOKblack} alt='DOK-menu' />
            ) : (
            <img src={DOK} alt='DOK-black' />
            )}

        </div>


        </>
    )


}

export default Navbar