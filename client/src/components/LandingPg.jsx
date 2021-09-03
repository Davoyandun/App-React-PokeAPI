import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1> BIENVENIDO A PUEBLO PALETA</h1>
      <Link to = 'home'>
        <button>PIKA PIKA </button>
      </Link>
    </div>
  );
}
