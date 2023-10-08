import "./login.scss"
import { Link, useNavigate } from 'react-router-dom';
import React, { useCallback, useState } from 'react';
import axios from 'axios';

export default function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = useCallback(() => {
    if (username === "") {
      setUsernameError("Vui lòng nhập tên đăng nhập.");
    }
    if (password === "") {
      setPasswordError("Vui lòng nhập mật khẩu.");
    }
    if (username !== "" && password !== "") {
      axios.post("https://wlp.howizbiz.com/api/web-authenticate", { username, password })
        .then(response => {
          const token = response.data.access_token;
          localStorage.setItem("token", token)
          return navigate('/user');
        })
        .catch(error => {
          alert("Tài khoản không tồn tại");
        });
    }
  });

  return (
    <>
      <div className="login_header">
        <div className="row">
          <div className="col-2">
            <img src="http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png" alt="" />
          </div>
          <div className="col-10">
            <h4>HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN BẢO VỆ</h4>
          </div>
        </div>
        <div className="login_main1">
          <div className="login_main">
            <img src="http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png" alt="" />
            <h3>Đăng nhập</h3>
            <div className={`login_input ${usernameError ? 'error' : ''}`}>
              <i className="fa-regular fa-user" style={{ opacity: "0.2" }}></i>
              <input type="text" placeholder="Tên đăng nhập" value={username} onChange={handleUsernameChange} />
              <p>{usernameError && <span className="error-message">{usernameError}</span>}</p>
            </div>
            <div className={`login_input ${passwordError ? 'error' : ''}`}>
              <i className="fa-solid fa-lock" style={{ opacity: "0.2" }}></i>
              <input type="password" placeholder="Mật khẩu" value={password} onChange={handlePasswordChange} onKeyPress={handleKeyPress} />
              <p>{passwordError && <span className="error-message">{passwordError}</span>}</p>
            </div>
            <button onClick={handleSubmit}> Đăng nhập </button>
            <br />
            <br />
            <p>Quên mật khẩu</p>
          </div>
        </div>
      </div>
    </>
  )
}
