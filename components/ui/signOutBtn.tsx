"use client"
import classes from "./signOutBtn.module.css"
import {TbLogout} from "react-icons/tb"
 
type LogOutType = {logOut: () => void}

const signOutBtn = ({logOut}: LogOutType) => {
  return (
    <div className={classes.signOutBtn} onClick={logOut}><TbLogout size={30} color={"red" } /> <h4> Log Out </h4> </div>
  )
}

export default signOutBtn