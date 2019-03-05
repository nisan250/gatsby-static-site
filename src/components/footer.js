// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from "./footer.module.scss"

const Footer = () => (
  <footer className={styles.mainFooter}>
    <div className={styles.mainSize}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>

  </footer>
)

export default Footer
