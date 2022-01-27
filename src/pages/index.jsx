import * as React from "react"

import Layout from "../components/layout"

// Importamos secciones
import IndexDescriptionSection from "../sections/IndexDescriptionSection"
import IndexFeaturesSection from "../sections/IndexFeaturesSection"
import IndexTemarySection from "../sections/IndexTemarySection"
const IndexPage = () => (
  <Layout>
    <>
      <IndexDescriptionSection></IndexDescriptionSection>
      <IndexFeaturesSection></IndexFeaturesSection>
      <IndexTemarySection></IndexTemarySection>
    </>
  </Layout>
)

export default IndexPage
