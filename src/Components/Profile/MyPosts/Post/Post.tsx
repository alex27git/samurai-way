import React from "react";
import classes from "./Posts.module.css";

export type PostsType = {
  id: number
  post:string
}

type PostType = {

  posts: Array<PostsType>
}
export function Post(props:PostType) {
  return (
    <div>
      <div className={classes.post}>
        <img className={classes.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="avatar"/>
        <p className={classes.text}>{props.posts[0].post}</p>
      </div>
      
      <div className={classes.post}>
        <img className={classes.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="avatar"/>
        <p className={classes.text}>{props.posts[1].post}</p>
      </div>
      
      <div className={classes.post}>
        <img className={classes.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="avatar"/>
        <p className={classes.text}>{props.posts[2].post}</p>
      </div>
      
    </div>
  )
}