import { Injectable } from '@angular/core';

export class Order{
    constructor(
        public id: string,
        public name: string,
        public bestellnummer: string,
        public pos : [Artikel],         //Das ist ein Array von Artikeln
        public wert : number,
        public kunde : Kunde
        )
    { }
}

export class Artikel {

    constructor (
        public art : number,        //0=whisky, 1=gutschein,
        public groesse : number,     //0=250ml, 1=500ml, 2=750ml
        public name : string,       //Bei Gutscheinen wird dieses Feld als Nachrichtenfeld mitbenutzt
        public losnummer: number,
        public zusammensetzung: number[],
        public wert : number        //Preis der Whiskyflasche oder Wert des Gutscheins
    ){  }
}

export class Kunde {
    constructor(
        public vorname : string,
        public nachname : string,
        public adresse : string,
    )
    {}
}