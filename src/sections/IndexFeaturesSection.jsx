import React from "react"
import FeatureItem from "../components/FeatureItem"

const IndexFeaturesSection = () => {
  return (
    <div className="grid-cols-4 container v-screen content-center">
      <h1 className="text-3xl text-center auto-cols-auto">
        ¿Qué incluye este curso?
      </h1>
      <div className="container">
        <FeatureItem
          logo="schedule"
          text={"Duración de 8 semanas"}
        ></FeatureItem>
        <FeatureItem logo="videocam" text={"Clases en vivo"}></FeatureItem>
        <FeatureItem
          logo="people_outline"
          text={"Ayuda de tutores"}
        ></FeatureItem>
        <FeatureItem
          logo="code"
          text={"Ejercicios preseleccionados"}
        ></FeatureItem>
      </div>
      <div>
        <p className="text-base text-current text-center">
          Fecha tentativa de inicio: <br />
          15 de febrero
        </p>
        <div className="shadow-xl">
          <button className="bg-gray-100 p-4 rounded text-black">
            Inscribete a nuestro curso
            <span className="material-icons">keyboard_arrow_right</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndexFeaturesSection
