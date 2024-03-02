import React from 'react';
import { GiDiamonds } from '../config/icons';
import { carouselIllu, serviceImg1 } from '../assets/images';
import OwlCarousel from "react-owl-carousel";


const ServiceOffered = () => {
    const serviceOfferedData = [
        {
            img: serviceImg1,
            header: `Social Media`,
            para: `Ignite your online presence with our blog writing services, seamlessly blending captivating storytelling and strategic SEO to leave a lasting impression on your audience.`,
        },
        {
            img: serviceImg1,
            header: `Blog Writing`,
            para: `Ignite your online presence with our blog writing services, seamlessly blending captivating storytelling and strategic SEO to leave a lasting impression on your audience.`,
        },
        {
            img: serviceImg1,
            header: `SEO Creation`,
            para: `Ignite your online presence with our blog writing services, seamlessly blending captivating storytelling and strategic SEO to leave a lasting impression on your audience.`,
        },
    ]
    return (
        <>
            <div className="service_offered_total_sec">
                <div className="container">
                    <div className="heading_sec">
                        <span><GiDiamonds /></span>
                        <h1 className='heading' >Services Offered </h1>
                        <span><GiDiamonds /></span>
                        <button className="btn seeall_btn">
                            See All
                        </button>
                    </div>
                    <div className="serve_carousel">
                        <img src={carouselIllu} className='car_img' alt="carousel Img" />
                        <OwlCarousel
                            className="owl-carousel owl-theme"
                            margin={20}
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
                                    items: 2,
                                    dots: true,
                                    nav: true,
                                    navText: ["<div class='nav-button owl-prev'><i class='fa-solid fa-chevron-left'></i></div>",
                                        "<div class='nav-button owl-next'><i class='fa-solid fa-chevron-right'></i></div>"],
                                },
                                1000: {
                                    items: 3,
                                    dots: true,
                                    nav: true,
                                    navText: ["<div class='nav-button owl-prev'><i class='fa-solid fa-chevron-left'></i></div>",
                                        "<div class='nav-button owl-next'><i class='fa-solid fa-chevron-right'></i></div>"],
                                },
                            }}
                        >
                            {
                                serviceOfferedData?.map((dat, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <div className="servicesoffered_card">
                                                <img src={dat?.img} alt="service" />
                                                <h6>{dat?.header}</h6>
                                                <p>{dat?.para}</p>
                                                <button className='begun_btn btn'>
                                                    Begin Now
                                                </button>
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

export default ServiceOffered