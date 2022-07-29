import React, { useState } from "react";
import classes from "./BoardListContainer.module.css";
import C_Board from "../classes/C_Board";
import { MdSpaceDashboard } from "react-icons/md";

type BoardListContainerProps = {
  boards: C_Board[];
};

const BoardListContainer = (props: BoardListContainerProps) => {
  const [selectedBoard, setSelectedBoard] = useState<number | null>(0);
  let boardList = [...props.boards];

  const handleBoardClick = (boardId: number | null) => {
    if (boardId === selectedBoard) return;
    setSelectedBoard(boardId);
  };

  let boardListTSX = boardList.map((board, key) => {
    return (
      <>
        {board.id === selectedBoard ? (
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
            <p onClick={() => handleBoardClick(board.id)}>{board.boardName}</p>
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
