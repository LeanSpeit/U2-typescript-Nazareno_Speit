//Cambié el nombre de la interfaz para evitar conflictos al haberla usado anteriormente
interface Person {
    firstName: string;
    lastName?: string; // la ? indica que es opcional
}

let person1: Person = {
    firstName: "Nazareno"
};
