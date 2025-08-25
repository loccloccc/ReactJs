import React, { Component } from "react";
type ListSubject = {
  arr: string[];
};
export default class SubjectList extends Component<object, ListSubject> {
  constructor(props: object) {
    super(props);
    this.state = {
      arr: ["Toán", "Văn", "Anh", "Hóa", "Sinh"],
    };
  }
  render() {
    return (
      <div>
        <b>Danh sach mon hoc</b>
        {this.state.arr.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </div>
    );
  }
}
