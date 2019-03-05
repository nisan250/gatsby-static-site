import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

// HeaderLink component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
)

// HomeButton component
// const HomeButton = props => (
//   <Link to={props.to}>
//     <div className={styles.button}>{props.text}</div>
//   </Link>
// )

const Header = ({ siteTitle }) => (
  <header className={styles.mainHeader}>
    <div className={styles.mainSize}>
      <h1 className={styles.mainTitle}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <nav className={styles.nav}>
          <HeaderLink to="/" text='Home' />
          <HeaderLink to="/about/" text='About' />
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
