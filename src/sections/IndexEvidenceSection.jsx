import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexEvidenceSection = () => {
  return (
    <div className="w-screen justify-center text-center container place-content-center v-screen bg-black py-5">
      <h1 className="text-3xl mb-10 text-white">
        Una mejor experencia de aprendizaje
      </h1>
      <p className="text-sx text-white">
        Diseñamos una experiencia de aprendizaje que te permita aprender las
        habilidades de programacion y ejercitar la resolución de problemas;
        además, tendrás retroalimentación activa de tus tutores.
      </p>
      <div className="shadow-2xl bg-[#282623] rounded p-4 border border-black">
        <StaticImage src="./ivan.jpg" alt="No encontrada" className="w-1/2" />
        <br />
        <p className="font-semibold text-white text-lg">
          Asiste a clases en vivo
        </p>
      </div>
      <br />
      <div className="shadow-2xl bg-[#282623] rounded p-4 border border-black">
        <StaticImage src="./ivan.jpg" alt="No encontrada" className="w-1/2" />
        <br />
        <p className="font-semibold text-white text-lg">
          Recibe ayuda de tutores
        </p>
      </div>
      <br />
      <div className='shadow-2xl bg-[#282623] rounded p-4 border border-black'>
        <StaticImage src="./ivan.jpg" alt="No encontrada" className="w-1/2"/>
        <br />
        <p className='font-semibold text-white text-lg'>
          Resuelve ejercicios
        </p>
      </div>

    </div>
  )
}

export default IndexEvidenceSection
