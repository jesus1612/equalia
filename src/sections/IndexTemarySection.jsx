import React from "react"
import "../styles/collapse.css"
import Collapsible from "../components/Collapsible"

const IndexTemarySection = () => {
  return (
    <div className="w-full m-0 text-center px-6 md:px-12 v-screen bg-black py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-white">
          ¿Qué aprenderás en este curso?
        </h1>
        <p className="text-white/75 text-white">
          El currículo del cruso de introducción a la programación está diseñado
          para darte bases sólidas para incursionar en la industria de la
          tecnología.
        </p>
        {/* collapse */}
        <Collapsible title="Algoritmos" open={false}>
          En esta sección aprenderás qué es un algoritmo y cómo se relacionan con la programación.
        </Collapsible>
        <Collapsible title="Tipos de datos basicos" open={false}>
          Conoce los tipos de datos fundamentales con los que puedes trabajar en Python.
        </Collapsible>
        <Collapsible title="Listas y diccionarios" open={false}>
          Por primera vez aprenderás estructuras de datos sencillas, pero poderosas para crear programas complejos.
        </Collapsible>
        <Collapsible title="Operadores de comparación" open={false}>
          ¿9 es más grande que 13? Con los operadores de comparación podrás plantear estas preguntas en código.
        </Collapsible>
        <Collapsible title="Condicionales" open={false}>
          Comienza a escribir programas más complejos y responde a distintos escenarios.
        </Collapsible>
        <Collapsible title="Ciclos" open={false}>
          Algunas cosas pueden ser repetitivas, por eso aprenderás a evitar esto con ciclos en Python.
        </Collapsible>
        <Collapsible title="Funciones" open={false}>
          Escribe código compacto y reutilizable, tus programas serán más limpios y tus compañeros te lo agradecerán.
        </Collapsible>
        <Collapsible title="Programación orientada a objetos" open={false}>
          Conoce las bases de un paradigma que te ayudará a escribir código más legible y conciso.
        </Collapsible>
      </div>
    </div>
  )
}

export default IndexTemarySection
