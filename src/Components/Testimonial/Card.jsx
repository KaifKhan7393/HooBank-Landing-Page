import React from 'react'
import Comma from '../../assets/Comma.svg'

function Card({ Data }) {
    return (
        <div className={`testimonial__card ${Data.class}`}>
            <img src={Comma} alt="Comma" />
            <p>{Data.text}</p>
            <div className="testimonial__cardInfo">
                <img src={Data.img} alt="Avatar" />
                <div className="testimonail__cardName">
                    <h4>{Data.name}</h4>
                    <p>{Data.Designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Card