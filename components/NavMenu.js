import Image from 'next/image';
import Link from 'next/link';
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
                                    <Link href="/">
                                        <a><Image src={logo} width="170" height='80' alt="" /></a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="header__options__nav">
                                    <nav className="header__menu mobile-menu">
                                        <ul>

                                            <li ><Link href="/join">
                                                <a>Join</a>
                                            </Link></li>
                                            <li ><Link href="/login">
                                                <a>Log In</a>
                                            </Link></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open mt-5"><i className="fa fa-bars"></i></div>
                </div>
            </header>
        </div>
    );
};

export default NavMenu;