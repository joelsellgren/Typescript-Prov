"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
const addToArray = (something) => {
    const array = [];
    array.push(something);
    console.log(array);
};
addToArray('String');
addToArray(5);
// 2. Ge ett exempel på en funktion med två generiska typer.
const makeArray = (t, u) => {
    return [t, u];
};
