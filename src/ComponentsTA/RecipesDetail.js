import React, { useEffect, useState } from "react";
import "./style/styleDetail.css"
import { useNavigate } from "react-router-dom";
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

let arrIngredients = [""]
let arrInstructions = [""]
let arrTags = [""]
let arrMealType = ["Dinner"]
const RecipesDetail = ({ project }) => {
    const [dataProject, setDataProject] = useState(project)
    const [onEdit, setOnEdit] = useState(null)
    const navigate = useNavigate()

    const userName = localStorage.getItem("userName")
    const userId = localStorage.getItem("userId")
    const userRole = localStorage.getItem("userRole")

    arrIngredients = dataProject.ingredients
    arrInstructions = dataProject.instructions
    arrTags = dataProject.tags
    const [name, setName] = useState(dataProject.name)
    const [ingredients, setIngredients] = useState(dataProject.ingredients)
    const [instructions, setInstructions] = useState(dataProject.instructions)
    const [prepTimeMinutes, setPrepTimeMinutes] = useState(dataProject.prepTimeMinutes)
    const [cookTimeMinutes, setCookTimeMinutes] = useState(dataProject.cookTimeMinutes)
    const [difficulty, setDifficulty] = useState(dataProject.difficulty)
    const [cuisine, setCuisine] = useState(dataProject.cuisine)
    const [caloriesPerServing, setCaloriesPerServing] = useState(dataProject.caloriesPerServing)
    const [tags, setTags] = useState(dataProject.tags)
    const [image, setImage] = useState(dataProject.image)
    const [rating, setRating] = useState(dataProject.rating)
    const [mealType, setMealType] = useState(dataProject.mealType)
    const [postId, setPostId] = useState(dataProject.id);

    const [listIngredients, setListIngredients] = useState(dataProject.ingredients.length)
    const [listInstructions, setListInstructions] = useState(dataProject.instructions.length)
    const [listTags, setListTags] = useState(dataProject.tags.length)

    const handleDelete = () => {
        fetch("http://localhost:4000/recipes/" + project.id, {
            method: "delete"
        })
        navigate("/")
    }

    const [commentInput, setCommentInput] = useState("")
    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/comment")
            .then(res => res.json())
            .then(res => {
                const arrCom = []
                for (let i = 0; i < res.length; i++) {
                    if (res[i].idRecipe === dataProject.id) {
                        arrCom.push(res[i])
                    }
                }
                return (
                    setComment(arrCom)
                )
            })
    }, [])

    const handleEdit = () => {
        setOnEdit(project)
    }
    const onCancel = () => {
        setOnEdit(null)
    }

    const handleChange = (e) => {
        const { value, type, name, title, checked } = e.target

        let upValue = type === "checkbox" ? checked : value
        if (type === "number") {
            upValue = Number(upValue)
        }

        if (name === "name") { setName(upValue) }
        else if (name === "ingredients") {
            arrIngredients[title - 1] = upValue
            setIngredients(arrIngredients)
        }
        else if (name === "instructions") {
            arrInstructions[title - 1] = upValue
            setInstructions(arrInstructions)
        }
        else if (name === "prepTimeMinutes") { setPrepTimeMinutes(upValue) }
        else if (name === "cookTimeMinutes") { setCookTimeMinutes(upValue) }
        else if (name === "difficulty") { setDifficulty(upValue) }
        else if (name === "cuisine") { setCuisine(upValue) }
        else if (name === "caloriesPerServing") { setCaloriesPerServing(upValue) }
        else if (name === "tags") {
            arrTags[title - 1] = upValue
            setTags(arrTags)
        }
        else if (name === "image") { setImage(upValue) }
        else if (name === "rating") { setRating(upValue) }
        else if (name === "mealType") {
            if (upValue === true) {
                arrMealType.push(title)
            } else {
                let position = arrMealType.indexOf(title)
                arrMealType.splice(position, 1)
            }
            setMealType(arrMealType)
        }
    }

    const moreIngredients = () => {
        setListIngredients(listIngredients => listIngredients + 1)
        arrIngredients.push("")
    }
    const lessIngredients = () => {
        if (listIngredients !== 1) {
            setListIngredients(listIngredients => listIngredients - 1)
            arrIngredients.pop()
        }
    }
    const showListIngredients = () => {
        let arrList = []
        for (let i = 1; i <= listIngredients; i++) {
            arrList.push(
                <li key={i}>
                    <input type="text" defaultValue={ingredients[i - 1]} required name={`ingredients`} title={`${i}`} placeholder="Enter ingredients" onChange={handleChange} />
                </li>
            )
        }
        return arrList
    }

    const moreInstructions = () => {
        setListInstructions(listInstructions => listInstructions + 1)
        arrInstructions.push("")
    }
    const lessInstructions = () => {
        if (listInstructions !== 1) {
            setListInstructions(listInstructions => listInstructions - 1)
            arrInstructions.pop()
        }
    }
    const showListInstructions = () => {
        let arrList = []
        for (let i = 1; i <= listInstructions; i++) {
            arrList.push(
                <li key={i}>
                    <input type="text" defaultValue={instructions[i - 1]} required name={`instructions`} title={`${i}`} placeholder="Enter instructions" onChange={handleChange} />
                </li>
            )
        }
        return arrList
    }
    const moreTags = () => {
        setListTags(listTags => listTags + 1)
        arrTags.push("")
    }
    const lessTags = () => {
        if (listTags !== 1) {
            setListTags(listTags => listTags - 1)
            arrTags.pop()
        }
    }
    const showListTags = () => {
        let arrList = []
        for (let i = 1; i <= listTags; i++) {
            arrList.push(
                <li key={i}>
                    <input type="text" defaultValue={tags[i - 1]} required name={`tags`} title={`${i}`} placeholder="Enter Tags" onChange={handleChange} />
                </li>
            )
        }
        return arrList
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, difficulty, cuisine, caloriesPerServing, tags, image, rating, mealType, userName: userName, userId: userId
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:4000/recipes/' + dataProject.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                setPostId(data.id)
                window.location.reload()
            });
    }

    const handleChangeCommentInput = (e) => {
        const { value } = e.target
        setCommentInput(value)
    }
    const handleComment = () => {
        const idTerbaru = Math.max(...comment.map(e => e.terbaru))
        const change = {
            name: userName,
            comment: commentInput,
            idRecipe: dataProject.id,
            terbaru: (idTerbaru + 1)
        }

        fetch("http://localhost:4000/comment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(change)
        })
        setComment(e => [...e, change])
    }
    return (
        <>
            {!onEdit && (
                <>
                    <div className="conDetail">
                        <img src={dataProject.image} alt="img" />
                        <div>
                            <h2>{`${dataProject.name}(${dataProject.id})`}</h2>
                            <h3>upload by : {`${dataProject.userName}(${dataProject.userId})`}</h3>
                            <p>Difficulty : {dataProject.difficulty}</p>
                            <p>Rating : ⭐{dataProject.rating}</p>
                            <p>Calories per serving : {dataProject.caloriesPerServing} cal</p>
                            <p>Cuisine : {dataProject.cuisine}</p>
                            <p>Preparation : ⏰{dataProject.prepTimeMinutes} mins</p>
                            <p>Cook Time : ⏰{dataProject.cookTimeMinutes} mins</p>
                            <p>Tags : {dataProject.tags.join(", ")}</p>
                            <p>Meal Type : {dataProject.mealType.join(", ")}</p>
                            <div>
                                {userName && userRole === "admin" && (
                                    <>
                                        <button className="btnEdit" onClick={handleEdit}>Edit</button>
                                        <button className="btnDelete" onClick={handleDelete}>Delete</button>
                                    </>
                                )}
                                {console.log(userName)}
                                {console.log(dataProject.userName)}
                                {console.log(userRole)}
                                {userName === dataProject.userName && userRole === "user" && (
                                    <>
                                        <button className="btnEdit" onClick={handleEdit}>Edit</button>
                                        <button className="btnDelete" onClick={handleDelete}>Delete</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="ingAndInst">
                        <div className="ingre">
                            <h2>Ingredients : </h2>
                            <ol>
                                {dataProject.ingredients.map((item, i) => {
                                    return <li key={i}>{item}</li>
                                })}
                            </ol>
                        </div>
                        <div className="inst">
                            <h2>Instructions : </h2>
                            <ol>
                                {dataProject.instructions.map((item, i) => {
                                    return <li key={i}>{item}</li>
                                })}
                            </ol>
                        </div>
                    </div>
                    <div>
                        {userName && (
                            <>
                                <h1>Comments</h1>
                                <div className="commenInputCon">
                                    <div className="input-group">
                                        <input name="commentInput" required type="text" className="form-control" placeholder="Comment..." onChange={handleChangeCommentInput} />
                                        <button className="btn btn-outline-secondary" type="button" onClick={handleComment}>Comment!</button>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="commentCon">
                            {comment && comment.length === 0 && (
                                <>
                                    <div class="alert alert-info" role="alert">
                                        Comment Masih Kosong
                                    </div>
                                </>
                            )}
                            {comment && comment.length !== 0 && (
                                <>
                                    <div class="alert alert-info" role="alert">
                                        {`Jumlah comment ${comment.length}`}
                                    </div>
                                    {comment.sort((a, b) => b.terbaru - a.terbaru).map((item, index) => {
                                        return (
                                            <div key={index} className="innerComment" style={{ backgroundColor: `${item.name === userName ? "lightblue" : "rgba(128, 128, 128, 0.3)"}` }}>
                                                {console.log("userName run")}
                                                {console.log(userName)}
                                                <p className="name">{item.name}</p>
                                                <p>{item.comment}</p>
                                            </div>
                                        )
                                    })
                                    }
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
            {onEdit && (
                <>
                    <form action="" className="formUpload" onSubmit={handleSubmit}>
                        <button style={{ width: "15%", backgroundColor: "magenta", color: "white" }} onClick={onCancel}>cancel</button>
                        <h1>Edit your Reciep Here</h1>
                        <p>post id : {dataProject.id}</p>
                        <label htmlFor="name">Recipes Name</label>
                        <input type="text" required name="name" value={name} placeholder="Enter Name" onChange={handleChange} />

                        <label htmlFor="ingredients">Recipes Ingredients</label>
                        <ol>
                            {showListIngredients()}
                        </ol>
                        <button type="button" onClick={moreIngredients}>more ingredients?</button>
                        <button type="button" onClick={lessIngredients}>less ingredients?</button>

                        <label htmlFor="instructions">Recipes Instructions</label>
                        <ol>
                            {showListInstructions()}
                        </ol>
                        <button type="button" onClick={moreInstructions}>more Instructions?</button>
                        <button type="button" onClick={lessInstructions}>less Instructions?</button>

                        <label htmlFor="prepTimeMinutes">Recipes Preparation</label>
                        <input type="number" value={prepTimeMinutes} required name="prepTimeMinutes" placeholder="Enter prepTimeMinutes" onChange={handleChange} />

                        <label htmlFor="cookTimeMinutes">Recipes cookTimeMinutes</label>
                        <input type="number" value={cookTimeMinutes} required name="cookTimeMinutes" placeholder="Enter cookTimeMinutes" onChange={handleChange} />

                        <label htmlFor="difficulty">Recipes Difficulty</label>
                        <select name="difficulty" onChange={handleChange} value={difficulty}>
                            <option value="undefined">pick difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        {/* <input type="text" name="difficulty" placeholder="Enter difficulty" onChange={handleChange} /> */}
                        <label htmlFor="cuisine">Recipes Cuisine</label>
                        <input type="text" value={cuisine} required name="cuisine" placeholder="Enter cuisine" onChange={handleChange} />

                        <label htmlFor="caloriesPerServing">Recipes CaloriesPerServing</label>
                        <input type="number" value={caloriesPerServing} required name="caloriesPerServing" placeholder="Enter caloriesPerServing" onChange={handleChange} />

                        <label htmlFor="tags">Recipes Tags</label>
                        <ol>
                            {showListTags()}
                        </ol>
                        <button type="button" onClick={moreTags}>more Tags?</button>
                        <button type="button" onClick={lessTags}>less Tags?</button>

                        <label htmlFor="image">Recipes image</label>
                        <input type="text" value={image} required name="image" placeholder="Enter image(url)" onChange={handleChange} />

                        <label htmlFor="rating">Recipes rating</label>
                        <input type="number" value={rating} required max="5" min="0" name="rating" placeholder="Enter rating" onChange={handleChange} />

                        <label htmlFor="mealType">Recipes mealType</label>
                        <ul>
                            <li>
                                <span>Dinner : </span>
                                <input type="checkbox" defaultChecked={dataProject.mealType.includes("Dinner") ? true : false} name="mealType" title="Dinner" onChange={handleChange} />
                            </li>
                            <li>
                                <span>Lunch : </span>
                                {console.log("dataProject run")}
                                {console.log(dataProject)}
                                {console.log(dataProject.mealType)}
                                {console.log(dataProject.rating)}
                                <input type="checkbox" defaultChecked={dataProject.mealType.includes("Lunch") ? true : false} name="mealType" title="Lunch" onChange={handleChange} />
                            </li>
                            <li>
                                <span>Snack : </span>
                                <input type="checkbox" defaultChecked={dataProject.mealType.includes("Snack") ? true : false} name="mealType" title="Snack" onChange={handleChange} />
                            </li>
                            <li>
                                <span>Appetizer : </span>
                                <input type="checkbox" defaultChecked={dataProject.mealType.includes("Appetizer") ? true : false} name="mealType" title="Appetizer" onChange={handleChange} />
                            </li>
                            <li>
                                <span>Beverage : </span>
                                <input type="checkbox" defaultChecked={dataProject.mealType.includes("Beverage") ? true : false} name="mealType" title="Beverage" onChange={handleChange} />
                            </li>
                            <li>
                                <span>Dessert : </span>
                                <input type="checkbox" defaultChecked={dataProject.mealType.includes("Dessert") ? true : false} name="mealType" title="Dessert" onChange={handleChange} />
                            </li>
                            <li>
                                <span>Breakfast : </span>
                                <input type="checkbox" defaultChecked={dataProject.mealType.includes("Breakfast") ? true : false} name="mealType" title="Breakfast" onChange={handleChange} />
                            </li>
                        </ul>
                        <button className="primary bordered medium">
                            save
                        </button>
                    </form>
                </>
            )}
        </>
    )
}
export default RecipesDetail