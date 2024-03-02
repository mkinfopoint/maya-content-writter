import React from 'react'
import { proImg } from '../assets/images'

const Banner = () => {
    return (
        <>
            <div className="total_banner_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h1 className='head'>
                                Im <span>Audrey Joann,</span> <br />
                                Content Writer
                            </h1>
                            <span className='quote'>“</span>
                            <div className="parra_sec">
                                <h6>I was blown away by Audrey Joann's unparalleled ability to transform mundane ideas into captivating narratives. Her content is like a magic spell that turns words into pure gold!</h6>
                                <p>-Harish M (Senior Web Developer, Maayasthra)</p>
                            </div>
                            <div className="btnsec">
                                <button className="btn hire_btn">
                                    Hire Me
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="img_sec">
                                <img src={proImg} alt="" className="profile_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner