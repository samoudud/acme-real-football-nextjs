import Image from 'next/image';
import React from 'react';
import ico1 from '/public/static/images/icon/icon-1.png'
import ico2 from '/public/static/images/icon/icon-2.png'
import ico4 from '/public/static/images/icon/icon-4.png'
import logo from '/public/static/images/logo-2.png'

const NavMenu = () => {
    return (
        <div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-4">
                                <div className="header__top__widget">
                                    <ul>
                                        <li>
                                            <div className="header__top__widget__text">
                                                <h6 className='color-red'>Join our team</h6>
                                                <p>Ourteam@football.com</p>
                                            </div>
                                            <div className="header__top__widget__icon">
                                                <Image src={ico1} alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="header__top__widget__text">
                                                <h6>Contact us</h6>
                                                <p>Suport@football.com</p>
                                            </div>
                                            <div className="header__top__widget__icon">
                                                <Image src={ico2} alt="" />
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__options">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="header__logo">
                                    <a href="./index.html">
                                        <Image src={logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="header__options__nav">
                                    <nav className="header__menu mobile-menu">
                                        <ul>
                                            <li className="active"><a href="./index.html">Home</a></li>
                                            <li><a href="./about.html">Join</a></li>
                                            <li><a href="./player.html">Login</a></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars"></i></div>
                </div>
            </header>
        </div>
    );
};

export default NavMenu;