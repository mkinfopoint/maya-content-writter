import React, { useState } from 'react'
import { elepse, logo, starShade } from '../assets/images'
import { FaBars, IoMdClose } from '../config/icons'


const Navbar = () => {
    const [mobile, setIsmobile] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-sm webnavbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <h1>Srinidhi.</h1>
                    </a>
                    <img src={elepse} alt="elipse" className="elipse" />
                    <button onClick={() => { setIsmobile(!mobile) }} className="navbar-toggler nav_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        {
                            mobile ? <IoMdClose /> : <FaBars />
                        }
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    <span className="box_shadows">
                                        Home </span>     <span><img src={starShade} className='star' alt="star" /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about"> <span className="box_shadows">About</span> <span><img src={starShade} className='star' alt="star" /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services"><span className="box_shadows">Services</span> <span><img src={starShade} className='star' alt="star" /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#test"><span className="box_shadows">Testimonials</span><span><img src={starShade} className='star' alt="star" /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog"><span className='box_shadows'>Blog </span><span><img src={starShade} className='star' alt="star" /></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar