import React, { useEffect, useState } from 'react'
import './index.css'
import { Logo } from '../../assets/index'
import { FiMenu } from 'react-icons/Fi'
import { FaTimes } from 'react-icons/Fa'

const Links = [
    {
        id: 1,
        title: 'Home',
        url: '#'
    },
    {
        id: 2,
        title: 'About Us',
        url: '#'
    },
    {
        id: 3,
        title: 'Features',
        url: '#'
    },
    {
        id: 4,
        title: 'Solution',
        url: '#'
    }
];

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
                    {
                        Links.map((link) => (
                            <li key={link.id}>
                                <a href={link.url} onClick={() => setMenu(true)}>{
                                    link.title
                                }</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default index