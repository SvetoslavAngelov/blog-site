import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

function BlogPage() {
  return (
    <Layout>
      <Seo title="Blog" />
      <h1>Hi from the blog page</h1>
      <p>Welcome to Blog Page</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}

export default BlogPage