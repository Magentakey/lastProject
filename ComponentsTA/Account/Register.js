import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/register.css"

const Register = () => {
  const navigate = useNavigate()

  const [dataUser, setDataUser] = useState(null)
  const [loading, setloading] = useState(true)
  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  useEffect(() => {
    const getdataUser = async () => {
      setloading(true)
      await fetch("http://localhost:4000/user", {
        method: "GET",
        headers: { "Content-Type": "application-json" }
      }).then(res => res.json()).then(data => setDataUser(data))
      setloading(false)
    }
    getdataUser()
  }, [])

  const handleChange = (e) => {
    const { value, type, name } = e.target
    console.log(value);
    console.log(type);
    console.log(name);

    if (name === "name") {
      setName(value)
    }
    else if (name === "password") {
      setPassword(value)
    }
    else if (name === "confirmPassword") {
      setConfirmPassword(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const changeData = {
      name, password
    }

    const checkConfirmPassword = confirmPassword
    if (password !== checkConfirmPassword) {
      alert(`confirmPassword salah`)
      return
    }

    let checkName = 0
    for (let i = 0; i < dataUser.length; i++) {
      if (dataUser[i].name === name) { checkName++ }
    }

    if (checkName === 0) {
      let idregis;
      fetch("http://localhost:4000/user", {
        method: "POST",
        headers: { "Content-Type": "application-json" },
        body: JSON.stringify(changeData)
      }).then(res => res.json()).then(data => idregis = data.id)

      localStorage.setItem("userName", changeData.name)
      localStorage.setItem("userId", idregis)

      navigate("/")
    } else {
      alert("user udah ada")
    }
  }

  return (
    <div>
      {loading && (
        <h2>loading ....</h2>
      )}
      {dataUser && (
        <>
        <Link to={"/"}>
          <button className="btnBack">{`< Back`}</button>
        </Link>
        <div className="conRegister">
          <form action="" onSubmit={handleSubmit}>
          <h1>Register</h1>
            <label htmlFor="name">Name : </label>
            <div>
              <span>👤</span>
              <input id="name" required onChange={handleChange} name="name" type="text" placeholder="Name" />
            </div>
            <label htmlFor="password">Password : </label>
            <div>
              <span>🔑</span>
              <input id="password" required onChange={handleChange} name="password" type="password" placeholder="Password" />
            </div>
            <label htmlFor="confirmPassword">Confirm Password : </label>
            <div>
              <span>🔑</span>
              <input id="confirmPassword" required onChange={handleChange} name="confirmPassword" type="password" placeholder="Confirm Password" />
            </div>
            <div>
              <button style={{backgroundColor: "lime"}}>Register</button>
              <Link to="/Login">
                <button style={{backgroundColor: "magenta"}} type="button">Login</button>
              </Link>
            </div>
          </form>
        </div>
        </>
      )}
    </div>
  )
}
export default Register