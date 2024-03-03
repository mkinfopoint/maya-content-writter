import React from 'react'
import { unleashImg } from '../assets/images'
import OwlCarousel from "react-owl-carousel";
import { GiDiamonds } from '../config/icons'

const Unleashing = () => {
    const courouselData = [
        {
            header: `Unleashing Innovation <br/> Through Exceptional Content`,
            seo_content: `SEO Mastery`,
            writing: `Content Writing`,
            web: `Web Content`,
            parra_content: `As adept storytellers, our team crafts engaging narratives that transcend the ordinary, leaving an indelible mark on your audience. Seamlessly integrating cutting-edge SEO techniques, we propel your message to the forefront of search engine rankings, ensuring unparalleled visibility. In the realm of technical writing, our precision and clarity demystify complexity, establishing your authority in the industry. Blogs become vibrant expressions of your brand's heartbeat, as we navigate the blogosphere with expertise, capturing attention and fostering meaningful online engagement.`
        },
        {
            header: `Unleashing Innovation<br/> Through Exceptional Content`,
            seo_content: `SEO Mastery`,
            writing: `Content Writing`,
            web: `Web Content`,
            parra_content: `As adept storytellers, our team crafts engaging narratives that transcend the ordinary, leaving an indelible mark on your audience. Seamlessly integrating cutting-edge SEO techniques, we propel your message to the forefront of search engine rankings, ensuring unparalleled visibility. In the realm of technical writing, our precision and clarity demystify complexity, establishing your authority in the industry. Blogs become vibrant expressions of your brand's heartbeat, as we navigate the blogosphere with expertise, capturing attention and fostering meaningful online engagement.`
        },
        {
            header: `Unleashing Innovation<br/> Through Exceptional Content`,
            seo_content: `SEO Mastery`,
            writing: `Content Writing`,
            web: `Web Content`,
            parra_content: `As adept storytellers, our team crafts engaging narratives that transcend the ordinary, leaving an indelible mark on your audience. Seamlessly integrating cutting-edge SEO techniques, we propel your message to the forefront of search engine rankings, ensuring unparalleled visibility. In the realm of technical writing, our precision and clarity demystify complexity, establishing your authority in the industry. Blogs become vibrant expressions of your brand's heartbeat, as we navigate the blogosphere with expertise, capturing attention and fostering meaningful online engagement.`
        },
        {
            header: `Unleashing Innovation<br/> Through Exceptional Content`,
            seo_content: `SEO Mastery`,
            writing: `Content Writing`,
            web: `Web Content`,
            parra_content: `As adept storytellers, our team crafts engaging narratives that transcend the ordinary, leaving an indelible mark on your audience. Seamlessly integrating cutting-edge SEO techniques, we propel your message to the forefront of search engine rankings, ensuring unparalleled visibility. In the realm of technical writing, our precision and clarity demystify complexity, establishing your authority in the industry. Blogs become vibrant expressions of your brand's heartbeat, as we navigate the blogosphere with expertise, capturing attention and fostering meaningful online engagement.`
        },
    ]

    return (
        <>
            <div className="unleashing_total_sec">
                <div className="container">
                    <div className="row unleashrow" data-aos="fade-right">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="img_card">
                                <img src={unleashImg} alt="unleash" />
                                <button id='services' className="btn readmore_btn">
                                    Read More...
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-down">
                            <OwlCarousel
                                className="owl-theme service_carousel"
                                autoplay={true}
                                loop={true}
                                margin={10}
                                dots={false}
                                responsive={{
                                    0: {
                                        items: 1,
                                        animateOut: "slideOutDown",
                                        animateIn: "flipInX",
                                        nav: false,
                                        mouseDrag: false,
                                        mergeFit: true,
                                        autoplayHoverPause: true,
                                    },
                                    600: {
                                        items: 1,
                                        animateOut: "slideOutDown",
                                        animateIn: "flipInX",
                                        nav: false,
                                        mouseDrag: false,
                                        mergeFit: true,
                                        autoplayHoverPause: true,
                                    },
                                    1000: {
                                        items: 1,
                                        animateOut: "slideOutDown",
                                        animateIn: "flipInX",
                                        nav: true,
                                        mouseDrag: false,
                                        mergeFit: true,
                                        autoplayHoverPause: true,
                                        navText: [
                                            "<div class='nav-button owl-prev'><i class='fa-solid fa-angle-left'></i></div>",
                                            "<div class='nav-button owl-next'><i class='fa-solid fa-chevron-right'></i></div>",
                                        ],
                                    },
                                }}
                            >
                                {courouselData?.map((data, index) => {
                                    return (
                                        <div key={index} className="serivices_card">
                                            <div className="total_content">
                                                <h1
                                                    dangerouslySetInnerHTML={{ __html: data?.header }}
                                                    className="service_heading"
                                                ></h1>
                                                <div className="features_sec">
                                                    <h6>{data?.seo_content}</h6> <span><GiDiamonds /></span>  <h6>{data?.writing}</h6>
                                                    <span><GiDiamonds /></span>
                                                    <h6>{data?.web}</h6>
                                                </div>
                                                <div className="parra_content">
                                                    <p>
                                                        {
                                                            data?.parra_content
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Unleashing