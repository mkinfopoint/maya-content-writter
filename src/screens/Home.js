import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MarqueeSec from '../components/MarqueeSec'
import WhyWork from '../components/WhyWork'
import Unleashing from '../components/Unleashing'
import ServiceOffered from '../components/ServiceOffered'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <MarqueeSec />
            <WhyWork />
            <Unleashing />
            <ServiceOffered />
        </>
    )
}

export default Home