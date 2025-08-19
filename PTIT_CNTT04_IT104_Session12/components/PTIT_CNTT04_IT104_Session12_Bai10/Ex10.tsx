import React from 'react'
import Render from './Render'
import Info from './Info'
export default function Ex10() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-7 grid-margin stretch-card">
                    <div className="card">
                        {/* START CONTROL */}
                        <div className="card-header">
                            <div className="row">
                                <div className="col-3">
                                    <button type="button" className="btn btn-primary btn-icon-text">
                                        Thêm mới sinh viên
                                    </button>
                                </div>
                                <div className="col-6">
                                    <form className="search-form" action="#">
                                        <i className="icon-search" />
                                        <input
                                            type="search"
                                            className="form-control"
                                            placeholder="Search Here"
                                            title="Search here"
                                        />
                                        <button className="btn btn-primary btn-icon-text">
                                            Tìm kiếm
                                        </button>
                                    </form>
                                </div>
                                <div className="col-3 d-flex align-items-center">
                                    <select className="form-control">
                                        <option value="">Sắp xếp</option>
                                        <option value="">ABC def</option>
                                        <option value="">ABC def</option>
                                        <option value="">ABC def</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* END CONTROL */}
                        {/* START LIST STUDENT */}
                        <div className="card-body">
                            <h3 className="card-title">Danh sách sinh viên</h3>
                            <div className="table-responsive pt-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Mã sinh viên</th>
                                            <th>Tên sinh viên</th>
                                            <th>Tuổi</th>
                                            <th>Giới tính</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    {/*  */}
                                    <Render></Render>
                                </table>
                            </div>
                        </div>
                        {/* END LIST STUDENT */}
                    </div>
                </div>
                {/* START FORM SINH VIEN */}
                <div className="col-5 grid-margin">
                    <div className="card">
                        <Info></Info>
                    </div>
                </div>
                {/* END FORM SINH VIÊN */}
            </div>
        </div>
    )
}
