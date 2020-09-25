import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="position-relative z-index-10 d-print-none">
            <div className="py-6 bg-gray-200 text-muted">
                <div className="container">
                    <div className="row">
                        <div className="mb-5 mb-lg-0 col-lg-4 footer-style">
                            <div className="font-weight-bold text-uppercase text-dark mb-3 ">Directory</div>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="#" target="_blank" title="twitter" className="text-muted text-hover-primary"><i className="fa fa-twitter"></i></Link></li>
                                <li className="list-inline-item"><Link to="#" target="_blank" title="facebook" className="text-muted text-hover-primary"><i className="fa fa-facebook"></i></Link></li>
                                <li className="list-inline-item"><Link to="#" target="_blank" title="instagram" className="text-muted text-hover-primary"><i className="fa fa-instagram"></i></Link></li>
                                <li className="list-inline-item"><Link to="#" target="_blank" title="pinterest" className="text-muted text-hover-primary"><i className="fa fa-pinterest"></i></Link></li>
                                <li className="list-inline-item"><Link to="#" target="_blank" title="vimeo" className="text-muted text-hover-primary"><i className="fa fa-vimeo"></i></Link></li>
                            </ul>
                        </div>
                        <div className="mb-5 mb-lg-0 col-md-6 col-lg-2 footer-style">
                            <div className="font-weight-bold text-uppercase text-dark mb-3">Rentals</div>
                            <ul className="list-unstyled">
                                <li><Link className="text-muted" to="/">Rooms</Link></li>
                                <li><Link className="text-muted" to="/category-rooms">Map on top</Link></li>
                                <li><Link className="text-muted" to="/category-2-rooms">Side map</Link></li>
                                <li><Link className="text-muted" to="/category-3-rooms">No map</Link></li>
                                <li><Link className="text-muted" to="/detail-rooms">Room detail</Link></li>
                            </ul>
                        </div>
                        <div className="mb-5 mb-lg-0 col-md-6 col-lg-2 footer-style">
                            <div className="font-weight-bold text-uppercase text-dark mb-3">Pages</div>
                            <ul className="list-unstyled">
                                <li><Link className="text-muted" to="/compare">Comparison<span className="ml-1 badge badge-info-light">New</span></Link></li>
                                <li><Link className="text-muted" to="/team">Team<span className="ml-1 badge badge-info-light">New</span></Link></li>
                                <li><Link className="text-muted" to="/contact">Contact</Link></li>
                                <li><Link className="text-muted" to="/pricing">Pricing</Link></li>
                                <li><Link className="text-muted" to="/detail-rooms">Room detail</Link></li>
                                <li><Link className="text-muted" to="/text">Text page</Link></li>
                                <li><Link className="text-muted" to="/faq">F.A.Q.s</Link></li>
                                <li><Link className="text-muted" to="/coming-soon">Coming soon</Link></li>
                                <li><Link className="text-muted" to="/404">404 page<span className="ml-1 badge badge-info-light">New</span></Link></li>
                            </ul>
                        </div>
                        <div className="mb-5 mb-lg-0 col-lg-4 footer-style">
                            <div className="font-weight-bold text-uppercase text-dark mb-3">Daily Offers &amp; Discounts</div>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                            <form id="newsletter-form" className="">
                                <div className="input-group mb-3">
                                    <input type="email" placeholder="Your Email Address" aria-label="Your Email Address" className="bg-transparent border-dark border-right-0 form-control" />
                                    <div className="input-group-append">
                                        <button className="btn-outline-dark border-left-0 btn btn-deoco">
                                            <i className="fa fa-paper-plane text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
                <div className="container">
                    <div className="align-items-center row">
                        <div className="text-center text-md-left col-md-6">
                            <p className="text-sm mb-md-0">© 2020, Your company.  All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
                                <li className="list-inline-item"><i className="fa fa-cc-visa w-2rem"></i></li>
                                <li className="list-inline-item"><i className="fa fa-cc-mastercard"></i></li>
                                <li className="list-inline-item"><i className="fa fa-cc-paypal"></i></li>
                                <li className="list-inline-item"><i className="fa fa-credit-card"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;