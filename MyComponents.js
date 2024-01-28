import * as React from "react"
import { useEffect } from "react"
import { json } from "react-router-dom"

const MyComponents = () => {
  const [data, setData] = React.useState(null)

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <>
      {console.log(data.recipes)}
    </>
    // <div className="containerAPI">
    //   <ul>
    //     {data.recipes.map(item => (
    //       <li key={item.id}>{item.name}</li>
    //     ))}
    //   </ul>
    // </div>
  )
}
export default MyComponents