import React, { Component } from "react";
type JobList = {
  list: {
    id: number;
    name: string;
    assign: string;
    status: boolean;
    create_at: Date;
  }[];
};
export default class TodoList extends Component<object, JobList> {
  constructor(props: object) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: "Nguyen Van A",
          assign: "Thiet ke giao dien",
          status: true,
          create_at: new Date(),
        },
        {
          id: 2,
          name: "Nguyen Van B",
          assign: "Tets",
          status: false,
          create_at: new Date(),
        },
        {
          id: 3,
          name: "Nguyen Van C",
          assign: "Xu li logic",
          status: true,
          create_at: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <table width={"100%"}>
        <tr>
          <th>STT</th>
          <th>Ten cong viec</th>
          <th>Nguoi thuc hien</th>
          <th>Trang thai</th>
          <th>Thoi gian tao</th>
          <th>Chuc nang</th>
        </tr>
        {this.state.list.map((v, i) => (
          <tr key={i} style={{
            textAlign:"center",
          }}>
            <td>{v.id}</td>
            <td>{v.assign}</td>
            <td>{v.name}</td>
            <td style={{
                display:"flex",
                justifyContent:'center'
            }}>
              {v.status == true ? (
                <div
                  style={{
                    width: "100px",
                    height: "30px",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  Hoan Thanh
                </div>
              ) : (
                <div
                  style={{
                    width: "150px",
                    height: "30px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Khong hoan thanh
                </div>
              )}
            </td>
            <td>
              {`${
                v.create_at.getDate() < 10
                  ? "0" + v.create_at.getDate()
                  : v.create_at.getDate()
              }/` +
                `${
                  v.create_at.getMonth() + 1 < 10
                    ? "0" + (v.create_at.getMonth() + 1)
                    : v.create_at.getMonth() + 1
                }/` +
                `${v.create_at.getFullYear()} ` +
                `${
                  v.create_at.getHours() < 10
                    ? "0" + v.create_at.getHours()
                    : v.create_at.getHours()
                }:` +
                `${
                  v.create_at.getMinutes() < 10
                    ? "0" + v.create_at.getMinutes()
                    : v.create_at.getMinutes()
                }:` +
                `${
                  v.create_at.getSeconds() < 10
                    ? "0" + v.create_at.getSeconds()
                    : v.create_at.getSeconds()
                }`}
            </td>
            <td style={{
                display:"flex",
                gap:"20px",
                justifyContent:'center'
            }}>
              <button
                style={{
                  width: "50px",
                  height: "40px",
                  border: "1px solid red",
                }}
              >
                Xoa
              </button>
              <button
                style={{
                  width: "50px",
                  height: "40px",
                  border: "1px solid red",
                }}
              >
                Sua
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}
