import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const IndexTutorsSection = () => {
  return (
    <div className="h-screen grid justify-center gap-y-2 place-content-center">
      <div className="container pr-10 pl-10  text-center">
        <h1 className="text-3xl mb-10">Conoce a tus tutores</h1>
        <StaticImage src="./genaro.jpg" alt="A dinosaur" className="rounded-full w-1/2"/>
        <h1 className="text-2xl">Genaro Melgar</h1>
        <h1 className="text-base text-current">
          Estudiante de Ciencia de Datos en el Instituto Politécnco Nacional
        </h1>
        <StaticImage src="./ivan.jpg" alt="A dinosaur" className="rounded-full w-1/2"/>
        <h1 className="text-2xl">Iván Martínez</h1>
        <h1 className="text-base text-current">
          Estudiante de Matemáticas Aplicadas y Computación en la UNAM
        </h1>
      </div>
    </div>
  )
}

export default IndexTutorsSection
