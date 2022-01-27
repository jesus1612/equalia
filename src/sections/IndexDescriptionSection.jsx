import React from "react"

const IndexDescriptionSection = () => {
  return (
    <div className="h-screen grid justify-center gap-y-2 place-content-center">
      <div className=" container text-center">
        <h1 className="text-3xl">Aprende a programar con Python</h1>
        <p className="text-sx text-current">
          Aprende a programar con nuestro curso de introducción a la
          programación; mezclamos sesiones en vivo y retos de código para
          practiques lo aprendido.
        </p>
          <button className=" inline-flex items-center bg-purple-700 p-4 rounded text-white hover:bg-purple-500 font-semibold py-2 px-4 border border-purple-400 shadow-2xl">
            <span style={{fontFamily: "Roboto"}}> Inscríbete a nuestro curso </span>
            <span className="material-icons">keyboard_arrow_right</span>
          </button>
      </div>
    </div>
  )
}

export default IndexDescriptionSection
