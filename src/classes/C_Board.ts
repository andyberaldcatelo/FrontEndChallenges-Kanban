export default class C_Board {
  private _boardName: string;
  private _isSelected: boolean;
  private _id: number | null;

  constructor(boardName: string, isSelected?: boolean, id?: number) {
    this._boardName = boardName;
    isSelected !== undefined
      ? (this._isSelected = isSelected)
      : (this._isSelected = false);
    id !== undefined ? (this._id = id) : (this._id = null);
  }

  public get isSelected(): boolean {
    return this._isSelected;
  }

  public set isSelected(value: boolean) {
    this._isSelected = value;
  }

  public get boardName(): string {
    return this._boardName;
  }

  public set boardName(value: string) {
    this._boardName = value;
  }

  public get id(): number | null {
    return this._id;
  }

  public set id(value: number | null) {
    this._id = value;
  }
}
