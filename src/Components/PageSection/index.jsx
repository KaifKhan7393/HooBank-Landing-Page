import React from 'react'
import './index.css'
import Card from './Card'
import Rewards from '../../assets/star.svg'
import Security from '../../assets/security.svg'
import BalanceTransfer from '../../assets/Balance-transfer.svg'

const Data = [
    {
        id: 1,
        title: "Rewards",
        text: "The best credit cards offer some tantalizing combinations of promotions and prizes",
        img: Rewards
    },
    {
        id: 2,
        title: "100% Secured",
        text: "We take proactive steps make sure your information and transactions are secure.",
        img: Security,
        class: "hoverEffect"
    },
    {
        id: 3,
        title: "Balance Transfer",
        text: "A balance transfer credit card can save you a lot of money in interest charges.",
        img: BalanceTransfer
    },
];
function index() {
    return (
        <div className="pageSection pad
        ">
            <div className="pageSection__content">
                <h2>You do the business, we’ll handle the money.</h2>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button>Get Started</button>
            </div>
            <div className="pageSection__cards">
                {Data.map((data) => (
                    <Card data={data} key={data.id} />
                ))}
            </div>
        </div>
    )
}

export default index