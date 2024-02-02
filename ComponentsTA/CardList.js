import React, { useState } from "react";
// import DAFTAR_PROJECT from "./DaftarProject";
// import ProjectCard from "./CardRecipes";
import CardRecipes from "./CardRecipes";
import CardForm from "./CardForm";
// import ProjectForm from "./ProjectForm";

const CardList = ({ onSave, projects }) => {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project) => {
        setProjectBeingEdited(project);
    }

    const cancelEditing = () => {
        setProjectBeingEdited({})
    }
    return (
        <>
            <div className="row">
                <div className="containerC" id="recipes">
                    <h1 className="headerAPI"><span>See Our Food Recipes!</span></h1>
                    <div className="containerAPI">
                        {projects.map((project) => {
                            return (
                                <div key={project.id} className="cols-sm">
                                    {project === projectBeingEdited ? (
                                        // ""
                                        <CardForm onSave={onSave} onCancel={cancelEditing} project={project} />
                                    ) : (
                                        <CardRecipes project={project} onEdit={handleEdit} />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardList;