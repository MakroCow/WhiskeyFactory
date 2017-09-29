"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(id, name, bestellnummer, pos, wert) {
        this.id = id;
        this.name = name;
        this.bestellnummer = bestellnummer;
        this.pos = pos;
        this.wert = wert;
    }
    return Order;
}());
exports.Order = Order;
var Pos = /** @class */ (function () {
    function Pos(pos0, pos1, pos2, pos3, pos4) {
        this.pos0 = pos0;
        this.pos1 = pos1;
        this.pos2 = pos2;
        this.pos3 = pos3;
        this.pos4 = pos4;
        this.positionen = [this.pos0, this.pos1, this.pos2, this.pos3, this.pos4];
    }
    return Pos;
}());
exports.Pos = Pos;
var Whisky = /** @class */ (function () {
    function Whisky(name, losnummer, zusammensetzung) {
        this.name = name;
        this.losnummer = losnummer;
        this.zusammensetzung = zusammensetzung;
    }
    return Whisky;
}());
exports.Whisky = Whisky;
//# sourceMappingURL=order.model.js.map