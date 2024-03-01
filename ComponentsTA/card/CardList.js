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