import React from "react";
import C_Task from "../classes/C_Task";
import classes from "./Task.module.css";

type TaskProps = {
  taskData: C_Task;
};

const Task = (props: TaskProps) => {
  return (
    <div className={classes.Task}>
      <div>
        <p className={classes.TaskTitle}>{props.taskData.title}</p>
        <p
          className={classes.SubtaskInfo}
        >{`${props.taskData.nbSubtasksDone} of ${props.taskData.nbSubtasks} subtasks`}</p>
      </div>
    </div>
  );
};

export default Task;
