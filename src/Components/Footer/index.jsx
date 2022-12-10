import React from 'react'
import './index.css'
import Logo from '../../assets/Logo.svg'
import { FiInstagram } from 'react-icons/fi'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'

const Menu1 = [
    {
        id: 1,
        title: "Content",
        path: '#'
    },
    {
        id: 2,
        title: "How it Works",
        path: '#'
    },
    {
        id: 3,
        title: "Create",
        path: '#'
    },
    {
        id: 4,
        title: "Explore",
        path: '#'
    },
    {
        id: 5,
        title: "Terms & Services",
        path: '#'
    }
];
const Menu2 = [
    {
        id: 1,
        title: "Help Center",
        path: '#'
    },
    {
        id: 2,
        title: "Partners",
        path: '#'
    },
    {
        id: 3,
        title: "Suggestions",
        path: '#'
    },
    {
        id: 4,
        title: "Blog",
        path: '#'
    },
    {
        id: 5,
        title: "Newsletters",
        path: '#'
    }
];
const Menu3 = [
    {
        id: 1,
        title: "Our Partner",
        path: '#'
    },
    {
        id: 2,
        title: "Become a Partner",
        path: '#'
    }
];
const MediaIcons = [
    {
        id: 1,
        icon: <FiInstagram className='footer__mediaIcons' />,
        path: '#'
    },
    {
        id: 2,
        icon: <BsFacebook className='footer__mediaIcons' />,
        path: '#'
    },
    {
        id: 3,
        icon: <FaTwitter className='footer__mediaIcons' />,
        path: '#'
    },
    {
        id: 4,
        icon: <BsLinkedin className='footer__mediaIcons' />,
        path: '#'
    }
];

function index() {
    return (
        <div className="footer pad">
            <div className="footer__menus">
                <div className="footer__menu footer__menuLogo">
                    <img src={Logo} alt="Logo" />
                    <p>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className="footer__menu">
                    <h5>Usefull Links</h5>
                    <ul>
                        {Menu1.map((menu) => (
                            <li key={menu.id}><a href={menu.path}>{menu.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="footer__menu">
                    <h5>Community</h5>
                    <ul>
                        {Menu2.map((menu) => (
                            <li key={menu.id}><a href={menu.path}>{menu.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="footer__menu">
                    <h5>Partner</h5>
                    <ul>
                        {Menu3.map((menu) => (
                            <li key={menu.id}><a href={menu.path}>{menu.title}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer__copy">
                <p>Copyright © 2021 HookBank. All rights reserved.</p>
                <div className="footer__media">
                    {
                        MediaIcons.map((icon) => (
                            <a href={icon.path} key={icon.id}>
                                {icon.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default index