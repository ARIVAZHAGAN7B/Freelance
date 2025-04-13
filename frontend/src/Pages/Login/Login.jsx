import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase'; // adjust path if needed
import './Login.css';

function Login() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in as:", user.displayName);
      alert(`Welcome, ${user.displayName}!`);
      // You can redirect or store user data here
    } catch (error) {
      console.error("Google login error:", error);
      alert("Login failed!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Traditional login form submitted!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email or Username</label>
          <input type="text" required />
          <label>Password</label>
          <input type="password" required />
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="divider">or</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
