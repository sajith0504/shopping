import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  // Validate form inputs before sending
  const validateForm = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
  
    // Validate form fields
    if (!validateForm()) {
      return; // Stop execution if validation fails
    }
  
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        name,
        email,
        password,
      });
  
      // Clear fields on successful signup
      setName('');
      setEmail('');
      setPassword('');
      setError(response.data.message); 
    } catch (err) {
      // Error response from server
      if (err.response) {
        setError(err.response.data.message || 'An unexpected error occurred');
      } else {
        // Network or other errors
        setError('Unable to connect to the server. Please try again later.');
      }
    }
  };
  ;

  return (
    <div className='signup_body'>
      <h2>Signup</h2>
      {error && (
        <p style={{ color: 'red' }}>{error}</p> 
      )}
    
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      
      <p>
        Already have an account? 
        <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
