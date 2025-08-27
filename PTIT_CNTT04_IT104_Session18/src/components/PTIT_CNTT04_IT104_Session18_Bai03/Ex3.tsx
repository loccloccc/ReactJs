import React, { useCallback, useState } from "react";

export default function Ex3() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setPass(e.target.value);
  };
  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`email ${email} , pass ${pass}`);
    },[email,pass]
  );
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="" onChange={handleChange} />
        <br />
        <label htmlFor="">Pass</label>
        <input type="password" name="pass" id="" onChange={handleChange} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
