import { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Modal, Pagination, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Kiểu trạng thái danh mục
type CategoryStatus = "active" | "inactive";

// Kiểu dữ liệu 1 danh mục
type CategoryRow = {
  id: string;
  name: string;
  description: string;
  status: CategoryStatus;
};

export default function Categories() {
  // State lưu tất cả danh mục
  const [rows, setRows] = useState<CategoryRow[]>([]);
  // State cho tìm kiếm theo tên
  const [search, setSearch] = useState("");
  // State cho filter theo trạng thái
  const [statusFilter, setStatusFilter] = useState<CategoryStatus | "">("");
  // State cho phân trang
  const [page, setPage] = useState(1);
  const pageSize = 5;

  // State cho modal form
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoryRow | null>(null);

  // ---------------- GỌI API ----------------

  // Lấy tất cả danh mục từ server
  const getAllCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8080/categories");
      setRows(res.data);
    } catch (err) {
      console.error("Lỗi load danh mục:", err);
    }
  };

  // Thêm mới danh mục
  const addCategory = async (cat: CategoryRow) => {
    try {
      const res = await axios.post("http://localhost:8080/categories", cat);
      setRows((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Lỗi thêm:", err);
    }
  };

  // Sửa danh mục
  const updateCategory = async (cat: CategoryRow) => {
    try {
      await axios.put(`http://localhost:8080/categories/${cat.id}`, cat);
      setRows((prev) => prev.map((r) => (r.id === cat.id ? cat : r)));
    } catch (err) {
      console.error("Lỗi sửa:", err);
    }
  };

  // Xóa danh mục
  const deleteCategory = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/categories/${id}`);
      setRows((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error("Lỗi xóa:", err);
    }
  };

  // Gọi API lần đầu khi load trang
  useEffect(() => {
    getAllCategories();
  }, []);

  // ---------------- FILTER + PHÂN TRANG ----------------

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search ? r.name.toLowerCase().includes(search.toLowerCase()) : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  // ---------------- TABLE COLUMNS ----------------

  const columns: ColumnsType<CategoryRow> = [
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Mô tả", dataIndex: "description", key: "description" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  // ---------------- HÀM XỬ LÝ ----------------

  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  function onEdit(row: CategoryRow) {
    setEditing(row);
    setOpen(true);
  }

  function onDelete(id: string) {
    deleteCategory(id);
  }

  interface CategoryFormValues {
    name: string;
    description?: string;
    status: CategoryStatus;
  }

  // Submit form thêm/sửa
  function onSubmit(values: CategoryFormValues) {
    const next: CategoryRow = {
      id: editing?.id ?? uuidv4(),
      name: values.name,
      description: values.description || "",
      status: values.status,
    };

    if (editing) {
      updateCategory(next);
    } else {
      addCategory(next);
    }

    setOpen(false);
  }

  // ---------------- UI ----------------
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý danh mục</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      {/* Filter + Search */}
      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          style={{ width: "200px" }}
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter((v as CategoryStatus) || "")}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng" },
          ]}
        />
        <Input
          placeholder="Tìm kiếm"
          style={{ width: "300px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowKey="id"
      />

      {/* Pagination */}
      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      {/* Modal Form */}
      <Modal
        title={editing ? "Sửa danh mục" : "Thêm mới danh mục"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" },
              ]}
            />
          </Form.Item>
          <Form.Item name="description" label="Mô tả">
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
