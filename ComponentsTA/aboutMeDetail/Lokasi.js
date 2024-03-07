import Navbar from "../Main/Navbar"
import imgL from "../../assets/slide1.jpg"
import "../style/aboutMeDetail.css"

const Lokasi = () => {
  return (
    <>
      <Navbar />
      <div className="LokasiWebCon">
        <h1>Lokasi Kami</h1>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.500895327932!2d106.6976062089992!3d-6.345431373551825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e582501b86cb%3A0xe17c81c2758ace13!2sSMK%20Letris%20Indonesia%202%20%26%20SMK%20Kesehatan%20Letris%20Indonesia%202!5e0!3m2!1sid!2sid!4v1708055650697!5m2!1sid!2sid" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p>Lokasi Komunitas: Jl. Siliwangi No.55, Pd. Benda, Kec. Pamulang, Kota Tangerang Selatan, Banten 15416</p>
          <p>No : 1234-5678-9010</p>
        </div>
      </div>
    </>
  )
}
export default Lokasi