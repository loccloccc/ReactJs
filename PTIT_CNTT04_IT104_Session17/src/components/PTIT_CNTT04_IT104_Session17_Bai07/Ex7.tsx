import React, { useState } from "react";
type City = {
  nameCity: string;
}[];
export default function Ex7() {
  const [listCity, setList] = useState<City>([
    { nameCity: "Ha Noi" },
    { nameCity: "HCM" },
    { nameCity: "Da Nang" },
  ]);
  const [city , setCity] = useState("")
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  }
  return (
    <>
      <select name="" id="" onChange={handleChange}>
        <option value="">-- Thanh pho --</option>
        {listCity.map((v, i) => {
          return (
            <option value={v.nameCity} key={i}>
              {v.nameCity}
            </option>
          );
        })}
      </select>
      <p>Thanh pho : {city}</p>
    </>
  );
}
