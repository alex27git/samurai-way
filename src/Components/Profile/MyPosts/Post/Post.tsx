import React from "react";
import classes from "./Posts.module.css";
import {PostType} from "../../../../Redux/State";


export function Post(props: PostType) {

  return (
    <div>
      <div className={classes.post}>
        <img className={classes.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
             alt="avatar"/>
        <p className={classes.text}>{props.post}</p>
        <div className={classes.like}>
          <div className={classes.like_img}>
            <img className={classes.like_icon}
                 src="https://www.freepngimg.com/thumb/facebook/65476-like-icons-media-button-up-sign-computer.png"
                 alt=""/>
          </div>
          <p className={classes.like_count}>{props.likeCount}</p>
        </div>
      </div>
    </div>
  )
}

