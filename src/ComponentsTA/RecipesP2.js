import React, { useEffect, useState } from "react";
import { projectAPI } from "./Class/ProjectAPI";
import RecipesDetail from "./RecipesDetail";
import { useParams } from "react-router-dom";
import "./style/styleDetail.css"
import Navbar from "./Main/Navbar";

const RecipesP2 = (props) => {
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState(null)
    const [error, setError] = useState(null)
    const params = useParams();
    const id = params.id

    useEffect(() => {
        setLoading(true)
        projectAPI.find(id).then(data => {
            setProject(data)
            setLoading(false)
        }).catch(e => {
            setError(e)
            setLoading(false)
        })
    }, [id]);

    return (
        <div className="styleDetail">
            <Navbar />
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>loading...</p>
                </div>
            )}

            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse"></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            {project && <RecipesDetail project={project} />}
            {/* {console.log(project)} */}
        </div>
    )
}
export default RecipesP2