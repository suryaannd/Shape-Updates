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
        <h1>Constantly Evolving</h1>
        <p>
          Did you know that we update Scrumpy 13 times a day on average? We're
          continuously improving your experience. Learn more about our latest
          additionse
        </p>
      </div>
      <Updates />
    </div>
  </Layout>
)

export default IndexPage
