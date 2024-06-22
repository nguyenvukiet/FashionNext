import React, { useState } from "react";
// import axiosInstance from '../../api/mockApi';

const Register = ({setRegister, handleCloseRegister, handleCloseLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState('');

//   const handleRegister = async  (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     try {
//         const response = await axiosInstance.post('/register', { email, password });
//         setMessage(response.data.message);
//         setRegister(false);
//       } catch (error) {
//         setMessage(error.response.data.message);
//     }
//   };

  return (
    <div className="popup-main">
      <div className="popup-login-title">
        <button className="popup-close" onClick={handleCloseLogin}>
          <i className="fas fa-times icon"></i>
        </button>
        <span className="txt">REGISTER</span>
      </div>
      <div className="popup-over">
        <div className="popup-wrapper">
          <div className="popup-login-inner">
            <p className="title fw-6 t-center t16">CREATE ACCOUNT</p>
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
                  <label className="ip-control">
                    <span className="t-label">CONFIRM PASSWORD</span>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Enter your Password"
                      title="Enter your Password"
                    />
                  </label>
                </div>
                <button className="btn btn-trans full" type="submit">
                  <span className="text">REGISTER</span>
                </button>
                {message && <p>{message}</p>}
                <p className="popup-login-txt">
                  Already have an account?
                  <button className="link" onClick={handleCloseRegister}>
                    LOGIN
                  </button>
                </p>
              </form>
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

export default Register;
