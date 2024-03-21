import React from 'react'
import MarqueRunning from './MarqueRunning'
import { counterImg, didBeforeImg, beforeillu } from '../assets/images'
import { GiDiamonds } from '../config/icons';
import CountUp from 'react-countup';
import isMobile from "is-mobile";
import MarqueRunningTwo from './MarqueRunningTwo';

const DidBeforeSec = () => {
    return (
        <>
            <div className="whatdid_total_sec">
                <MarqueRunningTwo />
                <div className="content_container">
                    <div className="container">
                        <div className="row what_didrow">
                            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                                <div className="img_sec">
                                    <img src={didBeforeImg} alt="writer" />
                                    <button className="btn shedule_btn">
                                        Shedule a Session
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 col-sm-12" data-aos="fade-down">
                                <div className="total_content_sec">
                                    <img src={beforeillu} alt="whatbefore_illu" className="whatbefore_illu" />
                                    <div className="head_star_sec head_star_secthree">
                                        <span><GiDiamonds /></span>    <h1> What I did before?</h1>
                                    </div>
                                    <h5 className="exp_head">
                                        <span>7 Years</span> of Expertise in Crafting Impactful Narratives
                                    </h5>
                                    <p>
                                        From crafting SEO-Optimized Content to creating Engaging Blog Posts and executing Precise Technical Writing. With a relentless commitment to enhancing business communication and online presence, I specialize in delivering content strategies that resonate and elevate your brand in the digital arena.
                                    </p>
                                    <div className="counted_row">
                                        <img src={counterImg} alt="divide_img" className="divide_img" />
                                        <div className="row counter_row">
                                            <div className={isMobile() ? "counter_col" : "col-lg-3 col-md-6 col-sm-6"}>
                                                <div className="counter_sec">
                                                    <h2>										<CountUp end={5262} duration={5} enableScrollSpy /> +
                                                    </h2>

                                                    <p className='align_para'>Satisfied Clients</p>
                                                </div>
                                            </div>
                                            <div className={isMobile() ? "counter_col" : "col-lg-3 col-md-6 col-sm-6"}>
                                                <div className="counter_sec">
                                                    <h2>										<CountUp end={1526} duration={5} enableScrollSpy /> +
                                                    </h2>
                                                    <p className='align_para'>Completed Projects</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row counter_row">
                                            <div className={isMobile() ? "counter_col" : "col-lg-3 col-md-6 col-sm-6"}>
                                                <div className="counter_sec">
                                                    <h2>										<CountUp end={150} duration={5} enableScrollSpy /> +
                                                    </h2>
                                                    <p className='align_para'>Books Published</p>
                                                </div>
                                            </div>
                                            <div className={isMobile() ? "counter_col" : "col-lg-3 col-md-6 col-sm-6"}>
                                                <div id='test' className="counter_sec">
                                                    <h2>										<CountUp end={10} duration={5} enableScrollSpy /> +
                                                    </h2>
                                                    <p className='align_para'>Countries</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DidBeforeSec