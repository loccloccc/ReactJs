import React, { Component } from "react";

type JobList = {
  list: { name: string }[];
  currentJob: string;
};

export default class Ex9 extends Component<object, JobList> {
  constructor(props: object) {
    super(props);
    this.state = {
      list: [],
      currentJob: "",
    };
  }

  componentDidMount() {
    const savedJobs = JSON.parse(localStorage.getItem("job") || "[]");
    this.setState({ list: savedJobs });
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentJob: e.target.value });
  };

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = this.state.currentJob.trim();
    if (!value) {
      alert("khong duoc de trong");
      return;
    }   

    const newList = [...this.state.list, { name: value }];
    localStorage.setItem("job", JSON.stringify(newList));
    this.setState({ list: newList, currentJob: "" });
  };
  handleDelete = (index: number) => {
    const confirmDelete = window.confirm("Ban co chac muon xoa cong viec nay");
    if (!confirmDelete) return;

    const updatedList = [...this.state.list];
    updatedList.splice(index, 1); 

    localStorage.setItem("job", JSON.stringify(updatedList));
    this.setState({ list: updatedList });

    console.log("Đa xoa cong viec tai vi tri:", index);
  };
  render() {
    return (
      <div>
        <h2>Danh sách công việc</h2>
        <div style={{ display: "flex", gap: "30px" }}>
          <input
            type="text"
            name="name"
            value={this.state.currentJob}
            placeholder="Nhap ten cong viec"
            style={{ width: "700px", height: "30px" }}
            onChange={this.handleChange}
          />
          <button
            style={{
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
              color: "white",
              width: "100px",
            }}
            onClick={this.handleClick}
          >
            Thêm
          </button>
        </div>

        <div className="renderJob" style={{ marginTop: "20px" }}>
          {this.state.list.map((value, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "650px", marginBottom: "10px" }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="checkbox" />
                <p>{value.name}</p>
              </div>
              <div
                className="button"
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <i className="fa-solid fa-pen"></i>
                <i
                  className="fa-solid fa-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleDelete(index)}
                ></i>
              </div>
            </div>
          ))}
        </div>

        <div className="total" style={{ marginTop: "20px" }}>
          Công việc hoàn thành: 0 / {this.state.list.length}
        </div>
      </div>
    );
  }
}
