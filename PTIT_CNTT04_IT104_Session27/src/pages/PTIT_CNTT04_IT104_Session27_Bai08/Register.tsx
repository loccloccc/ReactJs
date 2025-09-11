import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const navi = useNavigate();

  const handleRegister = () => {
    let valid = true;

    setEmailError("");
    setPasswordError("");
    setConfirmError("");

    if (!email) {
      setEmailError(" Vui lòng nhập email");
      valid = false;
    } else if (!email.includes("@") || !email.endsWith("gmail.com")) {
      setEmailError(" Vui lòng nhập email đúng định dạng ");
      valid = false;
    }

    if (!password) {
      setPasswordError(" Vui lòng nhập mật khẩu");
      valid = false;
    }

    if (!confirm) {
      setConfirmError(" Vui lòng nhập lại mật khẩu");
      valid = false;
    } else if (password !== confirm) {
      setConfirmError(" Mật khẩu không khớp");
      valid = false;
    }

    if (!valid) return;

    const usersStr = localStorage.getItem("users");
    const users = usersStr ? JSON.parse(usersStr) : [];

    const isExist = users.some((u: any) => u.email === email);
    if (isExist) {
      setEmailError(" Email này đã được đăng ký");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    navi("/login");

    setEmail("");
    setPassword("");
    setConfirm("");
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
      <h2>Đăng kí</h2>

      
      <div style={{ textAlign: "left", marginBottom: "10px" }}>
        <label>Email :</label>
        <input
          type="email"
          placeholder="name@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(""); 
          }}
          style={{ width: "100%", height: "30px", marginTop: "5px" }}
        />
        {emailError && (
          <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0" }}>
            {emailError}
          </p>
        )}
      </div>

      
      <div style={{ textAlign: "left", marginBottom: "10px" }}>
        <label>Mật khẩu :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
          style={{ width: "100%", height: "30px", marginTop: "5px" }}
        />
        {passwordError && (
          <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0" }}>
            {passwordError}
          </p>
        )}
      </div>

      <div style={{ textAlign: "left", marginBottom: "10px" }}>
        <label>Xác nhận mật khẩu :</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            setConfirmError(""); 
          }}
          style={{ width: "100%", height: "30px", marginTop: "5px" }}
        />
        {confirmError && (
          <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0" }}>
            {confirmError}
          </p>
        )}
      </div>

      {/* Button */}
      <button
        onClick={handleRegister}
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
        Đăng kí
      </button>

      <p>
        Bạn đã có tài khoản{" "}
        <NavLink to={"/login"} style={{ textDecoration: "none" }}>
          Đăng nhập
        </NavLink>
      </p>
    </div>
  );
}
