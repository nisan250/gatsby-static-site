import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.mainHeader}>
    <div className={styles.mainSize}>
      <h1 className={styles.mainTitle}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
