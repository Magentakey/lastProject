import * as React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { projectAPI } from "./Class/ProjectAPI"
import Project from "./Class/Project"
import CardList from "./card/CardList"
import { json } from "react-router-dom"
import "./style/styleCard.css"
import { Link } from "react-router-dom"

const RecipesP = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const data = await projectAPI.get(1);
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

  return (
    <React.Fragment>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p><span className="icon-alert inverse"></span>{error}</p>
            </section>
          </div>
        </div>
      )}
      <h1 className="headerAPI"><span>See Our Food Recipes!</span></h1>
      <CardList projects={projects} />

      {!loading && !error && (
        <div className="conBtnMore">
          <Link to={"/menu"}>
            {/* <button className="button default" onClick={handleMoreClick}> */}
            <button className="btnmore">
              More...
            </button>
          </Link>
        </div>
      )}

      {loading && (
        <div className="center-page">
          <span className="span spinner primary"></span>
          <p>loading...</p>
        </div>
      )}
    </React.Fragment>
  )
}
export default RecipesP