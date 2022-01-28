import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexTutorsSection = () => {
  return (
    <div className="mt-10 grid text-center justify-center gap-y-2 h-full sm:h-screen">
      <h1 className="text-3xl mb-10">Conoce a tus tutores</h1>
      <div className="sm:flex grid">
        <div className="pl-10 pr-10 pb-10 w-full sm:w-1/2 ">
          <StaticImage
            src="./genaro.jpg"
            alt="No encontrada"
            className="rounded-full w-1/2"
          />
          <h1 className="text-2xl mt-5 mb-0">Genaro Melgar</h1>
          <p className="text-base mt-4 font-semibold text-black/50">
            Estudiante de Ciencia de Datos en el Instituto Politécnco Nacional
          </p>
        </div>
        <div className="pl-10 pr-10 pb-10 w-full sm:w-1/2 ">
          <StaticImage
            src="./ivan.jpg"
            alt="No encontrada"
            className="rounded-full w-1/2"
          />
          <h1 className="text-2xl mt-5 mb-0">Iván Martínez</h1>
          <p className="text-base mt-4 font-semibold text-black/50">
            Estudiante de Matemáticas Aplicadas y Computación en la UNAM
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexTutorsSection
