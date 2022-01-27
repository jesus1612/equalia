import React from "react"
import FeatureItem from "../components/FeatureItem"

const IndexFeaturesSection = () => {
  return (
    <div className="grid justify-center place-content-center v-screen">
      <h1 className="text-3xl text-center">
        ¿Qué incluye este curso?
      </h1>
      <br />
      <br />
      <div className="container grid justify-center place-content-center">
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
        <br /><br />
      <div className="container text-center">
        <p className="text-base text-current">
          Fecha tentativa de inicio: <br />
          15 de febrero
        </p>
        <button className="inline-flex items-center bg-gray-100 p-4 rounded text-black font-semibold py-4 px-4 shadow-2xl">
          <span style={{ fontFamily: "Roboto" }}>Reserva tu lugar</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </button>
        <br /><br /><br />
      </div>
    </div>
  )
}

export default IndexFeaturesSection
