import React from 'react';
import FeatureItem from '../components/FeatureItem';


const IndexFeaturesSection = () => {
  return (
    <div className='grid-cols-8 container content-center'>
      <h1 className="text-3xl text-center auto-cols-auto">
        ¿Qué incluye este curso?
      </h1>
      <div className='container'>
        <FeatureItem logo="check_circle" text={"Duración de 8 semanas"}></FeatureItem>
        <FeatureItem logo="check_circle" text={"Clases en vivo"}></FeatureItem>
        <FeatureItem logo="check_circle" text={"Ayuda de tutores"}></FeatureItem>
        <FeatureItem logo="check_circle" text={"Ejercicios preseleccionados"}></FeatureItem>

      </div>
    </div>
   );
}

export default IndexFeaturesSection;