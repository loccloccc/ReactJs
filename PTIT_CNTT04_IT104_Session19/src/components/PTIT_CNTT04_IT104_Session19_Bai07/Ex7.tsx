import React, { useRef } from "react";

export default function Ex7() {
  const content = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    content.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1>Cuộn tới nội dung</h1>
      <button onClick={handleClick}>Đi tới phần nội dung</button>
      <div style={{ height: "1000px" }}></div>

      <span ref={content} style={{ fontSize: "20px", fontWeight: "bold" }}>
        Đây là nội dung quan trọng 
      </span>
    </div>
  );
}
