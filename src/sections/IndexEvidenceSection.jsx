import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexEvidenceSection = () => {
  return (
    <div className="w-full m-0 text-center px-6 md:px-12 v-screen bg-black py-8 md:py-12">
      <h1 className="text-3xl mb-10 mt-3 text-white">
        Una mejor experencia de aprendizaje
      </h1>
      <p className="text-white/75 text-white max-w-2xl mx-auto">
        Diseñamos una experiencia de aprendizaje que te permita aprender las
        habilidades de programacion y ejercitar la resolución de problemas;
        además, tendrás retroalimentación activa de tus tutores.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-fulll md:w-1/3 shadow-2xl bg-[#282623] rounded border border-black w-90 p-4">
          <StaticImage src="https://i.ibb.co/PWNksdf/imagen1.png" alt="No encontrada" className="object-contain h-40 sm:h-60 w-full" />
          <br />
          <p className="font-semibold text-white text-lg">
            Asiste a clases en vivo
          </p>
        </div>
        <div className="w-fulll md:w-1/3 shadow-2xl bg-[#282623] rounded pt-4 pb-0 border border-black w-90 p-4">
          <StaticImage src="https://i.ibb.co/X35X0tt/imagen2.png" alt="No encontrada" className="object-contain h-40 sm:h-60 w-full" />
          <br />
          <p className="font-semibold text-white text-lg">
            Recibe ayuda de tutores
          </p>
        </div>
        <div className='w-fulll md:w-1/3 shadow-2xl bg-[#282623] rounded pt-4 pb-0 border border-black w-90 p-4'>
          <StaticImage src="https://i.ibb.co/jZBbWpQ/imagen3.png" alt="No encontrada" className="object-contain h-40 sm:h-60 w-full"/>
          <br />
          <p className='font-semibold text-white text-lg'>
            Resuelve ejercicios
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexEvidenceSection
