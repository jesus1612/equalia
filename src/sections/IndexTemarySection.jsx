import React from "react"
import "../styles/collapse.css"
import Collapsible from "../components/Collapsible"

const IndexTemarySection = () => {
  return (
    <div className="w-screen absolute justify-center text-center container place-content-center v-screen bg-black py-5">
      <h1 className="text-3xl font-semibold text-white">
        ¿Qué aprenderás en este curso?
      </h1>
      <p className="text-sx text-white">
        El currículo del cruso de introducción a la programación está diseñado
        para darte bases sólidas para incursionar en la industria de la
        tecnología.
      </p>
      {/* collapse */}
      <Collapsible title="Algoritmos" open={false}>
        En esta sección aprenderás qué es un algoritmo y cómo se relacionan con
        la programación.
      </Collapsible>
      <Collapsible title="Tipos de datos basicos" open={false}>
        En esta sección aprenderás qué es un algoritmo y cómo se relacionan con
        la programación.
      </Collapsible>
      <Collapsible title="Listas y diccionarios" open={false}>
        En esta sección aprenderás qué es un algoritmo y cómo se relacionan con
        la programación.
      </Collapsible>
      <Collapsible title="Operadores de comparación" open={false}>
        En esta sección aprenderás qué es un algoritmo y cómo se relacionan con
        la programación.
      </Collapsible>
      <Collapsible title="Condicionales" open={false}>
        En esta sección aprenderás qué es un algoritmo y cómo se relacionan con
        la programación.
      </Collapsible>
      <Collapsible title="Ciclos" open={false}>
        En esta sección aprenderás qué es un algoritmo y cómo se relacionan con
        la programación.
      </Collapsible>
      <Collapsible title="Funciones" open={false}>
        En esta sección aprenderás qué es un algoritmo y cómo se relacionan con
        la programación.
      </Collapsible>
      <Collapsible title="Programación orientada a objetos" open={false}>
        En esta sección aprenderás qué es un algoritmo y cómo se relacionan con
        la programación.
      </Collapsible>
    </div>
  )
}

export default IndexTemarySection
