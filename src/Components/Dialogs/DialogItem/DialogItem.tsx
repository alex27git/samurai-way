import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string
  id: number

}

export const DialogItem = (props: DialogItemType) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={'dialogs/1 {props.id}'}>{props.name}</NavLink>
    </div>
  )
}