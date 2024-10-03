// Part 2
// The Word Translator
let userLanguage = (prompt("Enter a language code: es, de, en, or fr"));
switch(userLanguage.toLowerCase()) {
    case("de"):
        document.write("Hello World translated in German is: Hallo Welt");
        break;
    case("es"):
        document.write("Hello World translated in Spanish is: Hola Mundo");
        break;
    case("fr"):
        document.write("Hello World translated in French is: Bonjour le Monde");
        break;
    default:
        document.write("Hello World");
}