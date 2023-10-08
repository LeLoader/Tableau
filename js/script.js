"use strict";

function Tableau(){
    let names = [];
    names.push("Vincent");
    names.push("Paul");
    names.push("Arthur");

    names.forEach(element => {
        element += " va à la peche."
        console.log(element);
    });
}

Tableau();
