import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <header>
        <input type="text" placeholder="뒤로"/>
      </header>
      <div clasName="container">
        <div>
        <input type="text" placeholder="회원가입"/>
        </div>
        <div>
        <p>기본 정보</p>
        <p>필수 사항</p>
        </div>
        <div>
        <input type="text" placeholder="이메일"/>
        </div>
        <div>
        <input type="password" placeholder="비밀번호"/>
        </div>
        <div>
        <input type="password" placeholder="비밀번호 확인"/>
        </div>
        <p>닉네임과 프로필 이미지</p>
        <p>선택 사항</p>
        <div>
        <input type="text" placeholder="닉네임"/>
        </div>
        <p>전화번호</p>
        <p>선택 사항</p>
        <div>
          <input type="tel" placeholder="휴대폰 번호를 입력해주세요."/>
          <input type="tel" placeholder="휴대폰 번호를 입력해주세요."/>
        </div>
        <div>
          <p>생일</p>
          <p>선택 사항</p>
        </div>
      </div>
      <div>
        <button type="button">회원가입</button>
      </div>
    </div>
  );
};

export default Main;
