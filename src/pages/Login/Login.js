import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div>
        <h1>회원가입</h1>
        <div className="loginbox">
          <label> 기본정보
            <input className="input_id" type='text' name='input_id' placeholder="이메일" />
            <input className="input_password" type='text' name='input_password' placeholder="비밀번호" />
            <input className="input_passwordcheck" type='text' name='input_passwordcheck' placeholder="비밀번호 확인" />
          </label>
        </div>
        <div className="nicknamebox">
          <label> 닉네임과 프로필 이미지
            <input className="nickname" type='text' name='nicknameInput' placeholder="닉네임" />
          </label>
        </div>
        
        <div className="phonebox">전화번호
          <div className="phonenumberselect">
            <select>
              <option value="010">010</option>
              <option value="011">011</option>

            </select>
          </div>

          <div className="phonenumbox">
            <label> 
              <input className="phonenumber" type='text' name='phonenumberInput' placeholder="휴대폰 번호를 입력해주세요" />
            </label>
          </div>
        </div>


        <div className="birthdaybox">
          <label> 생일
            <input className="birthday" type='text' name='birthdayInput' placeholder="1986" />
          </label>
        </div>

        <button class="" type="submit">회원가입하기</button>
      </div>
    </div>
  );
};

export default Login;
