import React , {useState} from 'react'

export default function Ex5() {
    const [quote,setQuote] = useState("");
    const handleClick = () => {
        const resl = Math.floor(Math.random() * 6) + 1;
        switch (resl) {
            case 1:
                setQuote("Học, học nữa, học mãi.")
                break;
            case 2:
                setQuote("Thất bại là mẹ thành công.")
                break;
            case 3:
                setQuote("Không gì là không thể.")
                break;
            case 4:
                setQuote("Kiến tha lâu đầy tổ.")
                break;
            case 5:
                setQuote("Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.")
                break;
            case 6:
                setQuote("Không gì là không thể.")
                break;
            default: 
                return quote;
        }
    }

  return (
    <div>
      <p>Cau noi truyen cam hung hom nay</p>
      <p>{quote}</p>
      <button onClick={handleClick}>Lay cau noi moi</button>
    </div>
  )
}
