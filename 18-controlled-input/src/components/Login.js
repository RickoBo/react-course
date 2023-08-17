import { useState } from 'react';
function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            onChange={(e) => handleInputChange(e, 'username')}
            value={data.username}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => handleInputChange(e, 'password')}
            value={data.password}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
