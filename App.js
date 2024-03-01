import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Navbar from "./ComponentsTA/Main/Navbar"
import Main from "./ComponentsTA/Main/Main"
import Footer from "./ComponentsTA/Main/Footer"
import AboutMe from "./ComponentsTA/AboutMe"
import MyComponents from "./MyComponents"
import RecipesP2 from "./ComponentsTA/RecipesP2"
import Menu from "./ComponentsTA/Menu"
import UploadResep from "./ComponentsTA/UploadResep"
import Register from "./ComponentsTA/Account/Register"
import Login from "./ComponentsTA/Account/Login"
import LogOut from "./ComponentsTA/Account/LogOut"

function App() {
  return (
    <Router>
      {/* <MyComponents /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Main />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="UploadResep" element={<UploadResep />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="/recipes/:id" element={<RecipesP2 />} />
      </Routes>
    </Router>
  )
}
export default App