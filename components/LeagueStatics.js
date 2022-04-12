import React from 'react';
import player1 from '/public/static/images/statistics/player-1.jpg'

const LeagueStatics = () => {
    return (
        <div>
            <section className="statistics spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="statistics__player__content">
                                <div className="section-title">
                                    <h2>
                                        <i className="fa fa-bolt"></i> Player statistics
                                    </h2>
                                </div>
                                <div className="statistics__player__tab">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                data-toggle="tab"
                                                href="#tabs-1"
                                                role="tab"
                                            >Golkeepers</a
                                            >
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-toggle="tab"
                                                href="#tabs-2"
                                                role="tab"
                                            >Defeners</a
                                            >
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-toggle="tab"
                                                href="#tabs-3"
                                                role="tab"
                                            >Midfielders</a
                                            >
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-toggle="tab"
                                                href="#tabs-4"
                                                role="tab"
                                            >Attackers</a
                                            >
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div
                                            className="tab-pane active"
                                            id="tabs-1"
                                            role="tabpanel"
                                        >
                                            <div
                                                className="statistics__player__slider owl-carousel"
                                            >
                                                <div
                                                    className="statistics__player__slider__item"
                                                    style={{ backgroundImage: `url(${player1.src})` }}
                                                >
                                                    <div
                                                        className="statistics__player__slider__item__text"
                                                    >
                                                        <h3>95.5 point</h3>
                                                        <h2>Nathaniel Murphy</h2>
                                                        <a
                                                            href="#"
                                                            className="primary-btn border_btn"
                                                        >View portfolio</a
                                                        >
                                                    </div>
                                                </div>
                                                {/* <div
                                                    className="statistics__player__slider__item set-bg"
                                                    data-setbg="img/statistics/player-1.jpg"
                                                >
                                                    <div
                                                        className="statistics__player__slider__item__text"
                                                    >
                                                        <h3>95.5 point</h3>
                                                        <h2>Nathaniel Murphy</h2>
                                                        <a
                                                            href="#"
                                                            className="primary-btn border_btn"
                                                        >View portfolio</a
                                                        >
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="tabs-2"
                                            role="tabpanel"
                                        >
                                            <div
                                                className="statistics__player__slider owl-carousel"
                                            >
                                                <div
                                                    className="statistics__player__slider__item set-bg"
                                                    data-setbg="img/statistics/player-1.jpg"
                                                >
                                                    <div
                                                        className="statistics__player__slider__item__text"
                                                    >
                                                        <h3>95.5 point</h3>
                                                        <h2>Nathaniel Murphy</h2>
                                                        <a
                                                            href="#"
                                                            className="primary-btn border_btn"
                                                        >View portfolio</a
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    className="statistics__player__slider__item set-bg"
                                                    data-setbg="img/statistics/player-1.jpg"
                                                >
                                                    <div
                                                        className="statistics__player__slider__item__text"
                                                    >
                                                        <h3>95.5 point</h3>
                                                        <h2>Nathaniel Murphy</h2>
                                                        <a
                                                            href="#"
                                                            className="primary-btn border_btn"
                                                        >View portfolio</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="tabs-3"
                                            role="tabpanel"
                                        >
                                            <div
                                                className="statistics__player__slider owl-carousel"
                                            >
                                                <div
                                                    className="statistics__player__slider__item set-bg"
                                                    data-setbg="img/statistics/player-1.jpg"
                                                >
                                                    <div
                                                        className="statistics__player__slider__item__text"
                                                    >
                                                        <h3>95.5 point</h3>
                                                        <h2>Nathaniel Murphy</h2>
                                                        <a
                                                            href="#"
                                                            className="primary-btn border_btn"
                                                        >View portfolio</a
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    className="statistics__player__slider__item set-bg"
                                                    data-setbg="img/statistics/player-1.jpg"
                                                >
                                                    <div
                                                        className="statistics__player__slider__item__text"
                                                    >
                                                        <h3>95.5 point</h3>
                                                        <h2>Nathaniel Murphy</h2>
                                                        <a
                                                            href="#"
                                                            className="primary-btn border_btn"
                                                        >View portfolio</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="tabs-4"
                                            role="tabpanel"
                                        >
                                            <div
                                                className="statistics__player__slider owl-carousel"
                                            >
                                                <div
                                                    className="statistics__player__slider__item set-bg"
                                                    data-setbg="img/statistics/player-1.jpg"
                                                >
                                                    <div
                                                        className="statistics__player__slider__item__text"
                                                    >
                                                        <h3>95.5 point</h3>
                                                        <h2>Nathaniel Murphy</h2>
                                                        <a
                                                            href="#"
                                                            className="primary-btn border_btn"
                                                        >View portfolio</a
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    className="statistics__player__slider__item set-bg"
                                                    data-setbg="img/statistics/player-1.jpg"
                                                >
                                                    <div
                                                        className="statistics__player__slider__item__text"
                                                    >
                                                        <h3>95.5 point</h3>
                                                        <h2>Nathaniel Murphy</h2>
                                                        <a
                                                            href="#"
                                                            className="primary-btn border_btn"
                                                        >View portfolio</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="statistics__league__point">
                                <div className="section-title">
                                    <h2><i className="fa fa-bolt"></i> League table</h2>
                                </div>
                                <ul>
                                    <li>
                                        <div className="h_pos">Pos</div>
                                        <div className="h_team">Team</div>
                                        <div className="h_win">W</div>
                                        <div className="h_lose">L</div>
                                        <div className="h_point">Ptt</div>
                                        <div className="h_percent">%</div>
                                    </li>
                                    <li>
                                        <span className="l_pos">1</span>
                                        <div className="l__point__item">
                                            <span className="l_team"
                                            >Florence Munoz</span
                                            >
                                            <span className="l_win">14</span>
                                            <span className="l_lose">1</span>
                                            <span className="l_point">28</span>
                                            <span className="l_percent">93</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="l_pos">2</span>
                                        <div className="l__point__item">
                                            <span className="l_team"
                                            >Victoria Lawrence</span
                                            >
                                            <span className="l_win">14</span>
                                            <span className="l_lose">1</span>
                                            <span className="l_point">28</span>
                                            <span className="l_percent">93</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="l_pos">3</span>
                                        <div className="l__point__item">
                                            <span className="l_team"
                                            >Frances Matthews</span
                                            >
                                            <span className="l_win">14</span>
                                            <span className="l_lose">1</span>
                                            <span className="l_point">28</span>
                                            <span className="l_percent">93</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="l_pos">4</span>
                                        <div className="l__point__item">
                                            <span className="l_team"
                                            >George Chambers</span
                                            >
                                            <span className="l_win">14</span>
                                            <span className="l_lose">1</span>
                                            <span className="l_point">28</span>
                                            <span className="l_percent">93</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="l_pos">5</span>
                                        <div className="l__point__item">
                                            <span className="l_team"
                                            >Nathaniel Murphy</span
                                            >
                                            <span className="l_win">14</span>
                                            <span className="l_lose">1</span>
                                            <span className="l_point">28</span>
                                            <span className="l_percent">93</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="l_pos">6</span>
                                        <div className="l__point__item">
                                            <span className="l_team">Tony Jordan</span>
                                            <span className="l_win">14</span>
                                            <span className="l_lose">1</span>
                                            <span className="l_point">28</span>
                                            <span className="l_percent">93</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeagueStatics;