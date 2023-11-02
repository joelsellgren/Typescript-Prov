### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel.

Types används för att definiera formen av ett värde.

Type Shape = {
width: number;
height: number;
nameOfShape: string
}

const rectangle: Shape = {
width: 5,
height: 6,
nameOfShape: 'rectangle'
}

Här måste alltså värdena i variabeln rectangle stämma in med de som är definierade i typen Shape.

Interfaces används för att definiera ett "kontrakt" som ett objekt måste uppfylla. D.v.s att typerna på variablerna i Interfacet måste stämma med typerna i objektet. I interfaces kan vi även definiera funktioner och dess returntype. Vi kan även extenda interfaces där en 'BaseInterface' används och kan extenda ett annat interface.
