import React, { useState } from "react";

export default function Ex8() {
  const arr: string[] = ["game", "nhay day", "boi", "hoc"];
  const [arr2, setArr2] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setArr2((p) => (checked ? [...p, value] : p.filter((i) => i !== value)));
  };
  return (
    <>
      <p>So thich : [{arr2.map(v =>  (` " ${v}" `))}]</p>
      {arr.map((e, i) => {
        return (
          <div key={i}>
            <input type="checkbox" value={e} onChange={handleChange} />
            <label htmlFor="">{e}</label>
          </div>
        );
      })}
      <br />
    </>
  );
}
