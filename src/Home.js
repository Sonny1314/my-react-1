import React from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './homeAssets/home.css'
import slide1 from './homeAssets/slide1.jpg'
import slide2 from './homeAssets/slide2.jpg'
import slide3 from './homeAssets/slide3.jpg'
import paymentIcon from './homeAssets/payment.png'
import returnIcon from './homeAssets/return.png'
import trustIcon from './homeAssets/trust.png'
import {Link} from 'react-router-dom'
import Sidebar from './Components/Sidebar'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <section className="first-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                               <Sidebar/>
                            </div>
                            <div className="col-sm-8 border-box">
                                <div className="card">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src={slide1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                        <img src={slide2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                        <img src={slide3} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className=" second-section my-3 py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 ">
                                <div className="text-center">
                                    <img mb-3 width="100px" height="100px" src={paymentIcon} alt="paymentIcon"/>
                                    <div className="">
                                     <h4>Easy payment</h4>
                                     <p>The payment process is very easy to navigate </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="text-center">
                                    <img mb-3 width="100px" height="100px" src={returnIcon} alt="returnIcon"/>
                                    <div className="">
                                     <h4>Easy return</h4>
                                     <p>The return process is very easy to navigate </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 ">
                            <div className="text-center ">
                                    <img mb-3 width="100px" height="100px" src={trustIcon} alt="trustIcon"/>
                                    <div className="">
                                     <h4>Trust Quality</h4>
                                     <p>We have trusted quality products and reviews of customers are very good </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                   
                </ul>
            </div>
            
        )
    }
}


export default Home;