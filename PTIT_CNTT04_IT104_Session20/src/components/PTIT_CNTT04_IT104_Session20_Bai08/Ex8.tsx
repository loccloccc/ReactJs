import React, { useEffect, useReducer } from "react";

export default function Ex8() {
  const initial = {
    name: "",
    email: ""
  };

  const inforReducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD":
        return { ...state, [action.payload.name]: action.payload.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(inforReducer, initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "ADD", payload: { name, value } });
  };
  useEffect(() => {
    console.log("cap nhap thanh cong" , state);
  },[state])
  return (
    <div>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="ho va ten"
      />
      <br />
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="email"
      />
      <p>Thông tin</p>
      <p>Ten :{state.name}</p>
      <p>Email :{state.email}</p>
    </div>
  );
}
