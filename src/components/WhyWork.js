import React from 'react'
import { GiDiamonds } from '../config/icons'
import { illuImg1, illuImg2, line, work1Img, work2Img, work3Img, work4Img } from '../assets/images';

const WhyWork = () => {
    const workData = [
        {
            img: work1Img,
            head: `Customized Content
            Solutions`,
            parra: `Tailored content strategies to meet your unique business needs and goals`
        },
        {
            img: work2Img,
            head: `SEO Mastery`,
            parra: `Expertise in SEO best practices to increase your online visibility and organic reach`
        },
        {
            img: work3Img,
            head: `Timely Delivery`,
            parra: `Commitment to deadlines, ensuring timely delivery without compromising quality`
        },
        {
            img: work4Img,
            head: `Client Centric
            Approach`,
            parra: `A collaborative and transparent approach, keeping you involved at every step`
        },
    ]
    return (
        <>
            <div className="workwithus_total_sec">
                <img src={illuImg1} className='illuimg1' alt="" />
                <img src={illuImg2} className='illuimg2' alt="" />
                <div className="container">
                    <h1 className='heading' ><span><GiDiamonds /></span>
                        Why Work With Me<span><GiDiamonds /></span></h1>
                    <div className="workrow row">
                        {
                            workData?.map((dat, index) => {
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="toalcard">
                                            <div key={index} className="work_card">
                                                <img src={dat?.img} alt="work1" className="top_img" />
                                                <h6>{dat?.head}</h6>
                                                <p>{dat?.parra}</p>
                                            </div>
                                            <div className="line">
                                                <img src={line} alt="line" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyWork