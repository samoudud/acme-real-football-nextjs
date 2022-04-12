import React from 'react';

const LatestVideo = () => {
    return (
        <div>
            <section className="latest-videos">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h2><i className="fa fa-bolt"></i> LATEST VIDEOS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="latest__videos__slider owl-carousel">
                            <div className="col-lg-4 p-0">
                                <div
                                    className="latest__videos__slider__item set-bg"
                                    data-setbg="img/lv-slider/lv-1.jpg"
                                >
                                    <a
                                        href="https://www.youtube.com/watch?v=MJblFudSExU"
                                        className="play-btn video-popup"
                                    ><i className="fa fa-play"></i
                                    ></a>
                                    <div className="video__title">
                                        <h4>
                                            Is basketball trending to become
                                            America’s favorite sport? | Jalen &
                                            Jacoby
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 p-0">
                                <div
                                    className="latest__videos__slider__item middle__item set-bg"
                                    data-setbg="img/lv-slider/lv-2.jpg"
                                >
                                    <a
                                        href="https://www.youtube.com/watch?v=MJblFudSExU"
                                        className="play-btn video-popup"
                                    ><i className="fa fa-play"></i
                                    ></a>
                                    <div className="video__title">
                                        <h4>
                                            Is basketball trending to become
                                            America’s favorite sport? | Jalen &
                                            Jacoby
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 p-0">
                                <div
                                    className="latest__videos__slider__item set-bg"
                                    data-setbg="img/lv-slider/lv-3.jpg"
                                >
                                    <a
                                        href="https://www.youtube.com/watch?v=MJblFudSExU"
                                        className="play-btn video-popup"
                                    ><i className="fa fa-play"></i
                                    ></a>
                                    <div className="video__title">
                                        <h4>
                                            Is basketball trending to become
                                            America’s favorite sport? | Jalen &
                                            Jacoby
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 p-0">
                                <div
                                    className="latest__videos__slider__item set-bg"
                                    data-setbg="img/lv-slider/lv-2.jpg"
                                >
                                    <a
                                        href="https://www.youtube.com/watch?v=MJblFudSExU"
                                        className="play-btn video-popup"
                                    ><i className="fa fa-play"></i
                                    ></a>
                                    <div className="video__title">
                                        <h4>
                                            Is basketball trending to become
                                            America’s favorite sport? | Jalen &
                                            Jacoby
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LatestVideo;