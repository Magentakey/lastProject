import Navbar from "../Main/Navbar"
import imgL from "../../assets/slide1.jpg"
import "../style/aboutMeDetail.css"

const Tujuan = () => {
  return (
    <>
      <Navbar />
      <div className="tujuanWebCon">
        <h1>Tujuan Kami</h1>
        <div>
          <ol>
            <li>Memperluas pengetahuan tentang berbagai resep makanan.</li>
            <li>Membangun komunitas untuk berbagi pengalaman memasak dan tips kuliner.</li>
            <li>Mendorong kolaborasi antara anggota untuk menciptakan resep baru.</li>
            <li>Memberikan inspirasi bagi pengguna dalam memasak sehari-hari.</li>
            <li>Membuat platform untuk berbagi foto makanan dan pengalaman bersantap.</li>
            <li>Membuat diskusi dan forum untuk bertukar pendapat tentang masakan dan makanan.</li>
          </ol>
          <img src={imgL} alt="img" />
        </div>
      </div>
    </>
  )
}
export default Tujuan