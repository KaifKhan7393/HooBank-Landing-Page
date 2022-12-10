import React from 'react'
import './index.css'
import { AirBnb, Binance, Coinbase, DropBox } from '../../assets/index'

const images = [AirBnb, Binance, Coinbase, DropBox];
function index() {
    return (
        <div className="companyLogo pad">
            {
                images.map((image, index) => (
                    <img src={image} alt="Company Logo"
                        key={index} />
                ))
            }
        </div>
    )
}

export default index