import React, { useState } from "react";
import "./Main.scss";

const Main = () => {
  const a ="/Logo.png"
  const b ="/logo_wecode.png"
  const [input1, setInput] = useState();
  const saveUserId =(event)=>{
    setInput(event.target.value);
  }

  //console.log(input1);
  return (
    <div className="main">
  <div className="logo3">
      <img className="logo1" src={a} alt="logo1"></img> 
      </div>
      <div className="logo4">
      <img className="logo2" src={b} alt="logo1"></img>
      </div>
      <div> 
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' onChange={saveUserId}/>
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' onChange={saveUserId} />
            </div>
            <div>
                <button type='button'>Login</button>
            </div>
        </div>
</div>
  );
};

export default Main;
