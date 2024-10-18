import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
          return (
                    <main className="login-container">
                              <div className="login-form">
                                        <form>
                                                  <h1>Login</h1>
                                                  <div className="form-group">
                                                            <label htmlFor="username">UserName</label>
                                                            <input
                                                                      type="text"
                                                                      required
                                                                      placeholder="Enter your name"
                                                                      autoFocus
                                                                      id="username"
                                                                      className="form-control"
                                                            />
                                                  </div>
                                                  <div className="form-group">
                                                            <label htmlFor="password">Password</label>
                                                            <input
                                                                      type="password"
                                                                      required
                                                                      placeholder="Enter your password"
                                                                      id="password"
                                                                      className="form-control"
                                                            />
                                                  </div>
                                                  <Link to='/dashboard'><button type="submit" className="btn btn-primary">
                                                            Login
                                                  </button></Link>
                                        </form>
                                        <ul className="login-links">
                                                  <li>
                                                            <a href="#">Forget Password ?</a>
                                                  </li>
                                                  <li>
                                                           <Link to='/register'> <a href="#">Sign Up</a></Link>
                                                  </li>
                                        </ul>
                              </div>
                    </main>
          );
};

export default Login;