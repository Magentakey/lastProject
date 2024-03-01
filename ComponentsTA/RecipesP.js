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
  const [currentPage, setCurrentPage] = useState(1)

  const handleMoreClick = () => {
    setCurrentPage(currentPage => currentPage + 1)
  }

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
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
    // <>
    //   {console.log(data.recipes)}
    // </>
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
      <CardList onSave={saveProject} projects={projects} />

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
      {/* 
      <div className="containerC" id="recipes">
        <h1 className="headerAPI"><span>See Our Food Recipes!</span></h1>
        <div className="containerAPI">
          {data.recipes.map((item) => (
            <div key={item.id}>
              <img src={item.image} />
              <div>
                <p>Rating : {item.rating}</p>
                <p>⏰ {item.cookTimeMinutes} mins</p>
                <h3>{item.name}</h3>
                <h4>Tags :</h4>
                <div>
                  {item.tags.map(itemTags => (
                    <p>{itemTags}</p>
                  ))}
                </div>
              </div>
              <button className="buttonCard" onClick={fetchData2}>Fetch Data</button>
              {data2.length >= 0 && (
                <p>{data2.name}</p>
              )}
            </div>
          ))}
        </div>
      </div> */}
    </React.Fragment>
  )
}
export default RecipesP