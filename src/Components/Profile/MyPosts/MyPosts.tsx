import React from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";

export function MyPosts() {

  const post1 = [
    {id: 1, post: "Hello"},
    {id: 2, post: "HTML/CSS"},
    {id: 3, post: "ReactJS"},
  ]

  return (
    <div>
      <h3 className={classes.header}>My posts</h3>
      <div className={classes.wrap}>
        <textarea className={classes.text}></textarea>
        <button className={classes.btn}>Add post</button>
      </div>
      <Post posts={post1}/>
    </div>
  )
}
