import Image from 'next/image';
import React from 'react';
import sliderImg from '/public/static/images/hero/slider.jpg'

const HeroSection = () => {
    return (
        <div>
            <section className="hero spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10">
                            <div className="hero__text">
                                <div className="label">Jun 30, 2022 / 8:00 pm / New York</div>
                                <h2>National Leagues 2022 Sesion Begins</h2>
                                <div className="hero__countdown" id="countdown">
                                    <div className="cd__item">
                                        <h3><span>31</span></h3>
                                        <p>Day</p>
                                    </div>
                                    <div className="cd__item">
                                        <h3><span>05</span></h3>
                                        <p>Hours</p>
                                    </div>
                                    <div className="cd__item">
                                        <h3><span>46</span></h3>
                                        <p>Munites</p>
                                    </div>
                                    <div className="cd__item">
                                        <h3><span>12</span></h3>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">Book tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__slider owl-carousel">
                    <Image src={sliderImg} alt="" />
                    {/* <div className="hero__items set-bg" data-setbg="img/hero/slider-1.jpg"></div> */}
                </div>
            </section>
        </div>
    );
};

export default HeroSection;