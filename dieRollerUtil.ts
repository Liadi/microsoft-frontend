interface DieType {
  die: Element
  rowNumber?: number
}

enum Rolls {
  One,
  Two,
  Three,
  Four,
  Five,
  Six
}

namespace stylingProp {
  export const style = "width: 100px; height: 100px; float: left; border: 5px solid black; margin-right: 5px;";
}

class dieTile {
  die: Element;
  rowNumber: number;
  static Rolls = Rolls;
  constructor (dieObject: DieType) {
    this.die = dieObject.die;
    this.rowNumber = dieObject.rowNumber;
    (this.die as HTMLElement).setAttribute("style", stylingProp.style);
  }
}

class dieRoller  extends dieTile {
  constructor(dieObject: DieType) {
    super(dieObject);
    this.rollDie(this.rowNumber)
  }

  rollDie(value: number): boolean {
    (this.die as HTMLElement).innerHTML = `<h1>${dieRoller.Rolls[value]}</h1>`;
    return true;
  }
}

export default dieRoller;
