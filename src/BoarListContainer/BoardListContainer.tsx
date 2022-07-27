import React from "react";
import classes from "./BoardListContainer.module.css";
import C_Board from "../classes/C_Board";
import { MdSpaceDashboard } from "react-icons/md";

type BoardListContainerProps = {
  boards: C_Board[];
};

const BoardListContainer = (props: BoardListContainerProps) => {
  let boardList = [...props.boards];

  let boardListTSX = boardList.map((board, key) => {
    return (
      <>
        {board.isSelected ? (
          <div
            className={[classes.BoardName, classes.isSelected].join(" ")}
            key={key}
          >
            <span className={classes.Span}>
              <MdSpaceDashboard />
            </span>
            <p>{board.boardName}</p>
          </div>
        ) : (
          <div className={classes.BoardName}>
            <span className={classes.Span}>
              <MdSpaceDashboard />
            </span>
            <p>{board.boardName}</p>
          </div>
        )}
      </>
    );
  });
  return (
    <div className={classes.BoardListContainer}>
      <div className={classes.BoardLabel}>ALL BOARDS ({boardList.length})</div>
      {boardListTSX}
    </div>
  );
};

export default BoardListContainer;
