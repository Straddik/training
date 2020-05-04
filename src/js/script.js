'use strict';
import "@babel/polyfill";


import { carausel } from "./modules/slick";
import { click, input } from "./modules/eventListeners"

document.addEventListener("DOMContentLoaded", () => {
    carausel();
    click();
    input();
});