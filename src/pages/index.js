import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import MainSection from "../components/sections/MainSection"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <MainSection />
    </Layout>
  )
}

export default IndexPage