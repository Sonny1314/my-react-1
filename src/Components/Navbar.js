import React from 'react';
import logo from './logo.png'
import './index.css'

class Navbar extends React.Component{
    render(){
        return(
            <div>
                 <nav className="navbar fixed-top shadow-sm  navbar-expand-lg" >
                     <div className="container">
                         <div className="row">
                             <div className="col-sm-2">
                                 <a className="" href="#">
                                     <img className="w-100 h-100 shadow-md " src={logo} alt="logo"/>
                                 </a>
                             </div>
                             <div className="col-sm-2"></div>
                             <div className="col-sm-8">
                                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcontent"
                                 aria-expanded="false">
                                     <i className="fas fa-bars header-icon"/>
                                 </button>
                                <div className="row float-right collapse navbar-collapse" id="navbarcontent">
                                    <div className="col-xs-4">


                                        <div className="dropdown">
                                        <a href="#" className="header-text" data-toggle="dropdown" data-offset="20,10" aria-haspopup="true" aria-expanded="false">
                                        <div className="d-inline-flex">
                                            <div className="icon-wrap">
                                                 <i className="header-icon fas fa-user"/>
                                            </div>
                                        <div className="text-wrap">
                                        <div className="nav-text">Sign In</div>
                                        <i className="fas fa-caret-down"/>
                                        </div>
                                        </div>
                                        </a>
                                        <div className="dropdown-menu">
                                            <form className="px-4 py-3">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" placeholder="Email"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" placeholder="Password"/>
                                                </div>
                                                <button type="button" className="btn btn-primary" >Sign In</button>
                                            </form>
                                            <hr/>
                                                <a className="dropdown-item" href="#" >Dont have an account yet then sign up!! </a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4">
                                        <a href="#" className="header-text">
                                        <div className="d-inline-flex">
                                        <div className="icon-wrap">
                                                <i className="header-icon fas fa-shopping-cart"/>
                                            </div>
                                        <div className="text-wrap">
                                            <span className="small round badge badge-secondary">0</span>
                                            <div className="nav-text">Cart</div>
                                        </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-4">
                                        <a href ="#" className="header-text">
                                        <div className="d-inline-flex">
                                        <div className="icon-wrap">
                                                <i className="header-icon fas fa-heart"/>
                                            </div>
                                            <div className="text-wrap">
                                            <span className="small round badge badge-secondary">1</span>
                                            <div className='nav-text'>Wishlist</div>
                                        </div>
                                        </div>
                                        </a>
                                    </div> 
                                </div>
                             </div>
                         </div>
                          
                    </div>
                 </nav>
                      
            </div>
        )
    }
}

export default Navbar;