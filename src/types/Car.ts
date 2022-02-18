export class Car {
  constructor(private _name: string, private _speed: number) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get secondspeed(): number {
    return this._speed;
  }

  public set secondspeed(secondspeed: number) {
    this._speed = secondspeed;
  }
}
