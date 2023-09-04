import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="comming">
          <p className="inBack">뒤로</p>
          <p className="joinOn">회원가입</p>
        </div>
        <div className="base">
          <p className="inform">기본정보</p>
          <p className="check">필수사항</p>
        </div>
        <div className="empw">
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 확인" />
        </div>
        <div className="Num1">
          <p className="profile">닉네임과 프로필 이미지</p>
          <p className="ctc">선택사항</p>
        </div>
        <input type="text" placeholder="닉네임" />
        <div className="info">
          <p className="phone">전화번호</p>
          <p className="cte">선택사항</p>
        </div>
        <div className="cellphone">
          <input type="text" placeholder="010" className="first" />
          <input
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
            className="end"
          />
        </div>
        <div className="form">
          <p className="birthday">생일</p>
          <p className="ctc">선택사항</p>
        </div>{" "}
        <div className="date">
          <input type="text" placeholder="2023년" className="year" />
          <input type="text" placeholder="1월" className="month" />
          <input type="text" placeholder="1일" className="date" />
        </div>
        <button className="join">회원가입</button>
      </div>
    </div>
  );
};

export default Main;
