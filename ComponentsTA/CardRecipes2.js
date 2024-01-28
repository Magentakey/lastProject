import * as React from "react"
import { useEffect } from "react"
import { json } from "react-router-dom"
import "./styleCard.css"

const CardRecipes = () => {
  const [data, setData] = React.useState(null)
  // const [style, setStyle] = React.useState("light");
  // const [hidden, setHidden] = React.useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  // const [style, setStyle] = useState("light");

  // const changeStyle = () => {
  //   console.log("you just clicked");
  //   if (style !== "light") setStyle("light");
  //   else setStyle("dark");
  // };

  // const toggleHide = index => {
  //   setHidden({ ...hidden, [index]: !hidden[index] });
  // };

  return (
    // <>
    //   {console.log(data.recipes)}
    // </>
    <div className="containerC" id="recipes">
      <h1 className="headerAPI"><span>See Our Food Recipes!</span></h1>
      <div className="containerAPI">
        {data.recipes.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
            <div>
              <p>Rating : {item.rating}</p>
              <p>⏰ {item.cookTimeMinutes} mins</p>
              <h3>{item.name}</h3>
              <h4>Tags :</h4>
              <div>
                {item.tags.map(itemTags => (
                  <p>{itemTags}</p>
                ))}
              </div>
              {/* <button className="buttonCard"
                onClick={`${changeStyle}${item.id}`}>Show More</button> */}
              {/* {!!hidden[index] && <span>[HIDDEN]</span>}
              {!hidden[index] && <span>[VISIBLE]</span>}
              {item} <span onClick={e => toggleHide(index)}>x</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CardRecipes