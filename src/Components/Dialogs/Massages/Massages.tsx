import classes from "./../Dialogs.module.css";
import {MassageType} from "../../../Redux/State";

export const Massages = (props: MassageType) => {
  return (
    <>
      <div className={classes.massage}>{props.massage}</div>
    </>
  )
}
