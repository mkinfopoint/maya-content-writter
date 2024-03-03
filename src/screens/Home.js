import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MarqueeSec from '../components/MarqueeSec'
import WhyWork from '../components/WhyWork'
import Unleashing from '../components/Unleashing'
import ServiceOffered from '../components/ServiceOffered'
import DidBeforeSec from '../components/DidBeforeSec'
import Testimonial from '../components/Testimonial'
import FormSec from '../components/FormSec'
import BlogSec from '../components/BlogSec'
import Footer from '../components/Footer'

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
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
            <FormSec />
            <BlogSec />
            <Footer />
        </>
    )
}

export default Home