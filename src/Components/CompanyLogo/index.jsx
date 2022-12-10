import React from 'react'
import './index.css'
import AirBnb from '../../assets/AirBnb.png'
import Binance from '../../assets/Binance.png'
import Coinbase from '../../assets/Coinbase.png'
import DropBox from '../../assets/DropBox.png'

const images = [AirBnb, Binance, Coinbase, DropBox];
function index() {
    return (
        <div className="companyLogo pad">
            {
                images.map((image, index) => (
                    <img src={image} alt="Company Logo"
                        key={image.key} />
                ))
            }
        </div>
    )
}

export default index