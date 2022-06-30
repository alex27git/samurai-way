import React from "react";
import classes from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

export function NavBar() {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <NavLink className={classes.link} to="/Profile" activeClassName={classes.active}>Profile</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} to="/Dialogs" activeClassName={classes.active}>Massages</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} to="/News" activeClassName={classes.active}>News</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} to="/Music" activeClassName={classes.active}>Music</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} to="/Settings" activeClassName={classes.active}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}