import C_Board from "./classes/C_Board";
import C_GenericTask from "./classes/C_GenericTask";
import C_Task from "./classes/C_Task";

export const createGenericTask = (title: string): C_GenericTask => {
  return new C_GenericTask(title);
};

export const createTask = (
  title: string,
  description: string,
  subtasks: C_GenericTask[]
): C_Task => {
  return new C_Task(title, description, subtasks);
};

export const createBoard = (boardName: string, tasks: C_Task[]): C_Board => {
  return new C_Board(boardName, tasks);
};
