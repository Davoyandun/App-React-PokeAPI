import React from "react";
import { Link } from "react-router-dom";

import s from "../css/landing.module.css";

export default function Landing() {
  return (
    <div className={s.landing}>
      <div className={s.text}>
         <h2 className={s.text}> BIENVENIDO A PUEBLO PALETA</h2>
        <Link to="home">
         <button className={s.button}>PIKA PIKA</button>
        </Link>
      </div>
    </div>
  );
}
