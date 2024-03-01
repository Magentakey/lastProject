import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/login.css"

const Login = () => {
  const navigate = useNavigate()
  const [dataUser, setDataUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)

  useEffect(() => {
    const getDataUser = async () => {
      setLoading(true)
      await fetch("http://localhost:4000/user", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }).then(res => res.json()).then(data => setDataUser(data))
      setLoading(false)
    }
    getDataUser()

  }, [])


  const handleChange = (e) => {
    const { value, name, type } = e.target

    console.log(value);
    console.log(name);
    console.log(type);

    if (name === "name") {
      setName(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let checkDataLogin = 0
    for (let i = 0; i < dataUser.length; i++) {
      console.log(dataUser[i].name);
      console.log(dataUser[i].password);
      console.log(name);
      console.log(password);
      if (dataUser[i].name === name && dataUser[i].password === password) {
        localStorage.setItem("userName", name)
        localStorage.setItem("userId", dataUser[i].id)
        checkDataLogin++
        break
      }
    }

    if (checkDataLogin === 0) {
      alert("login gagal")
    } else {
      alert("login success")
      setTimeout(() => {
        navigate("/")
      }, 2000);
    }
  }

  return (
    <>
      {loading && (
        <h1>loading...</h1>
      )}
      {dataUser && (
        <>
        <Link to={"/"}>
        <button className="btnBack">{`< Back`}</button>
        </Link>
        <div className="conLogin">
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="name">Name : </label>
            <div>
              <span>👤</span>
              <input id="name" onChange={handleChange} required name="name" type="text" placeholder="name" />
            </div>
            <label htmlFor="password">Password : </label>
            <div>
              <span>🔑</span>
              <input id="password" onChange={handleChange} required name="password" type="password" placeholder="password" />
            </div>
            <div>
              <button style={{backgroundColor: "lime"}}>Login</button>
              <Link to="/Register">
                <button style={{backgroundColor: "magenta"}} type="button">Register</button>
              </Link>
            </div>
          </form>
        </div>
        </>
      )}
    </>
  )
}
export default Login