import E_TaskState from "../Enum/E_TaskState";

export default class C_Task {
  private _title: string;
  private _description: string;
  private _subTasks: string[];
  private _status: E_TaskState;
  private _taskId: number | undefined;

  constructor(
    title: string,
    description: string,
    subtasks?: string[],
    status?: E_TaskState,
    taskId?: number | undefined
  ) {
    this._title = title;
    this._description = description;
    this._subTasks = subtasks ? subtasks : [];
    this._status = status ? status : E_TaskState.TODO;
    this._taskId = taskId ? taskId : undefined;
  }
}
