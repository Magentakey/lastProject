import * as React from "react"
import { useEffect } from "react"
import { json } from "react-router-dom"
import "./styleCard.css"

const CardRecipes = () => {
  const [data, setData] = React.useState(null)
  const [data2, setdata2] = React.useState([])
  // const [style, setStyle] = React.useState("light");
  // const [hidden, setHidden] = React.useState({});

  const fetchData2 = () => {
    fetch("https://dummyjson.com/recipes/1")
      .then(response => {
        return response.json()
      })
      .then(data2 => {
        setdata2(data2)
      })
  }


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
              {/* {!!hidden[index] && <span>[HIDDEN]</span>}
              {!hidden[index] && <span>[VISIBLE]</span>}
            {item} <span onClick={e => toggleHide(index)}>x</span> */}
            </div>
            {/* <button className="buttonCard">Show More</button> */}
            <button className="buttonCard" onClick={fetchData2}>Fetch Data</button>
            {data2.length >= 0 && (
              <p>{data2.name}</p>
              // <ul>
              //   {data2.map(item2 => (
              //     <li key={item2.id}>{item2.name}</li>
              //   ))}
              // </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default CardRecipes