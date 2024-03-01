import React, { useEffect, useState } from "react";
import "../style/styleMain.css"
// import CardRecipes from "./RecipesP";
import RecipesP from "../RecipesP";
import Footer from "./Footer";
import imgL from "../../assets/land.avif"
import Promo from "./Promo";
import img from "../../assets/family.jpg"
import imgLC from "../../assets/learnCook.jpg"

import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import imgSlide1 from "../../assets/slide1.jpg"
import imgSlide2 from "../../assets/slide2.jpg"
import imgSlide3 from "../../assets/slide3.jpeg"
import imgSlide4 from "../../assets/slide4.jpeg"
import imgSlide5 from "../../assets/slide5.jpeg"
import imgSlide6 from "../../assets/slide6.jpeg"
import imgSlide7 from "../../assets/slide7.jpg"
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css"
const Main = () => {
  const navigate = useNavigate()
  const images = [imgSlide1, imgSlide2, imgSlide3, imgSlide4, imgSlide5, imgSlide6, imgSlide7]

  useEffect(()=>{
    Aos.init()
  },[])

  let userName;
  userName = localStorage.getItem("userName")

  const uploadLogin = () => {
    alert("login dulu")
    setTimeout(() => {
      navigate("/Login")
    }, 1000);
  }
  return (
    <>
      <Navbar />
      <div className="main" id="main">
        <img src={imgL} alt="img" />
        <h1>WELCOME! aspiring chefs</h1>
        <p>You've come to the right place</p>
        <p>we have a lot about food recipes here</p>
      </div>

      <RecipesP />
      <Promo />

      <div className="conSMain" data-aos="fade-right" data-aos-duration="2000">
        <div>
          <img src={img} alt="img" />
          <div>
            <h2>Ciptakan momen bahagia bersama keluarga</h2>
            <p>Semua masakan kesukaan keluarga ada di ReFood</p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#f2e54e" fillOpacity="1" d="M0,32L40,37.3C80,43,160,53,240,85.3C320,117,400,171,480,165.3C560,160,640,96,720,101.3C800,107,880,181,960,224C1040,267,1120,277,1200,245.3C1280,213,1360,139,1400,101.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </div>

      <div className="conUMain" data-aos="fade-right" data-aos-duration="2000">
        <div>
          <img src={imgLC} alt="img" />
          <div>
            <h2>Mari belajar Memasak Bersama ReFood</h2>
            <p>Di ReFood kami memiliki banyak resep makanan. Komunitas untuk para koki dan pecinta makanan</p>
            {userName && (
              <Link to={"/UploadResep"}>
                <button>Upload Resep</button>
              </Link>
            )}
            {!userName && (
              <a href="#">
                <button onClick={uploadLogin}>Upload Resep</button>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="conInsta">
        <div>
          <h3>Instagram ReFood</h3>
          <p>Mari Belajar Memasak Bersama Refood</p>
        </div>
        <button>ikuti @ReFood</button>
      </div>
      <Slide className="conSlide"
        autoplay={true} responsive={[{
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]}>
        {images.map((item, index) => {
          return (
            <div key={index} className="eachSlideImg" style={{ backgroundImage: `url(${item})` }}></div>
          )
        })}
      </Slide>

      <Footer />
    </>
  )
}
export default Main