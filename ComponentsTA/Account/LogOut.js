import { useNavigate } from "react-router-dom"

const LogOut = () => {
  const navigate = useNavigate()
  localStorage.removeItem("userName")
  localStorage.removeItem("userId")

  setTimeout(() => {

    navigate("/Login")
  }, 2000);
  return (
    <>
      <h1>log out success...</h1>
    </>
  )
}
export default LogOut