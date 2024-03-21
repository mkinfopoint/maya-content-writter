import React from 'react'
import { GiDiamonds } from '../config/icons'
import { illuImg1, illuImg2, line, work1Img, work2Img, work3Img, work4Img } from '../assets/images';

const WhyWork = () => {
    const workData = [
        {
            img: work1Img,
            head: `Deep Domain Expertise`,
            parra: `I bring unparalleled depth to my writing, thanks to a rich background and continuous learning in multiple fields. This means every piece I craft is informed, insightful, and adds real value to your audience.`
        },
        {
            img: work2Img,
            head: `Personalized Approach`,
            parra: ` I understand that your brand and your audience are unique. That's why I tailor my writing to fit your specific needs and goals, ensuring the content we create together truly resonates.`
        },
        {
            img: work3Img,
            head: `Quality and Precision`,
            parra: `I'm committed to excellence in every word I write. From detailed research to meticulous proofreading, I ensure that your content is not only engaging but also error-free and impactful.`
        },
        {
            img: work4Img,
            head: `Strategic Content Creation:`,
            parra: `Beyond just writing, I think strategically about how each piece fits into your broader business objectives. My content isn't just to be read; it's designed to perform, driving your success forward.`
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