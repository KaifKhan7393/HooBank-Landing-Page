import React from 'react'
import './index.css'
import { Logo } from '../../assets/index'
import { FiInstagram } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

const FooterMenu = [
    {
        id: 1,
        title: "Usefull Links",
        menu: [
            {
                id: "Content",
                title: "Content",
                path: '#'
            },
            {
                id: "How it Works",
                title: "How it Works",
                path: '#'
            },
            {
                id: "Create",
                title: "Create",
                path: '#'

            },
            {
                id: "Explore",
                title: "Explore",
                path: '#'
            },
            {
                id: "Terms & Services",
                title: "Terms & Services",
                path: '#'
            }
        ]
    },
    {
        id: 2,
        title: "Community",
        menu: [
            {
                id: "Help Center",
                title: "Help Center",
                path: '#'
            },
            {
                id: "Partners",
                title: "Partners",
                path: '#'
            },
            {
                id: "Suggestions",
                title: "Suggestions",
                path: '#'
            },
            {
                id: "Blog",
                title: "Blog",
                path: '#'
            },
            {
                id: "Newsletters",
                title: "Newsletters",
                path: '#'
            }
        ]
    },
    {
        id: 3,
        title: "Partner",
        menu: [
            {
                id: "Our Partner",
                title: "Our Partner",
                path: '#'
            },
            {
                id: "Become a Partner",
                title: "Become a Partner",
                path: '#'
            }
        ]
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
                {
                    FooterMenu.map((menu) => (
                        <div className="footer__menu" key={menu.id}>
                            <h5>{menu.title}</h5>
                            <ul>
                                {
                                    menu.menu.map((item) => (
                                        <li key={item.id}><a
                                            href={item.path}
                                        >
                                            {item.title}
                                        </a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))

                }
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