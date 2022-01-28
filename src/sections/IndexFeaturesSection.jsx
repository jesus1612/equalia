import React from "react"
import FeatureItem from "../components/FeatureItem"
import { navigate } from "gatsby"

const IndexFeaturesSection = () => {
  return (
    <div className="mt-10 mb-12 grid justify-center place-content-center v-screen">
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
        <FeatureItem logo="voice_chat" text={"2 clases por semana a través de Zoom"}></FeatureItem>
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
        <p className="text-current font-semibold text-black/25 tracking-wide">
          Fecha tentativa de inicio: <br />
          15 de febrero
        </p>
        <button onClick={() => navigate("https://airtable.com/shrMX1Xn2ZLFqy7oA")} className="inline-flex items-center bg-gray-100 p-4 rounded text-black font-semibold py-4 px-4 shadow-2xl tracking-widest">
          <span style={{ fontFamily: "Roboto" }}>Reserva tu lugar</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </button>
      </div>
    </div>
  )
}

export default IndexFeaturesSection
