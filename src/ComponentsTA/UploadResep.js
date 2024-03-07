import "./style/styleUploadResep.css"
import Navbar from "./Main/Navbar"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let arrIngredients = [""]
let arrInstructions = [""]
let arrTags = [""]
let arrMealType = ["Dinner"]
const UploadResep = () => {
  const userName = localStorage.getItem("userName")
  const userId = localStorage.getItem("userId")
  const navigate = useNavigate()

  const [name, setName] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])
  const [prepTimeMinutes, setPrepTimeMinutes] = useState(null)
  const [cookTimeMinutes, setCookTimeMinutes] = useState(null)
  const [difficulty, setDifficulty] = useState(null)
  const [cuisine, setCuisine] = useState(null)
  const [caloriesPerServing, setCaloriesPerServing] = useState(null)
  const [tags, setTags] = useState([])
  const [image, setImage] = useState(null)
  const [rating, setRating] = useState(null)
  const [mealType, setMealType] = useState([])
  const [postId, setPostId] = useState(null);
  const [all, setAll] = useState({
    name: null,
    ingredients: [],
    instructions: [],
    prepTimeMinutes: null,
    cookTimeMinutes: null,
    difficulty: null,
    cuisine: null,
    caloriesPerServing: null,
    tags: [],
    image: null,
    rating: null,
    mealType: [],
    postId: null
  })

  const [listIngredients, setListIngredients] = useState(1)
  const [listInstructions, setListInstructions] = useState(1)
  const [listTags, setListTags] = useState(1)
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

  const handleChange = (event) => {
    const { type, name, value, checked, title } = event.target;

    let updatedValue = type === "checkbox" ? checked : value;

    if (type === "number") {
      updatedValue = Number(updatedValue)
    }

    const change = {
      [name]: updatedValue
    }
    if (name === "name") { setName(updatedValue) }
    else if (name === "ingredients") {
      arrIngredients[title - 1] = updatedValue
      setIngredients(arrIngredients)
    }
    else if (name === "instructions") {
      arrInstructions[title - 1] = updatedValue
      setInstructions(arrInstructions)
    }
    else if (name === "prepTimeMinutes") { setPrepTimeMinutes(updatedValue) }
    else if (name === "cookTimeMinutes") { setCookTimeMinutes(updatedValue) }
    else if (name === "difficulty") { setDifficulty(updatedValue) }
    else if (name === "cuisine") { setCuisine(updatedValue) }
    else if (name === "caloriesPerServing") { setCaloriesPerServing(updatedValue) }
    else if (name === "tags") {
      arrTags[title - 1] = updatedValue
      setTags(arrTags)
    }
    else if (name === "image") { setImage(updatedValue) }
    else if (name === "rating") { setRating(updatedValue) }
    else if (name === "mealType") {
      if (updatedValue === true) {
        arrMealType.push(title)
      } else {
        let position = arrMealType.indexOf(title)
        arrMealType.splice(position, 1)
      }
      setMealType(arrMealType)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, difficulty, cuisine, caloriesPerServing, tags, image, rating, mealType, userName, userId
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:4000/recipes', requestOptions)
    // .then(response => response.json())
    // .then(data => {
    // setPostId(data.id)
    // navigate(`/recipes/${data.id}`)
    // });

    navigate("/")
  }
  return (
    <>
      <Navbar />
      <form action="" className="formUpload" onSubmit={handleSubmit}>
        <h1>Upload your Reciep Here</h1>
        <p>post id : {postId}</p>
        <label htmlFor="name">Recipes Name</label>
        <input type="text" required name="name" placeholder="Enter Name" onChange={handleChange} />

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
        <input type="number" required name="prepTimeMinutes" placeholder="Enter prepTimeMinutes" onChange={handleChange} />

        <label htmlFor="cookTimeMinutes">Recipes cookTimeMinutes</label>
        <input type="number" required name="cookTimeMinutes" placeholder="Enter cookTimeMinutes" onChange={handleChange} />

        <label htmlFor="difficulty">Recipes Difficulty</label>
        <select name="difficulty" onChange={handleChange}>
          <option value="undefined">pick difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        {/* <input type="text" name="difficulty" placeholder="Enter difficulty" onChange={handleChange} /> */}
        <label htmlFor="cuisine">Recipes Cuisine</label>
        <input type="text" required name="cuisine" placeholder="Enter cuisine" onChange={handleChange} />

        <label htmlFor="caloriesPerServing">Recipes CaloriesPerServing</label>
        <input type="number" required name="caloriesPerServing" placeholder="Enter caloriesPerServing" onChange={handleChange} />

        <label htmlFor="tags">Recipes Tags</label>
        <ol>
          {showListTags()}
        </ol>
        <button type="button" onClick={moreTags}>more Tags?</button>
        <button type="button" onClick={lessTags}>less Tags?</button>

        <label htmlFor="image">Recipes image</label>
        <input type="text" required name="image" placeholder="Enter image(url)" onChange={handleChange} />

        <label htmlFor="rating">Recipes rating</label>
        <input type="number" required max="5" min="0" name="rating" placeholder="Enter rating" onChange={handleChange} />

        <label htmlFor="mealType">Recipes mealType</label>
        <ul>
          <li>
            <span>Dinner : </span>
            <input type="checkbox" defaultChecked={true} name="mealType" title="Dinner" onChange={handleChange} />
          </li>
          <li>
            <span>Lunch : </span>
            <input type="checkbox" name="mealType" title="Lunch" onChange={handleChange} />
          </li>
          <li>
            <span>Snack : </span>
            <input type="checkbox" name="mealType" title="Snack" onChange={handleChange} />
          </li>
          <li>
            <span>Appetizer : </span>
            <input type="checkbox" name="mealType" title="Appetizer" onChange={handleChange} />
          </li>
          <li>
            <span>Beverage : </span>
            <input type="checkbox" name="mealType" title="Beverage" onChange={handleChange} />
          </li>
          <li>
            <span>Dessert : </span>
            <input type="checkbox" name="mealType" title="Dessert" onChange={handleChange} />
          </li>
          <li>
            <span>Breakfast : </span>
            <input type="checkbox" name="mealType" title="Breakfast" onChange={handleChange} />
          </li>
        </ul>
        <button className="primary bordered medium">
          save
        </button>
      </form>
    </>
  )
}
export default UploadResep