import React from "react";
import classes from "./App.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Board from "./Board/Board";
import boards from "./database";
import { useState } from "react";

function App() {
  const [chosenBoard, setChosenBard] = useState(0);

  const handleBoardChange_fromApp = (boardId: number) => {
    setChosenBard(boardId);
  };

  return (
    <div className={classes.App}>
      <div className={classes.SidebarContainer}>
        <Sidebar
          boards={boards}
          handleBoardChange_fromApp={handleBoardChange_fromApp}
        />
      </div>
      <div className={classes.TopbarContainer}>
        <Topbar />
      </div>
      <div className={classes.BoardContainer}>
        <Board tasks={boards[chosenBoard].tasks} />
      </div>
    </div>
  );
}

export default App;
