import React from "react";
import classes from "./Topbar.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className={classes.Topbar}>
      <p className={classes.BoardTitle}>Platform Launch</p>
      <div className={classes.UserActions}>
        <button className={classes.BtnAddNewTask}>+ Add New Task</button>
        <div className={classes.DottedMenu}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
