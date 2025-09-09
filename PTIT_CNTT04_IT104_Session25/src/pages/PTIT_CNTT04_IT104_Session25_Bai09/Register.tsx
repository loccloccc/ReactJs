import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [users, setUsers] = useState<User[]>(() => {
    const taskLocals = localStorage.getItem("usersList");
    return taskLocals ? JSON.parse(taskLocals) : [];
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    if (users.find((u: User) => u.email === email)) {
      alert("Email đã tồn tại!");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      password,
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
    localStorage.setItem("usersList", JSON.stringify(newUsers));

    alert("Đăng ký thành công!");
    navigate("/loginEx10");
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
      <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <label
          style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}
        >
          Tên
        </label>
        <input
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}
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

        <label
          style={{
            fontWeight: "bold",
            display: "block",
            marginBottom: "5px",
          }}
        >
          Xác nhận mật khẩu
        </label>
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Đăng ký
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Bạn đã có tài khoản? <Link to="/loginEx10">Đăng nhập ngay</Link>
      </p>
    </div>
  );
}
