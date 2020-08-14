'use strict';

export default class Field {
    constructor(IronManCount, heroCount) {
        this.IronManCount = IronManCount;
        this.heroCount = heroCount;
        this.field = document.querySelector(".game__field");
        this.fieldRect = field.getBoundingClientRect();
    }
}