import React from "react";

const RecipesDetail = ({ project }) => {
    // console.log(project);
    // const RecipesDetail = ([project]) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card large">
                    <img src={project.image} alt={project.name} className="rounded" />
                    <section className="section dark">
                        <h3 className="strong">
                            <strong>{project.name}</strong>
                        </h3>
                        <div>
                            <p>ingredients : </p>
                            {/* {console.log(project.ingredients)} */}
                            <ol>
                                {project.ingredients.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ol>
                        </div>
                        <div>
                            <p>instructions : </p>
                            {/* {console.log(project.instructions)} */}
                            <ol>
                                {project.instructions.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ol>
                        </div>
                        {/* <p>{project.description}</p> */}
                        {/* <p>{project.budget}</p> */}
                        {/* <p>Signed : {project.contractSignedOn}</p> */}
                        {/* <p>
                            <mark className="active">
                                {" "}
                                {project.isActive ? "active" : "inactive"}
                            </mark>
                        </p> */}
                    </section>
                </div>
            </div>
        </div>
    )
}
export default RecipesDetail