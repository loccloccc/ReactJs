import React, { useReducer, useState } from "react";

type State = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

export default function Ex8() {
  type Action =
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS" }
    | { type: "LOGIN_ERROR"; payload: string };

  const initialState: State = {
    loading: false,
    success: false,
    error: null,
  };
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "LOGIN_START":
        return { loading: true, success: false, error: null };
      case "LOGIN_SUCCESS":
        return { loading: false, success: true, error: null };
      case "LOGIN_ERROR":
        return { loading: false, success: false, error: action.payload };
      default:
        return state;
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload: "Sai tài khoản hoặc mật khẩu",
        });
      }
    }, 1500);
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      /> <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      /> <br />
      <button onClick={handleLogin} disabled={state.loading}>
        {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>

      {state.success && <p style={{ color: "green" }}>Đăng nhập thành công!</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
