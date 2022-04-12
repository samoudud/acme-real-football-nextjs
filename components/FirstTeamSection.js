import React from 'react';
import player1 from '/public/static/images/player/player-1.jpg'
import player2 from '/public/static/images/player/player-2.jpg'
import player3 from '/public/static/images/player/player-3.jpg'
import player4 from '/public/static/images/player/player-4.jpg'

const FirstTeamSection = () => {
    return (
        <div>
            <section className="team spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="section-title">
                                <h2><i className="fa fa-bolt"></i> Fisrt team</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="team__btn">
                                <a href="#" className="primary-btn border_btn">Join our team</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="player__item">
                                <div className="player__item__pic " style={{ backgroundImage: `url(${player1.src})`, backgroundRepeat: 'no-repeat' }}>
                                    <div className="number"><span>01</span></div>
                                </div>
                                <div className="player__item__text">
                                    <h4>Grace Osborne</h4>
                                    <span>Center</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="player__item">
                                <div className="player__item__pic" style={{ backgroundImage: `url(${player2.src})`, backgroundRepeat: 'no-repeat' }}>
                                    <div className="number"><span>83</span></div>
                                </div>
                                <div className="player__item__text">
                                    <h4>Frances Matthews</h4>
                                    <span>Point guard</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="player__item">
                                <div className="player__item__pic" style={{ backgroundImage: `url(${player3.src})`, backgroundRepeat: 'no-repeat' }}>
                                    <div className="number"><span>36</span></div>
                                </div>
                                <div className="player__item__text">
                                    <h4>Florence Munoz</h4>
                                    <span>Shooting guard</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="player__item">
                                <div className="player__item__pic " style={{ backgroundImage: `url(${player4.src})`, backgroundRepeat: 'no-repeat' }}>
                                    <div className="number"><span>50</span></div>
                                </div>
                                <div className="player__item__text">
                                    <h4>Victoria Lawrence</h4>
                                    <span>Power forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FirstTeamSection;