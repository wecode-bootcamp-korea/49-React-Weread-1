import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="imagecontainer">
        <img
          src="/image/Logo.png"
          alt="wecode그림"
          className="wecodelogo_photo"
        />
        <img
          src="/image/logo_wecode.png"
          alt="wecode글자"
          className="wecodelogo_letter"
        />
      </div>
      <div className="informationcontainer">
        <input type="email" className="emailinput" placeholder="이메일" />
        <input
          type="password"
          className="passwordinput"
          placeholder="비밀번호"
        />
        <button className="loginbutton">로그인</button>
        <div className="buttonContainer">
          <button className="joinMembership">회원가입</button>
          <button className="findPassword">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
