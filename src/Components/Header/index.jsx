import React, { useEffect, useState } from 'react'
import './index.css'
import Logo from '../../assets/Logo.svg'
import { FiMenu } from 'react-icons/Fi'
import { FaTimes } from 'react-icons/Fa'
function index() {
    const [menu, setMenu] = useState(true);

    useEffect(() => {
        menu ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
        menu ? document.body.classList.remove('body__blur') : document.body.classList.add('body__blur');
    }, [menu])
    return (
        <div className='header pad'>
            <div className="header__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header__hambergur">
                {menu ? <FiMenu className="header__menubar" onClick={() => setMenu(false)} /> : <FaTimes className="header__menubar" onClick={() => setMenu(true)} />}

            </div>
            <div className={menu ? "header__menu " : "header__menu visible"}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Solution</a></li>
                </ul>
            </div>
        </div>
    )
}

export default index