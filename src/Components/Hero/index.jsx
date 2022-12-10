import React from 'react'
import HeroImg from '../../assets/Hero-Img-1.png'
import Percentage from '../../assets/Percentage.svg'
import { BsArrowUpRight } from 'react-icons/bs'
import './index.css'
import GetStarted from '../GetStarted/index'
function index() {
    return (
        <>
            <div className='hero'>
                <div className="hero__content ">
                    <div className="hero__top">
                        <img src={Percentage} alt="% Icon" />
                        <p><span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</p>
                    </div>
                    <div className="hero__textAndBtn">
                        <h1>The Next<span className="text__gradient"> Generation </span>
                        </h1>
                        {
                            window.innerWidth > 840 ? <GetStarted /> : null
                        }
                    </div>
                    <h1> Payment Method.</h1>
                    <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                        We examine annual percentage rates, annual fees.</p>
                </div>
                <div className="hero__image">
                    <img src={HeroImg} alt="Hero Image" />
                    <div className="hero__gradient"></div>
                    <div className="hero__gradient"></div>
                </div>
                {
                    window.innerWidth <= 840 ? <GetStarted /> : null
                }
            </div>
            <div className="hero__numbers pad">
                <h3>3800+ <span className="text__gradient">User Active</span></h3>|
                <h3>230+ <span className="text__gradient">TRUSTED BY COMPANY</span></h3>|
                <h3>$230M+ <span className="text__gradient">TRANSACTION</span></h3>
            </div>
        </>
    )
}

export default index