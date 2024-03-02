import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MarqueeSec from '../components/MarqueeSec'
import WhyWork from '../components/WhyWork'
import Unleashing from '../components/Unleashing'
import ServiceOffered from '../components/ServiceOffered'
import DidBeforeSec from '../components/DidBeforeSec'
import Testimonial from '../components/Testimonial'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <MarqueeSec />
            <WhyWork />
            <Unleashing />
            <ServiceOffered />
            <DidBeforeSec />
            <Testimonial />
        </>
    )
}

export default Home