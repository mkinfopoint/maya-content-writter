import React from 'react'
import { footerImg } from '../assets/images'
import { MdWifiCalling3, IoMdMail, FaLocationDot } from '../config/icons';
const Footer = () => {
    return (
        <>
            <div className="total_footer_sec">
                <div className="container">
                    <div className="total_contentsec">
                        <div className="left_sec">
                            <div className="namesec">
                                {/* <img src={footerImg} alt="" /> */}
                                <h1>Srinidhi.</h1>
                                <p>
                                    Content Writer
                                </p>
                            </div>
                            <p className="content">
                                With <span>7 years of content writing expertise</span>, I specialize in weaving impactful narratives tailored to your needs. From SEO-optimized content to engaging blog posts and precise technical writing,
                            </p>
                            <div className="social_sec">
                                <span>
                                    <a href="#">
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <i class="fa-brands fa-discord"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="right_sec">
                            <button className="btn hireme_btn">
                                Hire Me
                            </button>
                            <div className="address_sec">
                                {/* <a href="#"><span>+1012 3456 789</span> <span className="icon"><MdWifiCalling3 /></span></a> */}
                                <a href="#"><span>hello@sindhuwrites.com</span> <span className="icon"><IoMdMail /></span></a>
                                <a href="#"><span>Chennai, India</span>
                                    <span className="icon"><FaLocationDot /></span></a>
                            </div>
                        </div>
                    </div>
                    <h6 className="bottom_content">
                        Copyright © 2023 <span>Srinidhi.</span> All Rights Reserved
                    </h6>
                </div>
            </div>
        </>
    )
}

export default Footer