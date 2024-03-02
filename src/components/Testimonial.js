import React from 'react'
import { GiDiamonds, FaStar } from '../config/icons';
import OwlCarousel from "react-owl-carousel";
import { quouteImg, tesmonialIllustrator } from '../assets/images';

const Testimonial = () => {
    const tetimonialData = [
        {
            name: `Henry Arthur`,
            designation: `CEO, Food Express`,
            parra: `"<span class="name" >Audrey Joann is a content maestro!</span>  Her writing prowess turns every idea into a captivating masterpiece, breathing life into our brand and enchanting our audience."`
        },
        {
            name: `Henry Arthur`,
            designation: `CEO, Food Express`,
            parra: `"<span class="name" >Audrey Joann is a content maestro!</span>  Her writing prowess turns every idea into a captivating masterpiece, breathing life into our brand and enchanting our audience."`
        },
        {
            name: `Henry Arthur`,
            designation: `CEO, Food Express`,
            parra: `"<span class="name" >Audrey Joann is a content maestro!</span>  Her writing prowess turns every idea into a captivating masterpiece, breathing life into our brand and enchanting our audience."`
        },
        {
            name: `Henry Arthur`,
            designation: `CEO, Food Express`,
            parra: `"<span class="name" >Audrey Joann is a content maestro!</span>  Her writing prowess turns every idea into a captivating masterpiece, breathing life into our brand and enchanting our audience."`
        },
    ]
    return (
        <>
            <div className="total_testimonialsec">
                <div className="header_sec">
                    <div className="head_star_sec head_star_sectwo">
                        <span><GiDiamonds /></span>    <h1> Testimonials</h1> <span><GiDiamonds /></span>
                    </div>
                    <p>that speak to my results</p>
                </div>
                <div className="container">
                    <div className="total_carouselsec">
                        <OwlCarousel
                            className="owl-carousel owl-theme testimonial_carousel"
                            margin={80}
                            center={true}
                            autoplay={true}
                            loop
                            dots={true}
                            nav={true}
                            responsive={{
                                0: {
                                    items: 1,
                                    dots: true,
                                    nav: true,
                                    stagePadding: 20,
                                    navText: ["<div class='nav-button owl-prev'><i class='fa-solid fa-chevron-left'></i></div>",
                                        "<div class='nav-button owl-next'><i class='fa-solid fa-chevron-right'></i></div>"],
                                },
                                600: {
                                    items: 1,
                                    dots: true,
                                    nav: true,
                                    navText: ["<div class='nav-button owl-prev'><i class='fa-solid fa-chevron-left'></i></div>",
                                        "<div class='nav-button owl-next'><i class='fa-solid fa-chevron-right'></i></div>"],
                                },
                                1000: {
                                    items: 2,
                                    dots: true,
                                    nav: true,
                                    navText: ["<div class='nav-button owl-prev'><i class='fa-solid fa-chevron-left'></i></div>",
                                        "<div class='nav-button owl-next'><i class='fa-solid fa-chevron-right'></i></div>"],
                                },
                            }}
                        >
                            {
                                tetimonialData?.map((dat, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <div className="testimonial_card">
                                                <img src={tesmonialIllustrator} alt="tesmonialIllustrator" className="illu" />
                                                <div className="rating_sec">
                                                    <div className="iconsec">
                                                        <span><FaStar /></span>
                                                        <span><FaStar /></span>
                                                        <span><FaStar /></span>
                                                        <span><FaStar /></span>
                                                        <span><FaStar /></span>
                                                    </div>
                                                    <h5>5.0</h5>
                                                </div>

                                                <p dangerouslySetInnerHTML={{ __html: dat?.parra }} className="feed_back">
                                                </p>
                                                <div className="total_desig_sec">
                                                    <div>
                                                        <img src={quouteImg} alt="quote" />
                                                    </div>
                                                    <div className="desigsec">
                                                        <h5 className='role_name'>{dat?.name}</h5>
                                                        <p className='desig'>{dat?.designation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial