import { T_TaskState } from "../Type/Type_TaskState";

export default class C_GenericTask {
  protected _title: string;
  protected _status: T_TaskState = "TODO";
  protected _taskId: number | undefined;

  constructor(title: string) {
    this._title = title;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get status(): T_TaskState {
    return this._status;
  }

  public set status(value: T_TaskState) {
    this._status = value;
  }

  public get taskId(): number | undefined {
    return this._taskId;
  }
}
