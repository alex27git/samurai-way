import classes from "./../Profile.module.css";
import React from "react";


export function UserProfile() {
  return (
    <div className={classes.user}>
      <div className={classes.avatar}>
        <img className={classes.avatarImg}
             src="https://i.pinimg.com/736x/e9/dc/dc/e9dcdc8165a1375f0cac6d4665586234--venus-the-cat-cats-and-dogs.jpg"
             alt=""/>
      </div>
      <div className={classes.dsc}>
        <p className={classes.name}>Alex G.</p>
        <p className={classes.text}>Date of birth: 23 August</p>
        <p className={classes.text}>City: Kursk</p>
        <p className={classes.text}>Education: BSNRU`07</p>
        <p className={classes.text}>Web Site:
          <a href="src/Components/Profile/Profile#" className={classes.link}>https://samurai.it-incubator.by</a>
        </p>
      </div>
    </div>
  )
}