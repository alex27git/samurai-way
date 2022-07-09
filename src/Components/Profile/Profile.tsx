import React from "react";
import classes from "./Profile.module.css";
import {UserProfile} from "./UserProfile/UserProfile";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../Redux/State";

export function Profile(props: ProfilePageType) {


  return (
    <div className="app-wrapper-content">
      <div className={classes.promo}>
        <img className={classes.img} src="https://urwlab.com/wp-content/uploads/2017/06/GCS-NY-Soho-1536x1024.jpg"
             alt="promo"/>
      </div>
      <UserProfile/>
      <MyPosts posts={props.posts}/>
    </div>
  )
}