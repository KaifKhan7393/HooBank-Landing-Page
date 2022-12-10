import React from 'react'
import './index.css'

function Card({ data }) {
    return (
        <div className={`pageSection__card ${data.class}`}>
            <img src={data.img} alt={data.title} />
            <div>
                <h4>{data.title}</h4>
                <p>{data.text}</p>
            </div>
        </div>
    )
}

export default Card