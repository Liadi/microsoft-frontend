import dieRoller from './dieRollerUtil.js';
import * as _ from 'lodash';
import * as Chance from 'chance'

const chance = new Chance();

const dieDivArray: Array<dieRoller> = []
const getRandomDie: Function = (max: number = 6): number => {
	return chance.integer({min: 1, max: 6});
}

_.forEach([0, 1, 2, 3], function(value) {
	let tempDie = {
    	"die": document.createElement("div")
  	}
  	dieDivArray.push(new dieRoller( {die: tempDie.die, rowNumber: value}));
  	document.body.appendChild(dieDivArray[value].die);
});

const changeBtn = document.createElement("button");
changeBtn.textContent = "Roll the Dice";
document.body.appendChild(changeBtn);
changeBtn.onclick = (event) => {
	dieDivArray.forEach( (elem)=> {
		elem.rollDie(getRandomDie())
	});
}
