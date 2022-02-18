export class Car {
  constructor(private _name: string, private _AAAspeed: number) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get AAAspeed(): number {
    return this._AAAspeed;
  }

  public set AAAspeed(AAAspeed: number) {
    this._AAAspeed = AAAspeed;
  }
}
