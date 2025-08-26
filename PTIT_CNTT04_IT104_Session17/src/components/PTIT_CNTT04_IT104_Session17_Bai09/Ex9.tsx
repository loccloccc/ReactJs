import React from "react";
import { useState } from "react";

type Job = {
  id: number;
  title: string;
  status: boolean;
};
export default function Ex9() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const [taskName, setTaskName] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName === "") {
      alert("Nội dung công việc không được để trống");
      return;
    }
    const isExist = jobs.some((item) => item.title === taskName);
    if (isExist) {
      alert("Nội dung công việc đã tồn tại");
      return;
    }
    const newJob: Job = {
      id: new Date().getTime(),
      title: taskName,
      status: false,
    };
    setJobs([...jobs, newJob]);
    setTaskName("");
  };
  const handleDelete = (idDelete: number) => {
    const result = confirm("Bạn có chắc chắn muốn xóa hay không");
    if (result) {
      setJobs(jobs.filter((item) => item.id != idDelete));
    }
  };
  const handleUpdate = (idUpdate:number) => {
    const edit = jobs.find(e => e.id === idUpdate);
    if(edit){
        setJobs([{
            ...jobs,
            id:idUpdate,
            title:edit.title,
            status:false
        }])
    }
  }
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3>Danh sach công việc</h3>
                <form
                  onSubmit={handleSubmit}
                  className="d-flex justify-content-center align-items-center mb-4"
                >
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form2"
                      className="form-control"
                      value={taskName}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form2">
                      Thêm công việc
                    </label>
                  </div>
                  <button type="submit" className="btn btn-info ms-2">
                    Thêm
                  </button>
                </form>
                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active">
                      {jobs.length > 0
                        ? "Tat ca cac cong viec"
                        : "Chua co cong viec nao"}
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <ul className="list-group mb-0">
                      {jobs.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                          >
                            <div>
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                              />
                              {item.status ? (
                                <span
                                style={{ textDecoration: "line-through" }}
                                >
                                  {item.title}
                                </span>
                              ) : (
                                <span>{item.title}</span>
                              )}
                            </div>
                            <div>
                              <a
                                href="#!"
                                className="text-info"
                                title="Sửa công việc"
                                onClick={() => handleUpdate(item.id)}
                              >
                                <i className="fas fa-pencil-alt me-3" />
                              </a>
                              <a
                                onClick={() => handleDelete(item.id)}
                                href="#!"
                                className="text-danger"
                                title="Xóa công việc"
                              >
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
