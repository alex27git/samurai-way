import React from "react";

export function Profile() {
  return (
    <div className="content">
      <div className="content__promo">
        <img className="content__img" src="https://urwlab.com/wp-content/uploads/2017/06/GCS-NY-Soho-1536x1024.jpg" alt="promo"/>
      </div>
      <div className="content__user">
        <div className="content__icons">
          <img className="content__icons-img" src="https://i.pinimg.com/736x/e9/dc/dc/e9dcdc8165a1375f0cac6d4665586234--venus-the-cat-cats-and-dogs.jpg" alt=""/>
        </div>
        <div className="content__dsc">
          <p className="content__dsc-header">Alex G.</p>
          <p className="content__dsc-text"> Date of birth: 23 August</p>
          <p className="content__dsc-text"> City: Kursk</p>
          <p className="content__dsc-text"> Education: BSNRU`07</p>
          <p className="content__dsc-text"> Web Site: https://samurai.it-incubator.by</p>
        </div>
      </div>
      <div className="content__post">posts</div>
      <div className="content__post">posts</div>
      <div className="content__post">posts</div>
      <div className="content__post">posts</div>
    </div>
  )
}