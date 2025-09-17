import React, { Component , useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
export class ListPost extends Component {
   const [show: any, setShow: any] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  render() {
    return (
      <div>
        <h1>Danh sách bài viết</h1>
        <input type="text" />
        <select name="" id="">
          <option value="">Lựa chọn</option>
          <option value="">Đã xuất bản</option>
          <option value="">Chưa xuất bản</option>
        </select>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
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
          <tbody></tbody>
        </Table>
      </div>
    );
  }
}

export default ListPost;
function setShow(arg0: boolean) {
    throw new Error("Function not implemented.");
}

