import * as React from "react"
import { useEffect } from "react"

const MyComponents = () => {
    const [data, setData] = React.useState(null)
    
    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then(response => response.json())
    //         .then(console.log)
    //         .then(json => setData(json))
    // }, [])

    // if(!data){
    //     return <p>Loading...</p>
    // }

    return (
        <div className="containerAPI">
            <ul>
                {/* {data(item => (
                    <li key={item.id}>{item.title}</li>
                ))} */}
            </ul>
        </div>
    )
}
export default MyComponents