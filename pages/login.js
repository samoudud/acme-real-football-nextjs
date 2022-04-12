import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';

const login = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <section className="vh-100 form-bg" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-transparent shadow-lg" style={{ borderRadius: '1rem' }} >
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Sign in</h3>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" placeholder='your email' className="form-control form-control-lg" />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" placeholder='your password' className="form-control form-control-lg" />
                                    </div>



                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                                    <hr className="my-4" />
                                    <p>New to Dentist Point? </p>

                                    <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default login;