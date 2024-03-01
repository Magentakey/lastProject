import * as React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { projectAPI } from "./Class/ProjectAPI"
import Project from "./Class/Project"
import CardList from "./card/CardList"
import { json } from "react-router-dom"
import "./style/styleCardMenu.css"
import { Link } from "react-router-dom"
import imgMenu from "../assets/mainMenu2.jpg"
import Footer from "./Main/Footer"
import Navbar from "./Main/Navbar"

const Menu = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [currentPage, setCurrentPage] = useState(1)

  const handleMoreClick = () => {
    setCurrentPage(currentPage => currentPage + 1)
  }

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const data = await projectAPI.getMenu(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data])
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        }
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [currentPage])

  const saveProject = (project) => {
    projectAPI.put(project).then(updatedProject => {
      let updatedProjects = projects.map(p => {
        return p.id == project.id ? new Project(updatedProject) : p
      })
      setProjects(updatedProjects)
    })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e.message)
        }
      })
  }

  return (
    <React.Fragment>
      <Navbar dropdown="true"/>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p><span className="icon-alert inverse"></span>{error}</p>
            </section>
          </div>
        </div>
      )}
      <div className="mainMenu" id="main">
        <img src={imgMenu} />
        <div>
          <Link to={"/"}>
            <button className="btnBackHome">
              {"< Home"}
            </button>
          </Link>
          <h1>WELCOME! aspiring chefs</h1>
          <p>You've come to the right place</p>
          <p>we have a lot about food recipes here</p>
        </div>
      </div>
      <div className="containerTypeCard" id="dinner">
        <h1>Dinner</h1>
        <CardList onSave={saveProject} projects={projects.filter((project) =>
          project.mealType.includes("Dinner"))} />
      </div>
      <div className="containerTypeCard" id="lunch">
        <h1>Lunch</h1>
        <CardList onSave={saveProject} projects={projects.filter((project) =>
          project.mealType.includes("Lunch"))} />
      </div>
      <div className="containerTypeCard" id="snack">
        <h1>Snack</h1>
        <CardList onSave={saveProject} projects={projects.filter((project) =>
          project.mealType.includes("Snack"))} />
      </div>
      <div className="containerTypeCard" id="appetizer">
        <h1>Appetizer</h1>
        <CardList onSave={saveProject} projects={projects.filter((project) =>
          project.mealType.includes("Appetizer"))} />
      </div>
      <div className="containerTypeCard" id="beverage">
        <h1>Beverage</h1>
        <CardList onSave={saveProject} projects={projects.filter((project) =>
          project.mealType.includes("Beverage"))} />
      </div>
      <div className="containerTypeCard" id="dessert">
        <h1>Dessert</h1>
        <CardList onSave={saveProject} projects={projects.filter((project) =>
          project.mealType.includes("Dessert"))} />
      </div>
      <div className="containerTypeCard" id="breakfast">
        <h1>Breakfast</h1>
        <CardList onSave={saveProject} projects={projects.filter((project) =>
          project.mealType.includes("Breakfast"))} />
      </div>

      {loading && (
        <div className="center-page">
          <span className="span spinner primary"></span>
          <p>loading...</p>
        </div>
      )}
      <Footer />
    </React.Fragment>
  )
}
export default Menu