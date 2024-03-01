import React, { useEffect, useState } from "react";
import "./style/styleDetail.css"
import { useNavigate } from "react-router-dom";


let arrIngredients = [""]
let arrInstructions = [""]
let arrTags = [""]
let arrMealType = ["Dinner"]
const RecipesDetail = ({ project }) => {
    const [dataProject, setDataProject] = useState(project)
    const [onEdit, setOnEdit] = useState(null)
    const navigate = useNavigate()


    const [name, setName] = useState(dataProject.name)
    // const [name, setName] = useState(dataProject.nama)
    const [ingredients, setIngredients] = useState(dataProject.ingredients)
    // arrIngredients.push(dataProject.ingredients)
    // const [instructions, setInstructions] = useState(dataProject.instructions)
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

    const [listIngredients, setListIngredients] = useState(1)
    const [listInstructions, setListInstructions] = useState(1)
    const [listTags, setListTags] = useState(1)

    const handleDelete = () => {
        fetch("http://localhost:4000/recipes/" + project.id, {
            method: "delete"
        })
            .then(res => res.json())
        navigate("/")
    }

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

        console.log(value);
        console.log(type);
        console.log(name);
        console.log(title);
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
        console.log(arrIngredients);
    }
    const lessIngredients = () => {
        if (listIngredients !== 1) {
            setListIngredients(listIngredients => listIngredients - 1)
            arrIngredients.pop()
            console.log(arrIngredients);
        }
    }
    const showListIngredients = () => {
        let arrList = []
        for (let i = 1; i <= listIngredients; i++) {
            arrList.push(
                <li key={i}>
                    <input type="text" required name={`ingredients`} title={`${i}`} placeholder="Enter ingredients" onChange={handleChange} />
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
              <input type="text" required name={`instructions`} title={`${i}`} placeholder="Enter instructions" onChange={handleChange} />
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
              <input type="text" required name={`tags`} title={`${i}`} placeholder="Enter Tags" onChange={handleChange} />
            </li>
          )
        }
        return arrList
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, difficulty, cuisine, caloriesPerServing, tags, image, rating, mealType
        }
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          // body: JSON.stringify({ title: 'React POST Request Example' })
          body: JSON.stringify(data)
        };
        fetch('http://localhost:4000/recipes/' + dataProject.id , requestOptions)
          .then(response => response.json())
          .then(data => setPostId(data.id));
    
        navigate("/")
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
                                <button className="btnEdit" onClick={handleEdit}>Edit</button>
                                <button className="btnDelete" onClick={handleDelete}>Delete</button>
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