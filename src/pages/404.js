import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
    </Layout>
  )
}

export default NotFoundPage