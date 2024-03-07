import React from "react";
import { Link } from "react-router-dom";

const CardRecipes = (props) => {
    const { project } = props

    return (
        <>
            <div key={project.id}>
                <div className="conImageCard">
                    <img src={project.image} alt="img" />
                </div>
                <div>
                    <p>Rating : ⭐{project.rating}</p>
                    <p>⏰ {project.cookTimeMinutes} mins</p>
                    <Link to={"/recipes/" + project.id}>
                        <h3>{project.name}</h3>
                    </Link>
                    <h4>upload by {project.userName}</h4>
                    <h4>Tags :</h4>
                    <div>
                        {project.tags.map((itemTags, index) => (
                            <p key={index}>{itemTags}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardRecipes