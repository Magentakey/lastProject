import React, { useState } from "react";
import Project from "../Class/Project";

const CardForm = ({ project: intialProject, onSave, onCancel }) => {
    const [project, setProject] = useState(intialProject);
    const [errors, setErrors] = useState({
        name: "",
        // description: "",
        // budget: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(isValid);
        // console.log(!isValid);
        if (!isValid()) return
        onSave(project)
    }

    const handleChange = (event) => {
        const { type, name, value, checked } = event.target;

        let updatedValue = type === "checkbox" ? checked : value;

        if (type === "number") {
            updatedValue = Number(updatedValue)
        }

        const change = {
            [name]: updatedValue
        }

        let updatedProject;

        setProject((p) => {
            updatedProject = new Project({ ...p, ...change });
            return updatedProject
        })

        setErrors(() => validate(updatedProject))
    }

    const validate = (project) => {
        let errors = { name: ""/* , description: "", budget: ""  */ };

        if (project.name.length === 0) {
            errors.name = "Name is required";
        }

        if (project.name.length > 0 && project.name.length < 3) {
            errors.name = "Name need to be at least 3 characters";
        }

        // if (project.description.length === 0) {
        //     errors.description = "Description is requred";
        // }

        // if (project.budget === 0) {
        //     errors.budget = "Budget must be more than Rp 0.";
        // }
        return errors
    }

    const isValid = () => {
        return (
            errors.name.length === 0 /* &&
            errors.description.length === 0 &&
            errors.budget.length === 0 */
        )
    }

    return (
        <form action="" className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Recipes Name</label>
            <input type="text" name="name" placeholder="Enter Name" value={project.name} onChange={handleChange} />
            {/* <label htmlFor="description">Project Deskription</label>
            <textarea name="description" placeholder="Enter Deskription" cols="30" rows="10" value={project.description} onChange={handleChange}></textarea> */}
            {/* <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="Enter Budget" value={project.budget} onChange={handleChange} /> */}
            {/* <label htmlFor="isActive">Active ?</label>
            <input type="checkbox" name="isActive" value={project.isActive} onChange={handleChange} /> */}
            <div className="input-group">
                <button className="primary bordered medium">
                    save
                </button>
                <span />
                <button type="button" className="danger bordered medium" onClick={onCancel}>
                    cancel
                </button>
            </div>
        </form>
    )
}
export default CardForm