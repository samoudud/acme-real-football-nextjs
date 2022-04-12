import Image from 'next/image';
import React from 'react';
import team1 from '/public/static/images/latest-result/team-1.png'
import team2 from '/public/static/images/latest-result/team-2.png'
import matchBg from '/public/static/images/latest-result/match-bg.jpg'

const LatestResult = () => {
    return (
        <div>
            <section className="latest-result spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 p-0">
                            <div className="section-title">
                                <h2><i className="fa fa-bolt"></i> Latest results</h2>
                            </div>
                            <div className="latest__result__table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="m__date">May 05, 2020</td>
                                            <td></td>
                                            <td className="m__vanue">Chicago</td>
                                        </tr>
                                        <tr>
                                            <td className="m__team">Jinotega</td>
                                            <td className="m__time">54:85</td>
                                            <td className="m__team">Toronto raptors</td>
                                        </tr>
                                        <tr>
                                            <td className="m__date">May 05, 2020</td>
                                            <td></td>
                                            <td className="m__vanue">Chicago</td>
                                        </tr>
                                        <tr>
                                            <td className="m__team">San Isidro</td>
                                            <td className="m__time">78:65</td>
                                            <td className="m__team">Brooklyn Nets</td>
                                        </tr>
                                        <tr>
                                            <td className="m__date">May 05, 2020</td>
                                            <td></td>
                                            <td className="m__vanue">Chicago</td>
                                        </tr>
                                        <tr>
                                            <td className="m__team">Costa Caribe</td>
                                            <td className="m__time">119:86</td>
                                            <td className="m__team">Miani Heat</td>
                                        </tr>
                                        <tr>
                                            <td className="m__date">May 05, 2020</td>
                                            <td></td>
                                            <td className="m__vanue">Chicago</td>
                                        </tr>
                                        <tr>
                                            <td className="m__team">Utah Jazz</td>
                                            <td className="m__time">68:95</td>
                                            <td className="m__team">Phoenix Suns</td>
                                        </tr>
                                        <tr>
                                            <td className="m__date">May 05, 2020</td>
                                            <td></td>
                                            <td className="m__vanue">Chicago</td>
                                        </tr>
                                        <tr>
                                            <td className="m__team">Detroit Pistons</td>
                                            <td className="m__time">88:57</td>
                                            <td className="m__team">DallasMavericks</td>
                                        </tr>
                                        <tr>
                                            <td className="m__date">May 05, 2020</td>
                                            <td></td>
                                            <td className="m__vanue">Chicago</td>
                                        </tr>
                                        <tr>
                                            <td className="m__team">Chicago Bulls</td>
                                            <td className="m__time">66:65</td>
                                            <td className="m__team">Denver Nuggets</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-8 p-0">
                            <div className="section-title">
                                <h2><i className="fa fa-bolt"></i> Today’s football matches</h2>
                            </div>
                            <div className="latest__match" style={{ backgroundImage: `url(${matchBg.src})` }} >
                                <div className="latest__first__team">
                                    <Image src={team1} alt="" />
                                    <h4>Costa Caribe</h4>
                                </div>
                                <div className="latest__second__team">
                                    <Image src={team2} alt="" />
                                    <h4>Brooklyn nets</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LatestResult;