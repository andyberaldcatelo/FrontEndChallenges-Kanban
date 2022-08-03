import React from "react";
import classes from "./App.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Board from "./Board/Board";
import boards from "./database";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.SidebarContainer}>
        <Sidebar boards={boards} />
      </div>
      <div className={classes.TopbarContainer}>
        <Topbar />
      </div>
      <div className={classes.BoardContainer}>
        <Board tasks={boards[0].tasks} />
      </div>
    </div>
  );
}

export default App;
