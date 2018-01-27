var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rolls;
(function (Rolls) {
    Rolls[Rolls["One"] = 0] = "One";
    Rolls[Rolls["Two"] = 1] = "Two";
    Rolls[Rolls["Three"] = 2] = "Three";
    Rolls[Rolls["Four"] = 3] = "Four";
    Rolls[Rolls["Five"] = 4] = "Five";
    Rolls[Rolls["Six"] = 5] = "Six";
})(Rolls || (Rolls = {}));
var dieTile = /** @class */ (function () {
    function dieTile(die, rowNumber) {
        if (rowNumber === void 0) { rowNumber = 0; }
        this.die = die;
        this.rowNumber = rowNumber;
        this.die.setAttribute("style", "width: 100px; height: 100px; float: left; border: 5px solid black; margin-right: 5px;");
    }
    dieTile.Rolls = Rolls;
    return dieTile;
}());
var dieRoller = /** @class */ (function (_super) {
    __extends(dieRoller, _super);
    function dieRoller(die, rowNumber) {
        if (rowNumber === void 0) { rowNumber = 0; }
        var _this = this;
        console.log('c', rowNumber);
        _this = _super.call(this, die, rowNumber) || this;
        _this.rollDie(_this.rowNumber);
        return _this;
    }
    dieRoller.prototype.rollDie = function (value) {
        console.log('inner', value);
        this.die.innerHTML = "<h1>" + dieRoller.Rolls[value] + "</h1>";
        return true;
    };
    return dieRoller;
}(dieTile));
var dieDivArray = [];
var getRandomDie = function (max) {
    if (max === void 0) { max = 6; }
    return Math.floor(Math.random() * (6));
};
for (var index = 0; index < 4; index++) {
    var tempDie = {
        "die": document.createElement("div")
    };
    console.log('o', index);
    dieDivArray.push(new dieRoller(tempDie.die, index));
    document.body.appendChild(dieDivArray[index].die);
}
// dieSet.map( (elem, index) => {  
//   let dieRollerBlock = new dieRoller(elem.die);
// })
var changeBtn = document.createElement("button");
changeBtn.textContent = "Roll the Dice";
document.body.appendChild(changeBtn);
changeBtn.onclick = function (event) {
    dieDivArray.forEach(function (elem) {
        elem.rollDie(getRandomDie());
    });
};
