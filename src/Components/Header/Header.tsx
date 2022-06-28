import React from "react";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.logo}
           src="https://banner2.cleanpng.com/20180720/kha/kisspng-react-javascript-library-redux-user-interface-tesseract-5b52265cc83931.4218499515321104288201.jpg"
           alt="logo"/>
    </header>
  )
}