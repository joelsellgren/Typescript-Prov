// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.

const addToArray = <T>(something: T) => {
    const array = []
    array.push(something)
    console.log(array);
}

addToArray('String')
addToArray(5)

// 2. Ge ett exempel på en funktion med två generiska typer.

const makeArray = <T, U>(t: T, u: U): [T, U] => {
 return [t, u]
}

// 3. Ge ett exempel på ett interface med en generisk typ.
interface Something<T> {
    something: T
}