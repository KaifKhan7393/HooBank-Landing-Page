import React from 'react'
import './index.css'
import Card from './Card'
import { Avatar1, Avatar2, Avatar3 } from '../../assets/index'

const Data = [
    {
        id: 1,
        text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Harman Jensen",
        Designation: "Founder & Leader",
        img: Avatar1,
    },
    {
        id: 2,
        text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        Designation: "Founder & Leader",
        img: Avatar2
    },
    {
        id: 3,
        text: "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        Designation: "Founder & Leader",
        img: Avatar3
    },
];
function index() {
    return (
        <div className="testimonial pad">
            <div className="testimonial__content">
                <h2>What people are saying about us</h2>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="testimonial__cards">
                {
                    Data.map((data) => (
                        <Card Data={data} key={data.id} />
                    ))
                }
            </div>
            <div className="testimonial__gradient"></div>
        </div>
    )
}

export default index