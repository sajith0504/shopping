import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const nav = useNavigate();
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
                const { token, user } = response.data;
            
                // Store the token and user info in localStorage
                localStorage.setItem('authToken', token);
                localStorage.setItem('userName', user.name);  // Storing user name for later use
                localStorage.setItem('id', user.id);  // Storing user ID for later use
                localStorage.setItem('role', user.role);  // Storing user role for later use
            
                alert('Login successful!');
                nav('/admin');  // Redirect to the admin page after login
            } else {
                setError(response.data.message || 'Login failed, please try again!');
            }
            
        } catch (err) {
            console.error('Login Error:', err);
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

  

   
  return (
    <div>
 <section className="log-in-section section-b-space">
        <a href="" className="logo-login"><img src={`${process.env.PUBLIC_URL}/assets/frontend/images/logo/1.png`} className="img-fluid"/></a>
        <div className="container w-100">
            <div className="row">

                <div className="col-xl-5 col-lg-6 me-auto">
                    <div className="log-in-box">
                        <div className="log-in-title">
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
                                            <input className="checkbox_animated check-box" type="checkbox"
                                                id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">Remember me</label>
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

                                <div className="col-12">
                                    
                                    <h5 className="new-page mt-3 text-center">Don't have an account ? 
                                        {/* <a href="sign-up.html">Create an account</a> */}
                                        <Link to='/signup'>Create an account</Link>
                                        </h5>
                                </div>
                            </form>
                        </div>

                        <div className="other-log-in">
                            <h6>or</h6>
                        </div>

                        <div className="log-in-button">
                            <ul>
                                <li>
                                    <a href="https://www.google.com/" className="btn google-button w-100">
                                        <img src="../assets/images/inner-page/google.png" className="blur-up lazyload"
                                            alt=""/> Log In with Google
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" className="btn google-button w-100">
                                        <img src="../assets/images/inner-page/facebook.png" className="blur-up lazyload"
                                            alt=""/> Log In with Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Login
