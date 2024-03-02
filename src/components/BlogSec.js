import React from 'react'
import { GiDiamonds } from '../config/icons';
import { blogImg1 } from '../assets/images';
import OwlCarousel from "react-owl-carousel";
import MarqueRunning from './MarqueRunning';

const BlogSec = () => {
    const blogData = [
        {
            img: blogImg1,
            featureone: `SEO Mastery`,
            featuretwo: `Content Writing`,
            header: `Unleashing Innovation<br/> Through Exceptional Content`,
            parra: `As adept storytellers, our team crafts engaging narratives that transcend the ordinary, leaving an indelible mark on your audience... <a href='#' class='readmore'>Read More</a>`
        },
        {
            img: blogImg1,
            featureone: `SEO Mastery`,
            featuretwo: `Content Writing`,
            header: `Unleashing Innovation<br/> Through Exceptional Content`,
            parra: `As adept storytellers, our team crafts engaging narratives that transcend the ordinary, leaving an indelible mark on your audience... <a href='#' class='readmore'>Read More</a>`
        },
        {
            img: blogImg1,
            featureone: `SEO Mastery`,
            featuretwo: `Content Writing`,
            header: `Unleashing Innovation<br/> Through Exceptional Content`,
            parra: `As adept storytellers, our team crafts engaging narratives that transcend the ordinary, leaving an indelible mark on your audience... <a href='#' class='readmore'>Read More</a>`
        },
        {
            img: blogImg1,
            featureone: `SEO Mastery`,
            featuretwo: `Content Writing`,
            header: `Unleashing Innovation<br/> Through Exceptional Content`,
            parra: `As adept storytellers, our team crafts engaging narratives that transcend the ordinary, leaving an indelible mark on your audience... <a href='#' class='readmore'>Read More</a>`
        },
    ]
    return (
        <>
            <div className="total_blogsec">
                <button className="see_allbtn btn">
                    See  All <GiDiamonds />
                </button>
                <div className="head_star_sec head_star_sectwo">
                    <span><GiDiamonds /></span>    <h1>From My Blog</h1> <span><GiDiamonds /></span>
                </div>
                <div className="container">
                    <div className="total_carouselsec">
                        <OwlCarousel
                            className="owl-theme blog_carousel"
                            autoplay={true}
                            loop={true}
                            margin={20}
                            nav={true}
                            dots={false}
                            responsive={{
                                0: {
                                    items: 1,
                                    animateOut: "slideOutDown",
                                    animateIn: "flipInX",
                                    nav: true,
                                    mouseDrag: false,
                                    mergeFit: true,
                                    autoplayHoverPause: true,
                                },
                                600: {
                                    items: 2,
                                    animateOut: "slideOutDown",
                                    animateIn: "flipInX",
                                    nav: true,
                                    mouseDrag: false,
                                    mergeFit: true,
                                    autoplayHoverPause: true,
                                },
                                1000: {
                                    items: 4,
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
                            {blogData?.map((data, index) => {
                                return (
                                    <div key={index} className="blogs_card">
                                        <img src={data?.img} alt="Blog" />
                                        <div className="feature_sec">
                                            <h6 className="feature">
                                                {data?.featureone}
                                            </h6>
                                            <span><GiDiamonds /></span>
                                            <h6 className="feature">
                                                {data?.featuretwo}
                                            </h6>
                                        </div>
                                        <h5 dangerouslySetInnerHTML={{ __html: data?.header }} className="heading">
                                        </h5>
                                        <p dangerouslySetInnerHTML={{ __html: data?.parra }} className="content_para"></p>
                                    </div>
                                );
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className="marquee_sec">
                <MarqueRunning />
            </div>
        </>
    )
}

export default BlogSec