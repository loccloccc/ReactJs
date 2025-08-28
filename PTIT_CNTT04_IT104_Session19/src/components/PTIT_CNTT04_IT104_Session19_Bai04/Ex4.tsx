import React, { useState } from "react";
export default function Ex4() {
  const [data, setDate] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === "") {
      setError({ ...error, [name]: `${name} khong duoc bo trong` });
    } else {
      setError({ ...error, [name]: "" });
    }
    setDate({ ...data, [name]: value });
  };
  console.log(data);
  return (
    <div>
      <h3>Dang ki thong tin</h3>
      <div>
        <input type="text" name="name" id="" onChange={handleChange} />
        <p style={{ color: "red" }}>{error.name}</p>
      </div>
      <div>
        <input type="text" name="email" id="" onChange={handleChange} />
        <p style={{ color: "red" }}>{error.email}</p>
      </div>
      <button>Save</button>
    </div>
  );
}
