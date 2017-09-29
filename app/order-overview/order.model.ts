import { Injectable } from '@angular/core';

export class Order{
    constructor(
        public id: string,
        public name: string,
        public bestellnummer: string,
        public pos : Pos,
        public wert : number
        )
    {
    }
}

export class Pos{

    constructor(
        public pos0 : Whisky,
        public pos1 : Whisky,
        public pos2 : Whisky,
        public pos3 : Whisky,
        public pos4 : Whisky
    ){    }
    public positionen = [this.pos0, this.pos1, this.pos2, this.pos3, this.pos4];
}

export class Whisky {
    constructor (
        public name : string,
        public losnummer: number,
        public zusammensetzung: number[],
    ) { }
}