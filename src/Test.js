import React from "react";
import { useEffect } from "react"

const Test = () => {
    const [data, setData] = React.useState([])
    // create, read, update, delete

    useEffect(()=>{
        fetch("http://localhost:4000/dataTest")
        .then((e) => e.json())
        .then(e => setData(e))
    },[])

    console.log(data);
    return (
        <>
         <h1>Test</h1>
        </>
    )
}
export default Test