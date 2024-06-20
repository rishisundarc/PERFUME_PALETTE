import React, { useState } from 'react';
import '../assests/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import { Login, Registers, register } from './services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice';
function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoginMode, setLoginMode] = useState(true);
  //values
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: ''
    });
  //login to signup and vice verse
  const handleSwitchToLogin = () => {
    setLoginMode(!isLoginMode);
  };
  //login func
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Login(formData);
      if (response && response.token) {
        const token = response.token;
        localStorage.setItem('token', token);
        dispatch(login(formData.username));
        navigate('/home ');
      } else {
        toast.error('Login failed. Please check your credentials.', {
          position: 'top-right',
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };
  //signup func
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      await Registers(formData);
      console.log('Form data submitted:', formData);
    } catch (error) {
      console.error('Error in handleSignupSubmit:', error);
    }
  };
  return (
    <div className="split-page">
      <div className="left-section">
        <h2>Welcome to PerfumePalette Studio</h2>
        <p>Discover the world of custom fragrances.</p>
      </div>
      <div className="right-section">
        <div className="signup-container">
          <div className="signup-form-container">
            <div className="signup-form-header">
              {isLoginMode ? <h2>Login</h2> : <h2>Sign Up</h2>}
            </div>
            {isLoginMode ? (
              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="User Name"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Login</button>
                </div>
                <div className="opp">
                  <p>
                    Don't have an account yet?{' '}
                    <span
                      onClick={handleSwitchToLogin}
                      style={{ color: 'black', cursor: 'pointer' }}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </form>
            ) : (
              <form className="signup-form" onSubmit={handleSignupSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="User Name"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={(e) =>
                      setFormData({ ...formData, firstname: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={(e) =>
                      setFormData({ ...formData, lastname: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" onClick={handleSignupSubmit}>Sign Up</button>
                </div>
                <div className="opp">
                  <p>
                    Already have an account?{' '}
                    <span
                      onClick={handleSwitchToLogin}
                      style={{ color: 'black', cursor: 'pointer' }}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default SignUpPage;
