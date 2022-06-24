import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
  return (
    <div className={classes.content}>
      <div className={classes.promo}>
        <img className={classes.img} src="https://urwlab.com/wp-content/uploads/2017/06/GCS-NY-Soho-1536x1024.jpg" alt="promo"/>
      </div>
      <div className={classes.user}>
        <div className={classes.avatar}>
          <img className={classes.avatarImg} src="https://i.pinimg.com/736x/e9/dc/dc/e9dcdc8165a1375f0cac6d4665586234--venus-the-cat-cats-and-dogs.jpg" alt=""/>
        </div>
        <div className={classes.dsc}>
          <p className={classes.name}>Alex G.</p>
          <p className={classes.text}> Date of birth: 23 August</p>
          <p className={classes.text}> City: Kursk</p>
          <p className={classes.text}> Education: BSNRU`07</p>
          <p className={classes.text}>  Web Site: <a href="src/Components/Profile/Profile#" className={classes.link} >https://samurai.it-incubator.by</a></p>
        </div>
      </div>
      <MyPosts/>
    </div>
  )
}