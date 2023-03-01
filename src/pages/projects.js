import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import ProjectSection from "../components/sections/ProjectSection"

function ProjectsPage() {
  return (
    <Layout>
      <Seo title="Projects" />
      <ProjectSection />
    </Layout>
  )
}

export default ProjectsPage