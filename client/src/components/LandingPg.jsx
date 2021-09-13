import React from "react";
import { Link } from "react-router-dom";
// import landing from "../style/img/landing.mp4";
// import s from "../style/landing.module.css";

export default function Landing() {
  return (
    <div>
      {/* <video className={s.Landing} src={landing} autoPlay loop></video> */}
      <Link to="home">
        <h1 /*className={s.text}*/ > BIENVENIDO A PUEBLO PALETA</h1>
      </Link>
    </div>
  );
}
