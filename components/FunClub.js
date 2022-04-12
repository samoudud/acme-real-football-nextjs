import React from 'react';
import callBg from '/public/static/images/call-bg.jpg'

const FunClub = () => {
    return (
        <div>
            <section style={{ backgroundImage: `url(${callBg.src})` }} className="callto spad ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="callto__text">
                                <span>Join our team</span>
                                <h2>JOIN OUR FAN CLUB AND GET FREE TICKET</h2>
                                <a href="#" className="primary-btn white-btn"
                                >Resgister</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FunClub;