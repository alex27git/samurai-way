import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/State";


export const DialogItem = (props: DialogType) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={'dialogs/1 {props.id}'}>{props.name}</NavLink>
    </div>
  )
}