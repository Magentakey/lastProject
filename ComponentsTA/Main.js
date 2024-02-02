import React from "react";
import "./styleMain.css"
// import CardRecipes from "./RecipesP";
import RecipesP from "./RecipesP";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="main" id="main">
        <h1>WELCOME! aspiring chefs</h1>
        <p>You've come to the right place</p>
        <p>we have a lot about food recipes here</p>
      </div>

      <RecipesP />
      <Footer />
    </>
  )
}
export default Main