import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include", //////////
    });
    if (response.ok) {
      ////Lấy thông tin người dùng khi vừa đăng nhập tránh bị lỗi vẫn còn nút đăng nhập khi đăng nhập
      response.json().then((userInfo1) => {
        setUserInfo(userInfo1);
        setRedirect(true);
      });
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form action="" className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
