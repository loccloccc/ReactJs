import React from "react";

export default function Render() {
  const student = [
    { id: 1, mxv: "SV001", name: "Nguyen Van A", age: 18, sex: "Nam" },
    { id: 2, mxv: "SV002", name: "Nguyen Van B", age: 19, sex: "Nu" },
    { id: 3, mxv: "SV003", name: "Nguyen Van C", age: 18, sex: "Nam" },
  ];
  return (
    <tbody>
      {student.map((value, index) => {
        return (
          <tr key={index}>
            <td>{value.id}</td>
            <td>{value.mxv}</td>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.sex}</td>
            <td>
              <div className="template-demo">
                <button type="button" className="btn btn-danger btn-icon-text">
                  Xem
                </button>
                <button type="button" className="btn btn-warning btn-icon-text">
                  Sửa
                </button>
                <button type="button" className="btn btn-success btn-icon-text">
                  Xóa
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
