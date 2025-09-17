import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
interface Data {
  findIndex(arg0: (items: Data) => boolean): unknown;
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
  content: string;
}
export default function ListPost() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  // lay data
  async function getData() {
    let result: Data[];

    try {
      let response = await axios.get("http://localhost:3000/posts");
      result = response.data;
    } catch (error) {
    } finally {
      setTimeout(() => {
        setData([...result]);
      }, 1500);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [edit, setEdit] = useState(false);
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) =>
    setImage(e.target.value);
  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);
  // ham them vao data
  async function addData(data: any) {
    let res = await axios.post("http://localhost:3000/posts", data);
    return res;
  }
  const handleCompelete = async () => {
    setShow(false);
    if (!title || !image || !content) {
      alert("ban chua nhap gi");
      return;
    }
    if (editPost) {
      let res = await axios.patch(
        `http://localhost:3000/posts/${editPost.id}`,
        {
          title: title,
          image: image,
          date: editPost.date,
          status: editPost.status,
          content: content,
        }
      );
      let findID = data.findIndex((items: Data) => items.id === res.data.id);
      data[findID] = res.data;
      setData([...data]);
    } else {
      const reponsive = await addData({
        title: title,
        image: image,
        date: new Date().getDay(),
        status: false,
        content: content,
      });
      const newData = reponsive.data;
      setData([...data, newData]);
    }
    setTitle("");
    setImage("");
    setContent("");
  };
  const handleClose = () => {
    setShow(false);
  };
  // ham chan
  const handleStatus = async (task: Data) => {
    try {
      const res = await axios.patch(`http://localhost:3000/posts/${task.id}`, {
        status: !task.status,
      });
      const newData = data.map((item) =>
        item.id === task.id ? res.data : item
      );
      setData(newData);
    } catch (error) {}
  };
  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setTitle("");
    setImage("");
    setContent("");
  };
  // ham sua
  const [editPost, setEditPost] = useState<Data | null>(null);
  const handleEdit = async (datas: Data) => {
    setShow(true);
    setEdit(true);
    setTitle(datas.title);
    setImage(datas.image);
    setContent(datas.content);
    setEditPost(datas);
  };
  // ham xoa
  const handleDelete = async (id: number) => {
    let choice = confirm("Xác nhận xóa .");
    if (choice) {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setData(data.filter((task: Data) => task.id !== id));
    }
  };
  // hàm tìm kiếm
  const [search, setSearch] = useState("")
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  }
  // ham danh dau
  const [select, setSelect] = useState("")
  // const handleSelect = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setSelect(e.target.value);
  //   console.log(select);
  // }
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <input type="text"  placeholder="nhập tìm kiếm" onChange={handleSearch}/>
      <select>
        <option>Lựa chọn</option>
        <option value="true">Đã xuất bản</option>
        <option value="false">Chưa xuất bản</option>
      </select>

      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {edit === true ? "Sửa bài viết" : "Thêm bài viết mới"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên bài viết</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={handleTitle}
                value={title}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control type="text" onChange={handleImage} value={image} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleContent}
                value={content}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleCompelete}>
            {edit === true ? "Đồng ý" : "Xuất bản"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((value: any, index: number) => {
            return (
              <tr key={index}>
                <th>{index+1}</th>
                <th>{value.title}</th>
                <th>{value.image}</th>
                <th>
                  {value.status === true ? "Đã xuất bản" : "Chưa xuất bản"}
                </th>
                <th
                  style={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <button
                    onClick={() => handleStatus(value)}
                    style={{
                      width: "70px",
                      border: "none",
                      backgroundColor: "rgb(250,173,20)",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    
                    {value.status === true ? "Chặn" : "Bỏ chặn"}
                  </button>
                  <button
                    onClick={() => handleEdit(value)}
                    style={{
                      width: "50px",
                      border: "none",
                      backgroundColor: "rgb(255,246,228)",
                      borderRadius: "10px",
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(value.id)}
                    style={{
                      width: "50px",
                      border: "none",
                      backgroundColor: "rgb(250,1,20)",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    Xóa
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
