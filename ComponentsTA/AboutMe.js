import React, { useEffect } from "react";
import Navbar from "./Main/Navbar";
import imgL from "../assets/family.jpg"
import imgT from "../assets/slide1.jpg"
import imgTeam from "../assets/Foto dari Ramdan~~.jpg"
import Footer from "./Main/Footer";

import Aos from "aos";
import "aos/dist/aos.css"
const AboutMe = () => {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <Navbar />
      <div className="aboutme" id="main">
        <img src={imgL} alt="img" />
        <h1>WELCOME! aspiring chefs</h1>
        <p>Mari mengenal ReFood lebih jauh!</p>
      </div>

      <div className="tujuan" data-aos="fade-left" data-aos-duration="3000">
        <div>
          <h2><b>Tujuan Kami</b></h2>
          <p>Membuat komunitas untuk pecinta makanan</p>
          <button><b>Lihat Detail</b></button>
        </div>
        <img src={imgT} alt="img" />
      </div>

      <div className="lokasi" data-aos="fade-right" data-aos-duration="3000">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.500895327932!2d106.6976062089992!3d-6.345431373551825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e582501b86cb%3A0xe17c81c2758ace13!2sSMK%20Letris%20Indonesia%202%20%26%20SMK%20Kesehatan%20Letris%20Indonesia%202!5e0!3m2!1sid!2sid!4v1708055650697!5m2!1sid!2sid" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <h2><b>Lokasi Kami</b></h2>
          <p>Ketahui lokasi kami berada, untuk mengikuti event-event yang kami adakan</p>
          <button><b>Lihat Detail</b></button>
        </div>
      </div>

      <div className="team"  data-aos="fade-left" data-aos-duration="3000">
        <div>
          <h2><b>Team</b></h2>
          <p>Kenali lebih lanjut team yang membuat komunitas ini</p>
          <button><b>Lihat Detail</b></button>
        </div>
        <img src={imgTeam} alt="img" />
      </div>

      <Footer />
    </>
  )
}
export default AboutMe