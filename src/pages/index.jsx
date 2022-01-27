import * as React from "react"

import Layout from "../components/layout"

// Importamos secciones
import IndexDescriptionSection from "../sections/IndexDescriptionSection"
import IndexFeaturesSection from "../sections/IndexFeaturesSection"

const IndexPage = () => (
  <Layout>
    <>
      <IndexDescriptionSection></IndexDescriptionSection>
      <IndexFeaturesSection></IndexFeaturesSection>
    </>
  </Layout>
)

export default IndexPage
