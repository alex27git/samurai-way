import React from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";


export function MyPosts() {

  const posts = [
    {id: 1, post: 'Hello', likeCount: 15},
    {id: 2, post: 'How are you', likeCount: 10},
    {id: 3, post: 'react', likeCount: 12},
    {id: 4, post: 'Hello', likeCount: 17},
  ]
  const postsItem = posts
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
