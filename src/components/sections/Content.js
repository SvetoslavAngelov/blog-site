import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Content() {

    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
                }
            }
        }
    `);

    return  (
        <div>
            <h1>
                {data.site.siteMetadata.title}
            </h1>
        </div>
    )
}