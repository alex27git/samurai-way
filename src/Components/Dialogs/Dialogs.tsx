import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Massages} from "./Massages/Massages";

export function Dialogs() {

  let dialogsData = [
    {id: 1, name: "Dmitriy"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Valera"},
    {id: 4, name: "Sweta"},
    {id: 5, name: "Victor"},
  ]

  let massagesData = [
    {id: 1, massages: "Hi"},
    {id: 2, massages: "How are you"},
    {id: 3, massages: "Hello"},
    {id: 4, massages: "YO"}
  ]

  let dialogsElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

  let massagesElement = massagesData
    .map(massage => <Massages massage={massage.massages}/>)

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