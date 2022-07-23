import React from "react";
import classes from "./BoardListContainer.module.css";
import C_Board from "../classes/C_Board";

type BoardListContainerProps = {
  boards: C_Board[];
};

const BoardListContainer = (props: BoardListContainerProps) => {
  let boardList = [...props.boards];
  let boardListTSX = boardList.map((board) => {
    return (
      <>
        <div className={classes.BoardName}>{board.boardName}</div>
      </>
    );
  });
  return (
    <div className={classes.BoardListContainer}>
      <div className={classes.Label}>ALL BOARDS</div>
      {boardListTSX}
    </div>
  );
};

export default BoardListContainer;
