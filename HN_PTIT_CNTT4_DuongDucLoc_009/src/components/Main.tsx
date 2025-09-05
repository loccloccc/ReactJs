import { BookOpen, CirclePlus, List, Pencil, Trash } from "lucide-react";
import React, { useState } from "react";
import { v7 as uuid } from "uuid";

interface Words {
  id: number | string;
  wordsEng: string;
  wordsVie: string;
}
export default function Main() {
  const [arrWords, setArrWords] = useState<Words[]>(() => {
    const listWord = localStorage.getItem("listWords");
    return listWord ? JSON.parse(listWord) : [];
  });
  const [eng, setEng] = useState("");
  const [vie, setVie] = useState("");
  const [edit, setEdit] = useState<number | string | null>(null);
  //const [error , setError ] = useState("");
  const flag = localStorage.getItem("flag");
  const handleChangeEng = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEng(e.target.value);
  };
  const handleChangeVie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVie(e.target.value);
  };
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!eng.trim() || !vie.trim()) {
      alert("Hãy nhập đầy đủ thông tin");
      return;
    }
    if (edit) {
      const update = arrWords.map((i) =>
        i.id === edit ? { ...i, wordsEng: eng, wordsVie: vie } : i
      );
      setArrWords(update);
      localStorage.setItem("listWords", JSON.stringify(update));
      setEdit(null);
      setEng("");
      setVie("");
    } else {
      // check trung
      const checkEng = arrWords.find((i) => i.wordsEng === eng);
      if (checkEng) {
        alert(`Từ ${checkEng.wordsEng} đã có trong danh sách`);
        return;
      }
      const newWords: Words = {
        id: uuid(),
        wordsEng: eng,
        wordsVie: vie,
      };
      const cloneWord = [...arrWords, newWords];
      setArrWords(cloneWord);
      localStorage.setItem("listWords", JSON.stringify(cloneWord));
      setEng("");
      setVie("");
    }
    localStorage.setItem("flag", JSON.stringify(0));
  };
  const handleEdit = (id: number | string | null) => {
    const searchId = arrWords.find((i) => i.id === id);
    if (searchId) {
      setEng(searchId.wordsEng);
      setVie(searchId.wordsVie);
      setEdit(searchId.id);
    }
    localStorage.setItem("flag", JSON.stringify(1));
  };
  const handleDele = (id: number | string | null) => {
    const confirmDele = confirm("Bạn có chắc chắn xóa không");
    if (confirmDele) {
      const idDele = arrWords.filter((i) => i.id !== id);
      setArrWords(idDele);
      localStorage.setItem("listWords", JSON.stringify(idDele));
    }
  };
  return (
    <div className="ml-[25%]">
      <div className="w-[800px] h-[500px]  flex flex-col">
        {/*tren*/}
        <div className="w-[750px] h-[170px]  ml-[24px] mt-[20px] flex flex-col">
          <div className="flex gap-[10px]  h-[110px] bg-green-400  justify-center items-center text-white rounded-t-2xl">
            <BookOpen />
            <h3 className="text-2xl">Quản lí từ vựng</h3>
          </div>
          <div className="flex flex-col mt-[20px] gap-[10px]">
            <div className="flex gap-[10px]">
              <CirclePlus />
              <h3>Thêm từ mới</h3>
            </div>
            <div></div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Từ tiếng Anh"
                className="border h-[30px] w-[330px] pl-[10px] rounded-sm"
                onChange={handleChangeEng}
                value={eng}
              />
              <input
                type="text"
                placeholder="Nghĩa tiếng Việt"
                className="border h-[30px] w-[330px] pl-[10px] rounded-sm"
                onChange={handleChangeVie}
                value={vie}
              />
              {flag == "1" ? (
                <button
                  onClick={handleAdd}
                  className=" w-[70px] h-[30px] text-white rounded-sm bg-green-400"
                >
                  Sửa
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className=" w-[70px] h-[30px] text-white rounded-sm bg-green-400"
                >
                  Thêm
                </button>
              )}
            </div>
          </div>
        </div>
        {/*duoi*/}
        <div className="ml-[24px] mt-[40px] mr-[24px]">
          <div>
            <h3 className="flex gap-[10px] text-[24px] items-center text-green-600">
              <List />
              <h2>Danh sách từ vựng</h2>
            </h3>
          </div>
          <div>
            <table className="w-[100%] text-left ">
              <thead>
                <tr className="bg-gray-100  h-[40px]">
                  <th className="pl-[5px]">Từ tiếng Anh</th>
                  <th>Từ tiếng Việt</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody className="">
                {arrWords.map((v, i) => (
                  <tr
                    key={i}
                    className="h-[30px] border-t border-b border-gray-400 h-[40px] "
                  >
                    <td className="pl-[5px]">{v.wordsEng}</td>
                    <td>{v.wordsVie}</td>
                    <td>
                      <div className="flex gap-[20px]">
                        <button
                          onClick={() => handleEdit(v.id)}
                          className="w-[70px] h-[25px] bg-orange-500 text-white rounded-sm flex gap-[5px] items-center"
                        >
                          <Pencil size={18} />
                          Sửa
                        </button>
                        <button
                          onClick={() => handleDele(v.id)}
                          className="w-[70px] h-[25px] bg-red-500 text-white rounded-sm flex gap-[5px] items-center"
                        >
                          <Trash size={18} /> Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
