import React, { useState } from 'react';
// import axiosInstance from '../../api/mockApi';


const Login = ({handleRegister,handleCloseLogin}) => {
    const handleChange = () => {
        console.log('123')
    }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


//   const handleLogin = async  (e) => {
//     e.preventDefault();
//     try {
//         const response = await axiosInstance.post('/login', { email, password });
//         setMessage(response.data.message);

//       } catch (error) {
//         setMessage(error.response.data.message);
//       }
//   };

  return (
    <div className="popup-main">
    <div className="popup-login-title">
      <button className="popup-close" onClick={handleCloseLogin}>
        <i className="fas fa-times icon"></i>
      </button>
      <span className="txt">LOGIN</span>
    </div>
    <div className="popup-over">
      <div className="popup-wrapper">
        <div className="popup-login-inner">
          <p className="title fw-6 t-center t16">WELCOME BACK!</p>
          <div className="popup-login-form">
            <form >
              <div className="form-list">
                <label className="ip-control">
                  <span className="t-label">EMAIL ADDRESS</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your Email"
                    title="Enter your Email"
                  />
                </label>
                <label className="ip-control">
                  <span className="t-label">PASSWORD</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your Password"
                    title="Enter your Password"
                  />
                </label>
                <div className="ip-control">
                  <div className="d-flex">
                    <div className="recheck">
                      <div className="recheck-block">
                        <div className="recheck-item">
                          <input
                            onChange={handleChange}
                            className="recheck-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <div className="recheck-checkbox"></div>
                          <p className="recheck-text">Remember me</p>
                        </div>
                      </div>
                    </div>
                    <a className="link" href="/">
                      Lost password?
                    </a>
                  </div>
                </div>
              </div>
              <button className="btn btn-trans full" type="submit">
                <span className="text">LOGIN</span>
              </button>
              {message && <p>{message}</p>}
            </form>
              <p className="popup-login-txt">
                Don’t have an account?
                <button className="link" onClick={handleRegister}>
                  SIGN UP
                </button>
              </p>
          </div>
          <div className="popup-login-line">

            <span className="txt">or continue with</span>
          </div>
          <div className="footer-social">
            <a className="footer-social-item" href="/">
              <img src="/gg.png" alt="" />
            </a>
            <a className="footer-social-item" href="/">
              <img src="/fb-icon.png" alt="" />
            </a>
            <a className="footer-social-item" href="/">
              <img src="/apple.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;