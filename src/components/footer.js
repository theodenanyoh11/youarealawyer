import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"


const Footer = ({ siteTitle }) => (
    <div>
  <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://startuphero.studio">StartupHero Studio</a>
        </footer>   
    </div>
   )
   
   export default Footer

