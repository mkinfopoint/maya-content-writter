import React from 'react'
import Marquee from "react-fast-marquee";
import { GiDiamonds } from '../config/icons'
import { listIconImg, writer, starImg, marqueeIllustratorImg } from '../assets/images';

const MarqueeSec = () => {
    return (
        <>
            <div className="total_marquesec">
                <div className="marquee_sec">
                    <Marquee autoFill={true} direction="right" speed={100}>
                        <div className="first_head">
                            <h1 className="headone">Start Your Success Story Today!</h1>
                            <span><GiDiamonds /></span>
                            <h1 className='headtwo'>Unlock the Power of Words</h1>
                            <span><GiDiamonds /></span>
                        </div>
                    </Marquee>
                </div>
                <div className="writer_sec">
                    <img className='illu' src={marqueeIllustratorImg} alt="" />
                    <div className="container">
                        <div className="row marque_row">

                            <div className="col-lg-4 col-sm-12 col-md-6">
                                <div className="writer_img">
                                    <img src={writer} alt="writer" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12 col-md-6">
                                <div className="content_sec">
                                    <div className="sec_one">
                                        <div className="img_sec">
                                            <img src={listIconImg} alt="list" className="illustrator" />
                                        </div>
                                        <div className="content">
                                            <h1>Hey, Iam <span className='name'>Audrey Joann.</span></h1>
                                            <p>where the power of words comes alive.</p>
                                        </div>
                                    </div>
                                    <div className="sec_one">
                                        <div className="img_sec">
                                            <img src={listIconImg} alt="list" className="illustrator" />
                                        </div>
                                        <div className="content">
                                            <p>With <span className='parra_bold'>5 years of content writing expertise,</span> I specialize in weaving impactful narratives tailored to your needs. From SEO-optimized content to engaging blog posts and precise technical writing, I am dedicated to helping businesses not just communicate but resonate with their audience, ultimately boosting their online presence.</p>
                                        </div>
                                    </div>
                                    <div className="sec_one">
                                        <div className="img_sec">
                                            <img src={starImg} alt="list" className="star_img" />
                                        </div>
                                        <div className="content">
                                            <h6>Contact me to craft content that connects and converts.</h6>
                                        </div>
                                    </div>
                                    <button className="btn primary_btns">
                                        Begin Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarqueeSec