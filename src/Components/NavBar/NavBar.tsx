import React from "react";
import classes from "./NavBar.module.css"

export function NavBar() {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <a className={`${classes.link} ${classes.active}`} href="/Profile">Profile</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/Dialogs">Massages</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/News">News</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/Music">Music</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/Settings">Settings</a>
        </li>
      </ul>
    </nav>
  )
}