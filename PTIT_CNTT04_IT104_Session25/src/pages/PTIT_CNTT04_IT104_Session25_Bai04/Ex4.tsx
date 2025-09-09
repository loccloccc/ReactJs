import { useNavigate } from "react-router-dom"

export default function Ex4() {
    const navigate = useNavigate();
    const handleRegiter = () => {
        navigate("/register")
    }
  return (
    <div>
      <p>Bai 4</p>
      <button onClick={handleRegiter}>register</button>
    </div>
  )
}
