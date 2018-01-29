"use strict";
exports.__esModule = true;
var dieRollerUtil_js_1 = require("./dieRollerUtil.js");
var _ = require("lodash");
var Chance = require("chance");
var chance = new Chance();
var dieDivArray = [];
var getRandomDie = function (max) {
    if (max === void 0) { max = 6; }
    return chance.integer({ min: 1, max: 6 });
};
_.forEach([0, 1, 2, 3], function (value) {
    var tempDie = {
        "die": document.createElement("div")
    };
    dieDivArray.push(new dieRollerUtil_js_1["default"]({ die: tempDie.die, rowNumber: value }));
    document.body.appendChild(dieDivArray[value].die);
});
var changeBtn = document.createElement("button");
changeBtn.textContent = "Roll the Dice";
document.body.appendChild(changeBtn);
changeBtn.onclick = function (event) {
    dieDivArray.forEach(function (elem) {
        elem.rollDie(getRandomDie());
    });
};
