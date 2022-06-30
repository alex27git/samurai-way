import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string
  id: string

}

const DialogItem = (props: DialogItemType) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={'dialogs/1' + '{props.id}'}>{props.name}</NavLink>
    </div>
  )
}

type MassagesType = {
  massage: string
}

const Massages = (props: MassagesType) => {
  return (
    <>
      <div className={classes.massage}>{props.massage}</div>
    </>
  )
}

export function Dialogs() {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <DialogItem name={'Dmitriy'} id={'1'}/>
        <DialogItem name={'Alex'} id={'2'}/>
        <DialogItem name={'Valera'} id={'3'}/>
        <DialogItem name={'Sweta'} id={'4'}/>
        <DialogItem name={'Victor'} id={'5'}/>
      </div>
      <div className={classes.massages}>
        <Massages massage={'Hi'}/>
        <Massages massage={'How are you'}/>
        <Massages massage={'Hello'}/>

      </div>
    </div>
  )
}