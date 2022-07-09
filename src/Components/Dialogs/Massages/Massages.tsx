import classes from "./../Dialogs.module.css";

type MassagesType = {
  massage: string
}

export const Massages = (props: MassagesType) => {
  return (
    <>
      <div className={classes.massage}>{props.massage}</div>
    </>
  )
}
