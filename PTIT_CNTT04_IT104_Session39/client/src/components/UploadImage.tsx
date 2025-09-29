import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/slices/productSlice";

export default function UploadImage() {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const saveImage = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "upload_image"); // upload preset
    formData.append("cloud_name", "di8bnnkmd"); // cloud name

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/di8bnnkmd/image/upload",
        formData
      );
      setUrl(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };
  const products = useSelector((state: any) =>{
    console.log(state.product.products);
    return state.product.products
  });
  useEffect(() => {
    dispatch(getAllProduct() as any);
  }, []);

  return (
    <div>
      <h2>Upload ảnh lên Cloudinary</h2>
      <input type="file" onChange={handleChange} />
      <br />
      <button onClick={saveImage}>Lưu ảnh</button>

      {url && (
        <>
          <p>Ảnh sau khi đã lưu:</p>
          <img src={url} alt="uploaded" width={200} />
        </>
      )}

      <h2>Danh sách sản phẩm</h2>
    

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Ảnh</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((value: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>
                  <img src={value.image} alt={value.name} width={100} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
