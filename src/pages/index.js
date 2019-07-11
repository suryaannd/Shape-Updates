import React from "react"
import { Link } from "gatsby"

import Updates from "../components/Update"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Always on the run</h1>
        <p>Stay in the know on what's happening inside shape</p>
      </div>
      <Updates />
      <Updates />
    </div>
  </Layout>
)

export default IndexPage
