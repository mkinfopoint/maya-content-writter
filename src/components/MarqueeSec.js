import React from 'react'

import { listIconImg, writer, starImg, marqueeIllustratorImg } from '../assets/images';
import MarqueRunning from './MarqueRunning';

const MarqueeSec = () => {
    return (
        <>
            <div className="total_marquesec" id='about'>
                <MarqueRunning />
                <div className="writer_sec">
                    <img className='illu' src={marqueeIllustratorImg} alt="" />
                    <div className="container">
                        <div className="row marque_row" data-aos="fade-up">
                            <div className="col-lg-4 col-sm-12 col-md-6">
                                <div className="writer_img">
                                    <img src={writer} alt="writer" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12 col-md-6" data-aos="fade-down">
                                <div className="content_sec">
                                    <div className="sec_one">
                                        <div className="img_sec">
                                            <img src={listIconImg} alt="list" className="illustrator" />
                                        </div>
                                        <div className="content" data-aos="fade-down">
                                            <h1>Hey, Iam <span className='name'>Srinidhi</span></h1>
                                        </div>
                                    </div>
                                    <div className="sec_one">
                                        <div className="img_sec">
                                            <img src={listIconImg} alt="list" className="illustrator" />
                                        </div>
                                        <div className="content">

                                            <p>Welcome to my world, where each word I write is steeped in the depth of my knowledge and passion to deliver top tier content. My name is Srinidhi, and I specialize in turning complex concepts into compelling stories, ensuring your message doesn't just reach your audience, but profoundly impacts them.</p>
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