import React, { useState } from "react";


export default function AuthForm({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  
  const canSubmit = user && pass;
  
  const onUserChange = (event) => {
    setUser(event.target.value);
  };
  
  const onPassChange = (event) => {
    setPass(event.target.value);
  };
  
  const onFormSubmit = () => {
    onLogin(user, pass);
  };
  
  return (
    <div>
      <input 
        type="text" 
        id="user-input" 
        value={user} 
        onChange={onUserChange} 
      />
      <input 
        type="password" 
        id="pass-input" 
        value={pass} 
        onChange={onPassChange} 
      />
      <button 
        id="auth-button" 
        disabled={!canSubmit} 
        onClick={onFormSubmit}
      >
        Login
      </button>
    </div>
  );
}