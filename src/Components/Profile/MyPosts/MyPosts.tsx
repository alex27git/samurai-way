import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/State";


export function MyPosts(props: ProfilePageType) {

  const postsItem = props.posts
    .map(post => <Post id={post.id} post={post.post} likeCount={post.likeCount}/>)

  return (
    <div>
      <h3 className={classes.header}>My posts</h3>
      <div className={classes.wrap}>
        <textarea className={classes.text}></textarea>
        <button className={classes.btn}>Add post</button>
      </div>
      {postsItem}
    </div>
  )
}
