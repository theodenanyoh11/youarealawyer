import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroImage from "../images/gatsby-astronaut.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Hero />

  </Layout>
)

export default IndexPage
