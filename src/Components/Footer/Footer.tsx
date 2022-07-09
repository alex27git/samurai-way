import React from "react";
import classes from "./Footer.module.css";


export function Footer() {
  return (
    <div className={classes.wrap}>
      <div className={classes.right}>&copy; <span className={classes.allRight}>Все права защищены</span></div>
    </div>
  )
}