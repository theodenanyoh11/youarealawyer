import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import './header.css'

const Header = ({ siteTitle }) => (
 <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><Logo />
      </Link>
      <div className="LinkGroup">
        <Link to="/episodes">Episodes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/subscribe"><button>Subscribe</button></Link>
    </div>
 </div>
)

export default Header
