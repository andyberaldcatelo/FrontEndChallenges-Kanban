import React from "react";
import classes from "./Sidebar.module.css";
import BoardListContainer from "../BoarListContainer/BoardListContainer";
import C_Board from "../classes/C_Board";

type SidebarProps = {
  boards: C_Board[];
  handleBoardChange_fromApp: (boardId: number) => void;
};

const Sidebar = (props: SidebarProps) => {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.Title}>
        <span className={classes.First}>|</span>
        <span className={classes.Second}>|</span>
        <span className={classes.Third}>|</span>
        kanban
      </div>
      <div>
        <BoardListContainer
          boards={props.boards}
          handleBoardChange_fromApp={props.handleBoardChange_fromApp}
        />
      </div>
    </div>
  );
};

export default Sidebar;
