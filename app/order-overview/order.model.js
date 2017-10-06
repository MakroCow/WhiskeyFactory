"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(id, name, bestellnummer, pos, //Das ist ein Array von Artikeln
        wert, kunde) {
        this.id = id;
        this.name = name;
        this.bestellnummer = bestellnummer;
        this.pos = pos;
        this.wert = wert;
        this.kunde = kunde;
    }
    return Order;
}());
exports.Order = Order;
var Artikel = /** @class */ (function () {
    function Artikel(art, //0=whisky, 1=gutschein,
        groesse, //0=250ml, 1=500ml, 2=750ml
        name, //Bei Gutscheinen wird dieses Feld als Nachrichtenfeld mitbenutzt
        losnummer, zusammensetzung, wert //Preis der Whiskyflasche oder Wert des Gutscheins
    ) {
        this.art = art;
        this.groesse = groesse;
        this.name = name;
        this.losnummer = losnummer;
        this.zusammensetzung = zusammensetzung;
        this.wert = wert; //Preis der Whiskyflasche oder Wert des Gutscheins
    }
    return Artikel;
}());
exports.Artikel = Artikel;
var Kunde = /** @class */ (function () {
    function Kunde(vorname, nachname, adresse) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.adresse = adresse;
    }
    return Kunde;
}());
exports.Kunde = Kunde;
//# sourceMappingURL=order.model.js.map