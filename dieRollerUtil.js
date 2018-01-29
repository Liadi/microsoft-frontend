"use strict";
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
exports.__esModule = true;
var Rolls;
(function (Rolls) {
    Rolls[Rolls["One"] = 0] = "One";
    Rolls[Rolls["Two"] = 1] = "Two";
    Rolls[Rolls["Three"] = 2] = "Three";
    Rolls[Rolls["Four"] = 3] = "Four";
    Rolls[Rolls["Five"] = 4] = "Five";
    Rolls[Rolls["Six"] = 5] = "Six";
})(Rolls || (Rolls = {}));
var stylingProp;
(function (stylingProp) {
    stylingProp.style = "width: 100px; height: 100px; float: left; border: 5px solid black; margin-right: 5px;";
})(stylingProp || (stylingProp = {}));
var dieTile = /** @class */ (function () {
    function dieTile(dieObject) {
        this.die = dieObject.die;
        this.rowNumber = dieObject.rowNumber;
        this.die.setAttribute("style", stylingProp.style);
    }
    dieTile.Rolls = Rolls;
    return dieTile;
}());
var dieRoller = /** @class */ (function (_super) {
    __extends(dieRoller, _super);
    function dieRoller(dieObject) {
        var _this = _super.call(this, dieObject) || this;
        _this.rollDie(_this.rowNumber);
        return _this;
    }
    dieRoller.prototype.rollDie = function (value) {
        this.die.innerHTML = "<h1>" + dieRoller.Rolls[value] + "</h1>";
        return true;
    };
    return dieRoller;
}(dieTile));
exports["default"] = dieRoller;
