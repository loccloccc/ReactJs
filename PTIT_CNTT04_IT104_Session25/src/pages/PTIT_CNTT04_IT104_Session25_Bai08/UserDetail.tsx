import { useLocation, useParams } from "react-router-dom";

export default function DetailUser() {
  const { id } = useParams(); 
  const location = useLocation(); 
  const user = location.state; 

  

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Chi tiết user</h2>
      {user ? (
        <>
          <p>ID: {id}</p>
          <p>Tên: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Địa chỉ: {user.address}</p>
        </>
      ) : (
        <p>Không tìm thấy dữ liệu user</p>
      )}
    </div>
  );
}
