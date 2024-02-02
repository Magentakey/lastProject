import * as React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { projectAPI } from "./ProjectAPI"
import Project from "./Project"
import CardList from "./CardList"
import { json } from "react-router-dom"
import "./styleCard.css"

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

  // const [data, setData] = React.useState(null)
  // const [data2, setdata2] = React.useState([])
  // // const [style, setStyle] = React.useState("light");
  // // const [hidden, setHidden] = React.useState({});

  // const fetchData2 = () => {
  //   fetch("https://dummyjson.com/recipes/1")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data2 => {
  //       setdata2(data2)
  //     })
  // }


  // useEffect(() => {
  //   fetch("https://dummyjson.com/recipes")
  //     .then(response => response.json())
  //     .then(json => setData(json))
  // }, [])

  // if (!data) {
  //   return <p>Loading...</p>
  // }

  // const [style, setStyle] = useState("light");

  // const changeStyle = () => {
  //   console.log("you just clicked");
  //   if (style !== "light") setStyle("light");
  //   else setStyle("dark");
  // };

  // const toggleHide = index => {
  //   setHidden({ ...hidden, [index]: !hidden[index] });
  // };

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
      <CardList onSave={saveProject} projects={projects} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
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