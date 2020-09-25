import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { Link } from 'react-router-dom'
import Carosel from '../../commons/carosel';
import Loader from '../../commons/loader';
import Footer from '../footer';
import '../../../assets/js'


export default function Home() {
    const [isLoder, setLoader] = useState(true)
    let loadRef = useRef();
    useEffect(() => {
        // setTimeout(() => {
        //     setLoader(true)
        //     setLoader(false)
        // }, 5000);
        //console.log("loader tef ::: ", loadRef);
        let count = 0;
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 5000);
        //navBarAnimation();
    }, [])
    useEffect(() => {

    }, [isLoder])
    const click = () => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 5000);
    }
    let Fetching = forwardRef((props, ref) => <Loader loadRef={ref} {...props} />)
    // if (isLoder) {
    //     return (
    //         <Loader loader={isLoder}/>
    //     )
    // }
    return (
        <>
            {/* <Fetching /> */}
            <Loader loader={isLoder} />
            <div className="page-body">
                <section>
                    <Carosel />
                </section>
                {/* <section className="bg-darker bg-size-cover bg-position-center py-5 py-lg-10 home-page">
                 <div class="container mt-4 mt-lg-3 pt-5 pb-10">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
                            <h5 class="text-light font-weight-light">#1 Food Delivery Service since 2010</h5>
                            <div class="h1 text-light mb-3 pb-4">We deliver your favorite food fresh &amp; fast in
                                <div class="dropdown d-inline-block ml-1">
                                    <Link class="dropdown-toggle" to="#" data-toggle="dropdown">New York</Link>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <Link class="dropdown-item font-size-base" to="#">Los Angeles</Link>
                                        <Link class="dropdown-item font-size-base" to="#">Chicago</Link>
                                        <Link class="dropdown-item font-size-base" to="#">Houston</Link>
                                        <Link class="dropdown-item font-size-base" to="#">Philadelphia</Link>
                                        <Link class="dropdown-item font-size-base" to="#">San Diego</Link>
                                        <Link class="dropdown-item font-size-base" to="#">Miami</Link>
                                    </div>
                                </div>
                            </div><Link class="btn btn-primary" to="#cuisine" data-scroll="">What do you want to eat?</Link>
                        </div>
                    </div>
                </div> 
            </section>*/}
                {/* <button onClick={click}>btn</button> */}
                <div className="latest-products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Latest Products</h2>
                                    <Link to={"#"}>View all product <i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                                return (
                                    <div className="col-md-4">
                                        <div className="product-item">
                                            <Link to="#">
                                                <img src={require("../../../assets/img/product_01.jpg")} alt="" />
                                            </Link>
                                            <div className="down-content">
                                                <Link to="#">
                                                    <h4>Title goes here</h4>
                                                </Link>
                                                <h6>$25.75</h6>
                                                <p>Lorem ipsum dolor sit amet, adipisincing elite. Itaque, corpris nulla aspernatir.</p>
                                                <div className="start-box">
                                                    <ul>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <span>Reviews (24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}