import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
export interface Data {
  id: number;
  title: string;
  excerpt: string;
}
export const listData: Data[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt:
      "React là gì là một câu hỏi mà những người quan tâm về lĩnh vực công nghệ cần phải biết. Đây là thư viện JavaScript được các lập trình viên dùng rất nhiều để thiết kế giao diện người dùng cho ứng dụng web.",
  },
  {
    id: 2,
    title: "Sửu dụng talwinCss",
    excerpt:
      "React là gì là một câu hỏi mà những người quan tâm về lĩnh vực công nghệ cần phải biết. Đây là thư viện JavaScript được các lập trình viên dùng rất nhiều để thiết kế giao diện người dùng cho ứng dụng web.",
  },
  {
    id: 3,
    title: "React Router Dom là gì",
    excerpt:
      "React Router Dom là một thư viện giúp bạn, định tuyến và điều hướng giữa các trang khác nhau trong ứng dụng React",
  },
  {
    id: 4,
    title: "Quản lí state",
    excerpt:
      "Bài viết này sẽ giúp bạn dễ dàng nắm được những khái niệm cơ bản về React Router Dom và có thể áp dụng ngay vào ứng dụng của bạn.",
  },
  {
    id: 5,
    title: "Hook trong React",
    excerpt:
      "React là gì là một câu hỏi mà những người quan tâm về lĩnh vực công nghệ cần phải biết. Đây là thư viện JavaScript được các lập trình viên dùng rất nhiều để thiết kế giao diện người dùng cho ứng dụng web.",
  },
];
export default function Posts() {
    const navi = useNavigate();
    const handleClick = (id:number) => {
        navi(`/blog/posts/${id}`)
    }
  return (
    <>
      <div className="title">
        <h2>Danh sách bài viết</h2>
      </div>
      {listData.map((v: any, i: number) => (
        <div
          className="content"
          style={{
            border: "1px solid black",
            width: "79vw",
            paddingLeft: "10px",
            borderRadius: "10px",
            marginBottom:"10px"
          }}
          key={i}
          onClick={() => handleClick(v.id)}
        >
          <NavLink style={{ color: "blue" }} to={`/blog/posts/${v.id}`}>{v.title}</NavLink>
          <p>{v.excerpt}</p>
        </div>
      ))}
    </>
  );
}
