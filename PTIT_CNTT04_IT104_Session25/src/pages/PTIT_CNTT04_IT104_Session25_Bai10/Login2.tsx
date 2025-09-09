import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // dùng state riêng biệt cho email và password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // lấy danh sách user từ localStorage
    const users = JSON.parse(localStorage.getItem("usersList") || "[]");

    // tìm user khớp
    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home-page-2");
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        width: "350px",
        margin: "50px auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <label
          style={{
            fontWeight: "bold",
            display: "block",
            marginBottom: "5px",
          }}
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "14px",
          }}
          required
        />

        <label
          style={{
            fontWeight: "bold",
            display: "block",
            marginBottom: "5px",
          }}
        >
          Mật khẩu
        </label>
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "14px",
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28A745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Đăng nhập
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Bạn chưa có tài khoản? <Link to="/registerEx10">Đăng ký ngay</Link>
      </p>
    </div>
  );
}
