import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {UserProfile} from "./UserProfile/UserProfile";

export function Profile() {
  return (
    <div className="app-wrapper-content">
      <div className={classes.promo}>
        <img className={classes.img} src="https://urwlab.com/wp-content/uploads/2017/06/GCS-NY-Soho-1536x1024.jpg"
             alt="promo"/>
      </div>
      <UserProfile/>
      <MyPosts/>
    </div>
  )
}