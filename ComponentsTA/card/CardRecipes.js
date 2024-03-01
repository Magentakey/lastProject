import React from "react";
import { Link, NavLink } from "react-router-dom";

const FormatDescription = (description) => {
    return description.substring(0, 60) + "..."
}

const CardRecipes = (props) => {
    const { project, onEdit } = props
    // console.log(project);
    // console.log(project.id);
    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited);
    }


    return (
        <>
            {/* <div className="containerC" id="recipes"> */}
            {/* <h1 className="headerAPI"><span>See Our Food Recipes!</span></h1> */}
            {/* <div className="containerAPI"> */}
            {/* {data.recipes.map((item) => ( */}
            <div key={project.id}>
                <div className="conImageCard">
                    <img src={project.image} />
                </div>
                <div>
                    <p>Rating : ⭐{project.rating}</p>
                    <p>⏰ {project.cookTimeMinutes} mins</p>
                    <NavLink to={"/recipes/" + project.id}>
                        <h3>{project.name}</h3>
                    </NavLink>
                    <h4>upload by {project.userName}</h4>
                    <h4>Tags :</h4>
                    <div>
                        {project.tags.map((itemTags, index) => (
                            <p key={index}>{itemTags}</p>
                        ))}
                    </div>
                </div>
                {/* <button className="borered" onClick={() => handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button> */}
                {/* <button className="buttonCard" onClick={fetchData2}>Fetch Data</button>
                {data2.length >= 0 && (
                    <p>{data2.name}</p>
                )} */}
            </div>
            {/* ))} */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="card">
                <img src={project.imageUrl} alt={project.name} />
                <section className="section dark">
                    <Link to={"/projects/" + project.id}>
                        <h5 className="strong">
                            <strong>{project.name}</strong>
                        </h5>
                        <p>{FormatDescription(project.description)}</p>
                        <p>Budget : {project.budget.toLocaleString()}</p>
                    </Link>
                    <button className="borered" onClick={() => handleEditClick(project)}>
                        <span className="icon-edit"></span>
                        Edit
                    </button>
                </section>
            </div> */}
        </>
    )
}
export default CardRecipes