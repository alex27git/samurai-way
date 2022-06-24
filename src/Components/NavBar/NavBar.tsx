import React from "react";
import classes from "./NavBar.module.css"

export function NavBar() {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <a className={`${classes.link} ${classes.active}`} href="src/Components/NavBar/NavBar#">Profile</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="src/Components/NavBar/NavBar#">Massages</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="src/Components/NavBar/NavBar#">News</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="src/Components/NavBar/NavBar#">Music</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="src/Components/NavBar/NavBar#">Settings</a>
        </li>
      </ul>
    </nav>
  )
}