import React, { useState } from "react";
import C_Task from "../classes/C_Task";
import classes from "./Task.module.css";
import TaskModal from "../TaskModal/TaskModal";

type TaskProps = {
  taskData: C_Task;
};

const Task = (props: TaskProps) => {
  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsTaskModalVisible(true);
    console.log("open");
  };

  const handleCloseModal_fromTask = () => {
    setIsTaskModalVisible(false);
    console.log("close");
  };

  let taskModalJSX: JSX.Element = (
    <TaskModal
      task={props.taskData}
      handleCloseModal_fromTask={handleCloseModal_fromTask}
    />
  );

  return (
    <>
      <div onClick={() => handleOpenModal()} className={classes.Task}>
        <div>
          <p className={classes.TaskTitle}>{props.taskData.title}</p>
          <p
            className={classes.SubtaskInfo}
          >{`${props.taskData.nbSubtasksDone} of ${props.taskData.nbSubtasks} subtasks`}</p>
        </div>
      </div>
      <div>{isTaskModalVisible ? taskModalJSX : null}</div>
    </>
  );
};

export default Task;
