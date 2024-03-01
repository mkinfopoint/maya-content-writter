import React from 'react'
import { elepse, logo } from '../assets/images'
import { GiDiamonds } from '../config/icons'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm webnavbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <img src={elepse} alt="elipse" className="elipse" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home <span><GiDiamonds /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me <span><GiDiamonds /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services <span><GiDiamonds /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Testimonials<span><GiDiamonds /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog <span><GiDiamonds /></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar