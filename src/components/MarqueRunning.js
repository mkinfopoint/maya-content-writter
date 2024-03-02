import React from 'react'
import Marquee from "react-fast-marquee";
import { GiDiamonds } from '../config/icons';
const MarqueRunning = () => {
    return (
        <>
            <div className="marquee_sec">
                <Marquee autoFill={true} direction="right" speed={100}>
                    <div className="first_head">
                        <h1 className="headone">Start Your Success Story Today!</h1>
                        <span><GiDiamonds /></span>
                        <h1 className='headtwo'>Unlock the Power of Words</h1>
                        <span><GiDiamonds /></span>
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default MarqueRunning