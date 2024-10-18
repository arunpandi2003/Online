import React from 'react';
import './Regsiter.css';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <main className="register">
      <form className="register-form">
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            autoFocus
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tele">Phone</label>
          <input
            type="tel"
            id="tele"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <input type="checkbox" id="check" required />
          <label htmlFor="check">I'm not a robot</label>
        </div>

        <Link to='/login'><button type="submit" className="btn">Sign-up</button></Link>
      </form>
    </main>
  );
};

export default Register;
