enum Rolls {
  One,
  Two,
  Three,
  Four,
  Five,
  Six
}

interface DieType {
  'die': Element
}

class dieTile {
  die: Element;
  rowNumber: number;
  static Rolls = Rolls;
  constructor (die: Element, rowNumber: number = 0) {
    this.die = die;
    this.rowNumber = rowNumber;
    (this.die as HTMLElement).setAttribute("style", "width: 100px; height: 100px; float: left; border: 5px solid black; margin-right: 5px;");
  }
}

class dieRoller  extends dieTile {
  constructor(die: Element, rowNumber: number = 0) {
    console.log('c', rowNumber);
    super(die, rowNumber);
    this.rollDie(this.rowNumber)
  }

  rollDie(value: number): boolean {
     console.log('inner', value);
    (this.die as HTMLElement).innerHTML = `<h1>${dieRoller.Rolls[value]}</h1>`;
    return true;
  }
}


const dieDivArray: Array<dieRoller> = []
const getRandomDie: Function = (max: number = 6): number => {
  return Math.floor(Math.random() * (6));
}

for (let index = 0; index < 4; index++) {
  let tempDie = {
    "die": document.createElement("div")
  }
  console.log('o', index);
  dieDivArray.push(new dieRoller(tempDie.die, index));
  document.body.appendChild(dieDivArray[index].die);
}

// dieSet.map( (elem, index) => {  
//   let dieRollerBlock = new dieRoller(elem.die);

// })

const changeBtn = document.createElement("button");
changeBtn.textContent = "Roll the Dice";
document.body.appendChild(changeBtn);
changeBtn.onclick = (event) => {
  dieDivArray.forEach( (elem)=> {
    elem.rollDie(getRandomDie())
  });
}
