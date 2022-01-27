import * as React from "react"

import Layout from "../components/layout"

// Importamos secciones
import IndexDescriptionSection from "../sections/IndexDescriptionSection"
import IndexFeaturesSection from "../sections/IndexFeaturesSection"
import IndexTemarySection from "../sections/IndexTemarySection"
import IndexTutorsSection from "../sections/IndexTutorsSection"
import IndexEvidenceSection from "../sections/IndexEvidenceSection"

const IndexPage = () => (
  <Layout>
    <>
      <IndexDescriptionSection></IndexDescriptionSection>
      <IndexFeaturesSection></IndexFeaturesSection>
      <IndexTemarySection></IndexTemarySection>
      <IndexTutorsSection></IndexTutorsSection>
      <IndexEvidenceSection></IndexEvidenceSection>
    </>
  </Layout>
)

export default IndexPage
