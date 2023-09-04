import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <img src="/image/Logo.png" alt="큰 로고" className="one" />
        <img src="/image/logo_wecode.png" alt="wecode" className="two" />
        <div className="input">
          <input type="text" placeholder="이메일" />
          <input type="text" placeholder="비밀번호" />
          <button className="loginBtn">로그인</button>
        </div>
      </div>
      <div className="contensts">
        <button className="joinBtn">회원가입</button>|
        <button className="findPasswordBtn">비밀번호 찾기</button>
      </div>
    </div>
  );
};