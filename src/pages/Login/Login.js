import React, { useState } from "react";
import "./Login.scss";


const Login = () => {
 
  const [id, setId] = useState(""); // eslint-disable-line no-unused-vars
  const [pw, setPw] = useState(""); // eslint-disable-line no-unused-vars
  
  const saveUserld = event => {
    setId(event.target.value); 
  }; 

  const saveUserPw = event => {
    setPw(event.target.value); 
  };

  

  return (
    <div className="login">
        <div className="splash">
        <img className="img_1" src="./Logo.png" alt="이미지없음"></img>
        <img className="img_2" src="./logo_wecode.png" alt="이미지없음"></img>
        </div>
        <div className="container">
            <input className="input_wrap1" type="text" placeholder="이메일" onChange={saveUserld} required/>
            <input className="input_wrap2" type="password" placeholder="비밀번호" onChange={saveUserPw} required/>
            <button className="login_btn" type="button">로그인</button>
        </div>
        <div className="login_option">
          <p className="">회원 가입</p>
          <span class="bar">|</span>
          <p className="">비밀번호 찾기</p>
        </div>
    </div>
  );
};

export default Login;
