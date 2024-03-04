import React from 'react'
import { GiDiamonds } from '../config/icons'
import { illuImg1, illuImg2, line, work1Img, work2Img, work3Img, work4Img } from '../assets/images';

const WhyWork = () => {
    const workData = [
        {
            img: work1Img,
            head: `Subject matter expertise`,
            parra: `Technical content that resonates with tech professionals and common audiences a like`
        },
        {
            img: work2Img,
            head: `Customer-based content`,
            parra: `Customised content to fulfil your requirements and meet the needs of your target audience`
        },
        {
            img: work3Img,
            head: `Timely Delivery`,
            parra: `Quality content crafted to meet your expectations that are delivered on time, every time`
        },
        {
            img: work4Img,
            head: `Communication and ethics`,
            parra: `Working with you towards your goals and challenges, to ensure that every piece of content is aligned with your objectives.`
        },
    ]
    return (
        <>
            <div className="workwithus_total_sec">
                <img src={illuImg1} className='illuimg1' alt="" />
                <img src={illuImg2} className='illuimg2' alt="" />
                <div className="container">
                    <h1 data-aos="fade-up" className='heading' ><span><GiDiamonds /></span>
                        Why Work With Me<span><GiDiamonds /></span></h1>
                    <div className="workrow row" data-aos="fade-down">
                        {
                            workData?.map((dat, index) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="toalcard">
                                            <div key={index} className="work_card">
                                                <img src={dat?.img} alt="work1" className="top_img" />
                                                <h6>{dat?.head}</h6>
                                                <p>{dat?.parra}</p>
                                            </div>
                                            {
                                                index === 3 ? null : <div className="line">
                                                    <img src={line} alt="line" />
                                                </div>
                                            }
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