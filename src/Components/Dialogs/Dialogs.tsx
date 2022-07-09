import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Massages} from "./Massages/Massages";
import {DialogPageType} from "../../Redux/State";

export function Dialogs(props: DialogPageType) {

  let dialogsElements = props.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

  let massagesElement = props.massages
    .map(massage => <Massages massage={massage.massage} id={massage.id}/>)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={classes.massages}>
        {massagesElement}
      </div>
    </div>
  )
}