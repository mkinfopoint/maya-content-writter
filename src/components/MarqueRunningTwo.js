import React from 'react'
import Marquee from "react-fast-marquee";
import { GiDiamonds } from '../config/icons';
const MarqueRunningTwo = () => {
    return (
        <>
            <div className="marquee_sec">
                <Marquee autoFill={true} direction="right" speed={100}>
                    <div className="first_head">
                        <h1 className="headone">Unleash Powerful Narratives</h1>
                        <span><GiDiamonds /></span>
                        <h1 className='headtwo'>Beyond Surface Writing</h1>
                        <span><GiDiamonds /></span>
                        <h1 className='headtwo'>Words With Impact</h1>
                        <span><GiDiamonds /></span>
                        <h1 className='headtwo'>Spark Conversations</h1>
                        <span><GiDiamonds /></span>
                        <h1 className='headtwo'>Transform Your Narrative</h1>
                        <span><GiDiamonds /></span>
                        <h1 className='headtwo'>Lead With Stories</h1>
                        <span><GiDiamonds /></span>
                        <h1 className='headtwo'>Empower Your Voice</h1>
                        <span><GiDiamonds /></span>
                        <h1 className='headtwo'>Innovate Through Words</h1>
                        <span><GiDiamonds /></span>
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default MarqueRunningTwo