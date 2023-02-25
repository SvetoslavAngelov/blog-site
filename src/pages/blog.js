import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import BlogSection from "../components/sections/BlogSection"

function BlogPage() {
  return (
    <Layout>
      <Seo title="Blog" />
      <BlogSection />
    </Layout>
  )
}

export default BlogPage