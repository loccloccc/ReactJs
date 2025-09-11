import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navi = useNavigate();

  const handleLogin = () => {
    const usersStr = localStorage.getItem("users"); 
    if (!usersStr) {
      setMessage(" Chưa có tài khoản, vui lòng đăng ký");
      return;
    }

    const users = JSON.parse(usersStr);

    // tìm user trùng email & password
    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (foundUser) {
      setMessage(" Đăng nhập thành công!");
      navi("/ex8");
    } else {
      setMessage(" Sai email hoặc mật khẩu");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Đăng Nhập</h2>

      <div style={{ textAlign: "left", marginBottom: "10px" }}>
        <label>Email :</label>
        <input
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage(""); 
          }}
          style={{ width: "100%", height: "30px", marginTop: "5px" }}
        />
      </div>

      <div style={{ textAlign: "left", marginBottom: "10px" }}>
        <label>Mật khẩu :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage(""); 
          }}
          style={{ width: "100%", height: "30px", marginTop: "5px" }}
        />
      </div>

      {message && (
        <p style={{ color: message.includes("✅") ? "green" : "red" }}>
          {message}
        </p>
      )}

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          height: "35px",
          backgroundColor: "rgb(37, 99, 235)",
          border: "none",
          borderRadius: "5px",
          color: "white",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        Đăng nhập
      </button>

      <p>
        Bạn chưa có tài khoản :{" "}
        <NavLink to={"/register"} style={{ textDecoration: "none" }}>
          Đăng kí
        </NavLink>
      </p>
    </div>
  );
}
