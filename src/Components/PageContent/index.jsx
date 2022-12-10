import React from 'react'
import './index.css'
function index({ data }) {
    return (
        <div className={`pageContent ${data.direction} `}>
            <div className="pageContent__content pad">
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                <div className="pageContent__btns">
                    {
                        data.btn ? <button>Get Stared</button> : null
                    }

                    {
                        data.appleStore ?
                            <a href="#">
                                <img src={data.appleStore} alt="Apple Sotre" />
                            </a>
                            : null
                    }
                    {
                        data.googlePlay ?
                            <a href="#">
                                <img src={data.googlePlay} alt="Google Play" />
                            </a>
                            : null
                    }
                </div>
            </div>
            <div className="pageContent__image"><img src={data.img} alt={data.title} />
            </div>
        </div>
    )
}

export default index