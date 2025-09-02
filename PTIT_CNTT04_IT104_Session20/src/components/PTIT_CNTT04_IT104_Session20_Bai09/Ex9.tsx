import React from "react";

type Item = {
  id: number;
  name: string;
  description: string;
};

export default function Ex9() {
  const data: Item[] = [
    {
      id: 1,
      name: "Apple iPhone 13",
      description: "Smartphone mới nhất của Apple",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      description: "Smartphone flagship của Samsung",
    },
    {
      id: 3,
      name: "OnePlus 9 Pro",
      description: "Smartphone hiệu suất cao từ OnePlus",
    },
    {
      id: 4,
      name: "Google Pixel 6",
      description: "Điện thoại thông minh của Google",
    },
    {
      id: 5,
      name: "Xiaomi Mi 11",
      description: "Điện thoại thông minh giá rẻ",
    },
  ];

  return (
    <div>
      <h2>Tim kiem san pham</h2>
      <input type="text" />
      <p>chua co san pham nao</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
