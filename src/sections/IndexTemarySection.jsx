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
        <Collapsible title="Introducción a la programación" open={false}>
          Descubre qué es la programación, dónde se aplica y más razones para aprender a programar.
        </Collapsible>
        <Collapsible title="Instalación de la paquetería y configuración del entorno de desarrollo" open={false}>
          Instalarás toda la paquetería y software necesarios para tomar el curso y escribir programas en Python.
        </Collapsible>
        <Collapsible title="Introducción a algoritmos" open={false}>
          Aprende la definición de algoritmo, cómo se relaciona con la programación y ten tu primer acercamiento a la solución algorítmica de problemas.
        </Collapsible>
        <Collapsible title="Tipos de datos basicos" open={false}>
          Conoce los tipos de datos fundamentales con los que puedes trabajar en Python.
        </Collapsible>
        <Collapsible title="Listas y diccionarios" open={false}>
          Por primera vez aprenderás estructuras de datos sencillas, pero poderosas para crear programas complejos.
        </Collapsible>
        <Collapsible title="Operadores de comparación" open={false}>
          Plantea comparaciones de tipo "igual que", "mayor que", "menor que" mediante código de programación.
        </Collapsible>
        <Collapsible title="Operadores lógicos" open={false}>
          Haz uso de los operadores de comparación y combínalos con sentencias "or" y "and" para realizar comparaciones más complejas.
        </Collapsible>
        <Collapsible title="Condicionales" open={false}>
          Mezcla los operadores de comparación y los operadores lógicos para realizar programas más dinámicos.
        </Collapsible>
        <Collapsible title="Ciclos" open={false}>
          Algunas cosas pueden ser repetitivas, por eso aprenderás a simplificar piezas de código.
        </Collapsible>
        <Collapsible title="Funciones" open={false}>
          Escribe código compacto y reutilizable, tus programas serán más limpios y tus compañeros te lo agradecerán.
        </Collapsible>
        <Collapsible title="Introducción a la programación orientada a objetos" open={false}>
          Conoce las bases de un paradigma que te ayudará a escribir código más legible y conciso.
        </Collapsible>
      </div>
    </div>
  )
}

export default IndexTemarySection
