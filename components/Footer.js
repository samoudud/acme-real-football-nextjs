import Image from 'next/image';
import React from 'react';

import fl1 from '/public/static/images/blog/fl-1.jpg'
import fl2 from '/public/static/images/blog/fl-2.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer--home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className="footer__widget">
                                <h5>Get in touch</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="footer__widget__item">
                                            <span>Address:</span> 92-94 High St,
                                            Oxford OX1 4BJ, England
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="footer__widget__item">
                                            <span>Phone:</span> + 44 1865 799599; +
                                            44 1956 799599
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="footer__widget__item">
                                            <span>Email:</span>
                                            Basketball.support@gmail.com
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer__widget">
                                <h5>Latest news</h5>
                                <a href="#" className="footer__widget__latest">
                                    <div className="footer__widget__latest__pic">
                                        <Image src={fl1} alt="" />
                                    </div>
                                    <div className="footer__widget__latest__text">
                                        <h5>
                                            Wirecard Partners with FC Bayern Munich
                                            Basketball
                                        </h5>
                                        <span>Jun 03, 2020</span>
                                    </div>
                                </a>
                                <a href="#" className="footer__widget__latest">
                                    <div className="footer__widget__latest__pic">
                                        <Image src={fl2} alt="" />
                                    </div>
                                    <div className="footer__widget__latest__text">
                                        <h5>
                                            Patrick Beverley says basketball is “not
                                            important” right now
                                        </h5>
                                        <span>Jun 03, 2020</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer__widget">
                                <h5>SUBSCRIBE NEWLETTER</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit" className="site-btn">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer__copyright">
                                <div className="row">
                                    <div className="col-lg-8 text-white">
                                        Copyright &copy;

                                        All rights reserved
                                        <i
                                            className="fa fa-heart color-danger"
                                            aria-hidden="true"
                                        ></i>


                                    </div>
                                    <div className="col-lg-4">
                                        <div className="footer__copyright__links">
                                            <a href="#"
                                            ><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"
                                            ><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"
                                            ><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a href="#"
                                            ><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"
                                            ><i className="fa-brands fa-youtube"></i></a>
                                            <a href="#"
                                            ><i className="fa-brands fa-500px"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;