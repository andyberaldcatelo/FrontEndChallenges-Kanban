import React from "react";
import classes from "./App.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Board from "./Board/Board";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.SidebarContainer}>
        <Sidebar />
      </div>
      <div className={classes.TopbarContainer}>
        <Topbar />
      </div>
      <div className={classes.BoardContainer}>
        <Board />
      </div>
    </div>
  );
}

export default App;
