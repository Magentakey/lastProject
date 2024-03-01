import "../style/stylePromo.css"
import img from "../../assets/land2.jpg"
import { useEffect, useState } from "react"
import { projectAPI } from "../Class/ProjectAPI"


const Promo = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const loadProjects = async () => {
            const data = await projectAPI.getPromo();
            setProjects(data);
        }
        loadProjects()
    }, [])

    return (
        <div className="conPromo">
            {/* {console.log(projects)} */}
            <h1>Promo</h1>
            <div className="conCardPromo">
                {
                    projects.map((project) => {
                        return (
                            <div className="cardPromo" key={project.id}>
                                <img src={project.img} />
                                <p><b>{project.title}</b></p>
                                <p>{project.description}</p>
                                <p><span className="icon-calendar"></span>{project.date}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Promo;