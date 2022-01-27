import React from "react"

const IndexDescriptionSection = () => {
  return (
    <div className="grid justify-center place-content-center" style={{height:"80vh"}}>
      <div className=" container text-center lg:col-start-2 lg:col-span-4">
        <h1 className="text-3xl">Aprende a programar con Python</h1>
        <p className="text-sx text-current">
          Aprende a programar con nuestro curso de introducción a la
          programación; mezclamos sesiones en vivo y retos de código para
          practiques lo aprendido.
        </p>
        <button className="inline-flex items-center bg-[#7e22ce] p-4 rounded text-white font-semibold py-4 px-4 shadow-2xl mb-6">
          <span style={{ fontFamily: "Roboto" }}>
            Inscríbete a nuestro curso
          </span>
          <span className="material-icons">keyboard_arrow_right</span>
        </button>
        <p className="text-sx text-current">Cupo limitado</p>
      </div>
    </div>
  )
}

export default IndexDescriptionSection
