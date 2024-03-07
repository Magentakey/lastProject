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
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Menu = () => {
  const [projects, setProjects] = useState(false);
  const [sortMealType, setSortMealType] = useState("lunch")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const [onSearch, setOnSearch] = useState(false)
  const [search, setSearch] = useState("")
  const [projectSearch, setprojectSearch] = useState([])

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const data = await projectAPI.getMenu(1);
        setProjects(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        }
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  const handleSearch = () => {
    const filteredData = projects.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    setprojectSearch(filteredData)
    setOnSearch(true)
  }

  const handleCancelSearch = () => {
    setprojectSearch([])
    setOnSearch(false)
  }

  const handleChangeSearch = (e) => {
    const { value } = e.target

    setSearch(value)
  }

  const handleSortButton = (e) => {
    const { value } = e.target

    setSortMealType(value)
  }

  return (
    <React.Fragment>
      <Navbar dropdown="true" />
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

      {loading && (
        <div className="center-page">
          <span className="span spinner primary"></span>
          <p>loading...</p>
        </div>
      )}
      {console.log("run")}
      {console.log(projects)}
      {projects && (
        <>
          <div className="searchCon">
            <div className="input-group">
              <button className="btn btn-danger" type="button" onClick={handleCancelSearch}>cancel</button>
              <input name="searchInput" type="text" className="form-control" placeholder="search..." onChange={handleChangeSearch} />
              <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>

          {projectSearch && (
            <>
              {console.log("projectSearch run")}
              {console.log(projectSearch)}
              {console.log(projectSearch.length)}
              {projectSearch.length === 0 && onSearch === false && (
                <>
                  <div class="alert alert-info" role="alert">
                    Silahkan cari nama resep yang diinginkan
                  </div>
                </>
              )}
              {projectSearch.length === 0 && onSearch && (
                <>
                  <div class="alert alert-secondary" role="alert">
                    nama resep tidak tersedia
                  </div>
                </>
              )}
              {projectSearch.length !== 0 && (
                <>
                  <div class="alert alert-primary" role="alert">
                    {`tersedia ${projectSearch.length} resep yang sesuai dengan nama resep yang dicari`}
                  </div>
                </>
              )}

              <CardList projects={projectSearch} />
            </>
          )}


          <div className="sortMealTypeCon">
            <div className="btn-group btnGroupSelfCss" role="group" aria-label="Basic example">
              <button onClick={handleSortButton} value="dinner" type="button" className="btn btn-secondary">Dinner</button>
              <button onClick={handleSortButton} value="lunch" type="button" className="btn btn-secondary">Lunch</button>
              <button onClick={handleSortButton} value="snack" type="button" className="btn btn-secondary">Snack</button>
              <button onClick={handleSortButton} value="appetizer" type="button" className="btn btn-secondary">Appetizer</button>
              <button onClick={handleSortButton} value="beverage" type="button" className="btn btn-secondary">Beverage</button>
              <button onClick={handleSortButton} value="dessert" type="button" className="btn btn-secondary">Dessert</button>
              <button onClick={handleSortButton} value="breakfast" type="button" className="btn btn-secondary">Breakfast</button>
            </div>

            {sortMealType === "dinner" && (
              <div className="containerTypeCard" id="dinner">
                <h1>Dinner</h1>
                <CardList projects={projects.filter((project) =>
                  project.mealType.includes("Dinner"))} />
              </div>
            )}
            {sortMealType === "lunch" && (
              <div className="containerTypeCard" id="lunch">
                <h1>Lunch</h1>
                <CardList projects={projects.filter((project) =>
                  project.mealType.includes("Lunch"))} />
              </div>
            )}
            {sortMealType === "snack" && (
              <div className="containerTypeCard" id="snack">
                <h1>Snack</h1>
                <CardList projects={projects.filter((project) =>
                  project.mealType.includes("Snack"))} />
              </div>
            )}
            {sortMealType === "appetizer" && (
              <div className="containerTypeCard" id="appetizer">
                <h1>Appetizer</h1>
                <CardList projects={projects.filter((project) =>
                  project.mealType.includes("Appetizer"))} />
              </div>
            )}
            {sortMealType === "beverage" && (
              <div className="containerTypeCard" id="beverage">
                <h1>Beverage</h1>
                <CardList projects={projects.filter((project) =>
                  project.mealType.includes("Beverage"))} />
              </div>
            )}
            {sortMealType === "dessert" && (
              <div className="containerTypeCard" id="dessert">
                <h1>Dessert</h1>
                <CardList projects={projects.filter((project) =>
                  project.mealType.includes("Dessert"))} />
              </div>
            )}
            {sortMealType === "breakfast" && (
              <div className="containerTypeCard" id="breakfast">
                <h1>Breakfast</h1>
                <CardList projects={projects.filter((project) =>
                  project.mealType.includes("Breakfast"))} />
              </div>
            )}
          </div>
        </>
      )}

      {/* {loading && (
        <div className="center-page">
          <span className="span spinner primary"></span>
          <p>loading...</p>
        </div>
      )} */}
      <Footer />
    </React.Fragment>
  )
}
export default Menu