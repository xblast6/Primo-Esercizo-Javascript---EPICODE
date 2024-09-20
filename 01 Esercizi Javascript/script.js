/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
"I principali datatype in Javascript sono:"
"number: Hanno come valore un numero, può essere sia negativo che positvo"
"String: Hanno come valore qualsiasi carattere rinchiuso tra apici o virgolette(questa descrizione è una stringa)"
"Array: Sono un gruppo di elementi racchiusi nelle parentesi quadre, possono essere stringhe, numeri o oggetti"
"Object: Gli oggetti sono dei contenitori che racchiudono dei dati. I dati vengono rappresentati attraverso una coppia di chiave e valore"
"Booleani: i datatype booleani possono essere solo true o false, "
"Undefined: rappresenta una variabile che non ha un valore esistente. La variabile viene dichiarata, ma non ha valore"
"Null: Ha un valore nullo, la variabile viene dichiarata e gli viene dato un valore nullo 'null' "
/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
"Object: Gli oggetti sono dei contenitori che racchiudono dei valori dentro alle parentesi graffe. I dati vengono rappresentati attraverso una coppia di chiave e valore, la chiave viene seguita dai due punti, mentre per dividere i vari dati si usa la virgola"
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primoNumero = 12
let secondoNumero = 20
let somma = primoNumero + secondoNumero
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Alessandro"
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log("john è diverso da John: " + name1 !== name2 );
console.log("Grazie alla proprietà toLowerCase ora sono uguali: " + (name1 == name2.toLowerCase()));

