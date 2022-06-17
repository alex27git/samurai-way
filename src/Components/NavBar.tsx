import React from "react";

export function NavBar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <a className="sidebar__menu-link" href="">Profile</a>
        </li>
        <li className="sidebar__menu-item">
          <a className="sidebar__menu-link" href="">Massages</a>
        </li>
        <li className="sidebar__menu-item">
          <a className="sidebar__menu-link" href="">News</a>
        </li>
        <li className="sidebar__menu-item">
          <a className="sidebar__menu-link" href="">Music</a>
        </li>
        <li className="sidebar__menu-item">
          <a className="sidebar__menu-link" href="">Settings</a>
        </li>
      </ul>
    </nav>
  )
}