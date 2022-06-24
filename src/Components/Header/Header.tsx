import React from "react";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.logo}
           src="https://icon-library.com/images/2018/2290655_logo-template-your-company-logo-png-transparent-png.png"
           alt="logo"/>
    </header>
  )
}