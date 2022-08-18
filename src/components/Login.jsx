import { memo } from 'react';

const Login = () => { 
  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default memo(Login);