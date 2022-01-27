import React from "react"

const IndexDescriptionSection = () => {
  return (
    <div className="h-screen align-middle ">
      <div className=" container grid-cols-10">
        <h1 className="text-3xl text-center auto-cols-auto">
          Aprende a programar con Python
        </h1>
        <p className="text-lg text-current font-sans text-center">
          Aprende a programar con nuestro curso de introducción a la
          programación; mezclamos sesiones en vivo y retos de código para
          practiques lo aprendido.
        </p>
        <div className="flex container">
          <button className="bg-purple-700 p-4 rounded text-white">
            Inscribete a nuestro curso
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndexDescriptionSection
