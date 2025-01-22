import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Link} from "react-router-dom"

const Login = () => {
    const [logindata, setLogindata] = useState({ phone: '', password: '' });
    const [error, setError] = useState('');

    const Handlechange = (e) => {
        const { name, value } = e.target;
        setLogindata({ ...logindata, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!logindata.phone || !logindata.password) {
            setError('Phone number and password are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/auth/login', logindata);
            console.log('Login Response:', response); // Log the full response

            if (response.data.success) {
                alert('Login successful!');
                // Redirect or handle other login logic here
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            console.error('Login Error:', err);  // Log the error
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };
    

  return (
    <div>
        

     <Header/>


    <div class="mobile-menu d-md-none d-block mobile-cart">
        <ul>
            <li class="active">
                <a href="index.html">
                    <i class="iconly-Home icli"></i>
                    <span>Home</span>
                </a>
            </li>

            <li class="mobile-category">
                <a href="javascript:void(0)">
                    <i class="iconly-Category icli js-link"></i>
                    <span>Category</span>
                </a>
            </li>

            <li>
                <a href="search.html" class="search-box">
                    <i class="iconly-Search icli"></i>
                    <span>Search</span>
                </a>
            </li>

            <li>
                <a href="wishlist.html" class="notifi-wishlist">
                    <i class="iconly-Heart icli"></i>
                    <span>My Wish</span>
                </a>
            </li>

            <li>
                <a href="cart.html">
                    <i class="iconly-Bag-2 icli fly-cate"></i>
                    <span>Cart</span>
                </a>
            </li>
        </ul>
    </div>
    {/* mobile fix menu end */}

    {/* Breadcrumb Section Start */}
    <section class="breadcrumb-section pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-contain">
                        <h2 class="mb-2">Log In</h2>
                        <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="index.html">
                                        <i class="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item active">Log In</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Breadcrumb Section End */}

    {/* log in section start */}
    <section class="log-in-section background-image-2 section-b-space">
        <div class="container-fluid-lg w-100">
            <div class="row">
                <div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                    <div class="image-contain">
                        <img src="../assets/images/inner-page/log-in.png" class="img-fluid" alt=""/>
                    </div>
                </div>

                <div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                    <div class="log-in-box">
                        <div class="log-in-title">
                            <h3>Welcome To Fastkart</h3>
                            <h4>Log In Your Account</h4>
                        </div>
                        <div className="input-box">
            <form className="row g-4" onSubmit={handleSubmit}>
                <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={logindata.phone}
                            placeholder="Phone Number"
                            inputMode="numeric"
                            pattern="\d*"
                            onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                            onChange={Handlechange}
                        />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={logindata.password}
                            placeholder="Password"
                            onChange={Handlechange}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                            <input
                                className="checkbox_animated check-box"
                                type="checkbox"
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <a href="forgot.html" className="forgot-password">Forgot Password?</a>
                    </div>
                </div>

                {error && (
                    <div className="col-12">
                        <div className="alert alert-danger">{error}</div>
                    </div>
                )}

                <div className="col-12">
                    <button className="btn btn-animation w-100 justify-content-center" type="submit">
                        Log In
                    </button>
                </div>
            </form>
        </div>

                        <div class="other-log-in">
                            <h6>or</h6>
                        </div>

                        <div class="log-in-button">
                            <ul>
                                <li>
                                    <a href="https://www.google.com/" class="btn google-button w-100">
                                        <img src="../assets/images/inner-page/google.png" class="blur-up lazyload"
                                            alt=""/> Log In with Google
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" class="btn google-button w-100">
                                        <img src="../assets/images/inner-page/facebook.png" class="blur-up lazyload"
                                            alt=""/> Log In with Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="other-log-in">
                            <h6></h6>
                        </div>

                        <div class="sign-up-box">
                            <h4>Don't have an account?</h4>
                            {/* <a href="sign-up.html">Sign Up</a> */}
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* log in section end */}

    {/* Footer Section Start */}
    
    {/* Footer Section End */}

    {/* Tap to top and theme setting button start */}
   
  
    <div class="bg-overlay"></div>
      <Footer/>
    </div>
  )
}

export default Login
