/* Nav Items displayed in Head  */

import React from "react"
import { Link } from "gatsby"



const styles = {
    color: `white`,
    textDecoration: `none`,
    marginRight: `20px`,
  }


const NavItems = () => (

    
  <div style={{
    float: `right`,
  }}>
    <nav>
    <Link
      to="/"
      style={styles}
    >
      Home
    </Link>

    <Link
      to="/about"
      style={styles}
    >
      About
    </Link>

    <Link
      to="/contact"
      style={styles}
    >
      Contact
    </Link>
    </nav>
  </div>
)

export default NavItems
