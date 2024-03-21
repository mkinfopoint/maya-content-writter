import React from 'react'
import { GiDiamonds } from '../config/icons';

const FormSec = () => {
    return (
        <>
            <div className="total_formsec">
                <div className="container">
                    <div className="header_sec" data-aos="fade-up">
                        <h1>Have An Awesome Project Idea?</h1>
                        <div className="head_star_sec head_star_sectwo">
                            <span><GiDiamonds /></span>    <h4> Let's Discuss</h4> <span><GiDiamonds /></span>
                        </div>
                        <button className="btn hireme_btn">
                            Hire Me
                        </button>
                        {/* <form className='mail_form' data-aos="fade-down">
                            <div className="form-group">
                                <input placeholder='Enter Your Email Address' type="text" className="form-control" />
                                <button className="btn book_btn">
                                    Book Call
                                </button>
                            </div>
                            <div className="achive_sec">
                                <div className="first_sec">
                                    <h6>No Spam  : &#41; Pinky Promise.</h6>
                                </div>
                                <span><GiDiamonds /></span>
                                <div id='blog' className="second_sec">
                                    <h6>4.9/5 Average Ratings</h6>
                                </div>
                                <span><GiDiamonds /></span>
                                <div className="second_sec">
                                    <h6>Certified Content Writer</h6>
                                </div>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormSec