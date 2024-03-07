import React, { useState } from "react";
import CardRecipes from "./CardRecipes";
import CardForm from "./CardForm";

const CardList = ({ projects }) => {

    const sort = projects.sort((a, b) => ('' + a.name).localeCompare(b.name))
    return (
        <>
            <div className="row">
                <div className="containerC" id="recipes">

                    <div className="containerAPI">
                        {sort.map((project) => {
                            return (
                                <div key={project.id} className="cols-sm">
                                    {project && (
                                        <CardRecipes project={project} />
                                    )
                                    }
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