import React, { useState } from "react";
import C_Task from "../classes/C_Task";
import classes from "./Task.module.css";
import TaskModal from "../TaskModal/TaskModal";

type TaskProps = {
  taskData: C_Task;
};

const Task = (props: TaskProps) => {
  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);
  let taskModalJSX: JSX.Element = <TaskModal task={props.taskData} />;

  return (
    <div
      onClick={() => setIsTaskModalVisible(!isTaskModalVisible)}
      className={classes.Task}
    >
      {isTaskModalVisible ? taskModalJSX : null}
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
