import React from "react"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexDescriptionSection = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center place-content-center mb-10"
        style={{ 'min-height': "80vh" }}
      >
        <div className="container text-center lg:col-start-2 lg:col-span-4 max-w-xl">
          <StaticImage
            src="../images/_bitaula.svg"
            alt="No encontrada"
            className="max-w-xs my-8 object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold">Aprende a programar con Python</h1>
          <p className="text-current">
            Aprende a programar con nuestro curso de introducción a la
            programación; mezclamos sesiones en vivo y retos de código para
            practiques lo aprendido.
          </p>
          <button target="_blank" onClick={() => navigate("https://airtable.com/shrMX1Xn2ZLFqy7oA")} className="inline-flex items-center bg-[#7e22ce] p-4 rounded text-white font-semibold py-4 px-4 shadow-2xl mb-6 tracking-widest">
            <span style={{ fontFamily: "Roboto" }}>
              Inscríbete a nuestro curso
            </span>
            <span className="material-icons">keyboard_arrow_right</span>
          </button>
          <p className="text-current font-semibold text-black/50 tracking-wide">
            Cupo limitado
          </p>
        </div>
      </div>
    </>
  )
}

export default IndexDescriptionSection
