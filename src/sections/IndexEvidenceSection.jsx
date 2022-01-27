import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexEvidenceSection = () => {
  return (
    <div className="w-full m-0 text-center p-10 v-screen bg-black py-5">
      <h1 className="text-3xl mb-10 mt-3 text-white">
        Una mejor experencia de aprendizaje
      </h1>
      <p className="text-sx text-white px-4">
        Diseñamos una experiencia de aprendizaje que te permita aprender las
        habilidades de programacion y ejercitar la resolución de problemas;
        además, tendrás retroalimentación activa de tus tutores.
      </p>
      <div className="shadow-2xl bg-[#282623] rounded border border-black w-90 p-4">
        <StaticImage src="../../public/resources/1.png" alt="No encontrada" className="object-contain h-40 sm:h-60 w-full" />
        <br />
        <p className="font-semibold text-white text-lg">
          Asiste a clases en vivo
        </p>
      </div>
      <br />
      <div className="shadow-2xl bg-[#282623] rounded pt-4 pb-0 border border-black w-90 p-4">
        <StaticImage src="../../public/resources/2.png" alt="No encontrada" className="object-contain h-40 sm:h-60 w-full" />
        <br />
        <p className="font-semibold text-white text-lg">
          Recibe ayuda de tutores
        </p>
      </div>
      <br />
      <div className='shadow-2xl bg-[#282623] rounded pt-4 pb-0 border border-black w-90 p-4'>
        <StaticImage src="../../public/resources/3.png" alt="No encontrada" className="object-contain h-40 sm:h-60 w-full"/>
        <br />
        <p className='font-semibold text-white text-lg'>
          Resuelve ejercicios
        </p>
      </div>
    </div>
  )
}

export default IndexEvidenceSection
