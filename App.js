import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Navbar from "./ComponentsTA/Navbar"
import Main from "./ComponentsTA/Main"
import Footer from "./ComponentsTA/Footer"
import Contact from "./ComponentsTA/Contact"
import AboutMe from "./ComponentsTA/AboutMe"
import MyComponents from "./MyComponents"
import RecipesP2 from "./ComponentsTA/RecipesP2"

function App() {
  return (
    <Router>
      {/* <MyComponents /> */}
      <Navbar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/recipes/:id" element={<RecipesP2 />} />
      </Routes>
    </Router>
  )
}
export default App