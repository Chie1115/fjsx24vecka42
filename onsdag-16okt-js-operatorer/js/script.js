// Ämnen att täcka:
console.log("Hej Onsdag!");
// Aritmetiska operatorer:

// Addition (+), subtraktion (-), multiplikation (*), division (/), modulus (%)

// let a = 10;
// let b = 3;

// console.log("Addition", a + b);
// console.log("subtraktion", a - b);
// console.log("multiplikation", a * b);
// console.log("division", a / b);
// console.log("modulus", a % b);

// ----------------------------------
// Jämförelseoperatorer:

// Lika med (==), strikt lika med (===), inte lika med (!=), strikt inte lika med (!==), större än (>), mindre än (<), större än eller lika med (>=), mindre än eller lika med (<=)

// let num1 = 5;
// let num2 = 6;

// console.log("==", num1 == num2);
// console.log("===", num1 === num2);
// console.log("!=", num1 != num2);
// console.log("!==", num1 !== num2);
// console.log(">", num1 > num2);
// console.log("<", num1 < num2);
// console.log(">=", num1 >= num2);
// console.log("<=", a % b);

// ----------------------------------
// Logiska operatorer:

// OCH (&&), ELLER (||), ICKE (!)
// Operatorernas prioritet:

// let isAdult = true;
// let hasTicket = false;

// console.log("kan komm in: ", isAdult && hasTicket);
// console.log("kan komm in: ", isAdult || hasTicket);
// console.log("kan komm in: ", isAdult);

// ----------
// Förklara hur operatorernas prioritet påverkar utvärderingen av uttryck.
// let resultat = 10 + 5 * 2;

// resultat = (10 + 5) * 2;

// console.log("resultat", resultat);






//Övning 1: Grundläggande Aritmetiska Operationer
// Deklarera två variabler a och b med värdena 12 och 5
var a = 12; // Tilldela värdet 12 till variabeln a
var b = 5;  // Tilldela värdet 5 till variabeln b

// Beräkna resultaten av aritmetiska operationer 算術演算の結果を計算します
var sum = a + b;          // Beräkna summan (addition)
var difference = a - b;   // Beräkna differensen (subtraktion)
var product = a * b;      // Beräkna produkten (multiplikation)
var quotient = a / b;     // Beräkna kvoten (division)
var remainder = a % b;    // Beräkna resten (modulus)

// Skriv ut resultaten
console.log("a = " + a + ", b = " + b); // Utskrift av värdena för a och b
console.log("Summa: " + sum);           // Utskrift av summan
console.log("Differens: " + difference); // Utskrift av differensen
console.log("Produkt: " + product);      // Utskrift av produkten
console.log("Kvot: " + quotient);        // Utskrift av kvoten
console.log("Rest: " + remainder);       // Utskrift av resten



//Övning 2: Temperaturkonvertering (Lätt)　温度変換
// Be användaren ange temperaturen i Celsius
let celsius = prompt("Ange temperaturen i Celsius:");
let fahrenheit = celsius * 9 / 5 + 32;
console.log("Temperaturen i Fahrenheit är: " + fahrenheit);



//Övning 3: Jämförelseoperatorer　比較演算子
// Be användaren ange två tal
var tal1 = parseFloat(prompt("Ange det första talet:"));
var tal2 = parseFloat(prompt("Ange det andra talet:"));

// Jämför talen och skriv ut resultatet
if (tal1 > tal2) {
    console.log(tal1 + " är störst.");
} else if (tal1 < tal2) {
    console.log(tal2 + " är störst.");
} else {
    console.log("Båda talen är lika.");
}



//Övning 4: Even eller Udda 奇数か偶数か
// Be användaren ange ett tal
var tal = prompt("Ange ett tal:");

// Använd modulusoperatorn % för att avgöra om talet är jämnt eller udda
if (tal % 2 === 0) {
    console.log(tal + " är ett jämnt tal.");
} else {
    console.log(tal + " är ett udda tal.");
}



//Övning 5: Logiska Operatorer　論理演算子　年齢制限確認
// Be användaren ange sin ålder och om de har giltig legitimation
var alder = prompt("Ange din ålder:");
var hasID = prompt("Har du giltig legitimation? (true/false)");

// Använd logiska operatorer för att avgöra om personen får komma in på klubben
if (alder >= 18 && hasID === "true") {
    console.log("Du får komma in på klubben.");
} else {
    console.log("Du får inte komma in på klubben.");
}


//Övning 6: Enkel Kalkylator 計算機
// Be användaren ange två tal och en operator
var tal1 = parseFloat(prompt("Ange det första talet:")); //1つ目の数字を入力
var tal2 = parseFloat(prompt("Ange det andra talet:")); //2つ目の数字を入力
var operator = prompt("Ange en operator (+, -, *, /, %):"); //演算子を入力

// Variabel för att lagra resultatet
var resultat;

// Utför operationen baserat på operatorn
if (operator === "+") {
    resultat = tal1 + tal2;
} else if (operator === "-") {
    resultat = tal1 - tal2;
} else if (operator === "*") {
    resultat = tal1 * tal2;
} else if (operator === "/") {
    // Kontrollera om nämnaren är noll
    if (tal2 === 0) {
        console.log("Division med noll är inte tillåten."); //ゼロで割ることはできません
    } else {
        resultat = tal1 / tal2;
    }
} else if (operator === "%") {
    resultat = tal1 % tal2;
} else {
    console.log("Ogiltig operator."); //無効な演算子です
}

// Skriv ut resultatet om det beräknades
if (resultat !== undefined) {
    console.log("Resultatet är: " + resultat);
}



//Övning 7: Strikt vs Lös Jämförelse
// Deklarera variablerna
let x = '10';
let y = 10;

// Jämför x och y med == (lös jämförelse)　
console.log(x == y); // true, eftersom värdena är lika. true, なぜなら == は値を比較するから

// Jämför x och y med === (strikt jämförelse)　
console.log(x === y); // false, eftersom datatyperna är olika (string vs number).false, なぜなら === は値と型を比較するから

// Kommentar: 
// == kontrollerar bara om värdena är lika oavsett datatyp,
// medan === kontrollerar både värde och datatyp.
// == はデータ型に関係なく値が等しいかどうかをチェックするだけですが、
// while === は値とデータ型の両方をチェックします。




//Övning 8: Ålderskontroll (Medel) 年齢確認 (中) 10代かどうか
// Be användaren ange sin ålder
var alder = parseInt(prompt("Ange din ålder:"));

// Kontrollera om åldern är mellan 13 och 19
if (alder >= 13 && alder <= 19) {
    console.log("Du är tonåring.");
} else {
    console.log("Du är inte tonåring.");
}


//Övning 9: Max av Tre Tal　3 つの数字の最大は？
// Be användaren ange tre tal
let tal1 = prompt("Ange det första talet:");
let tal2 = prompt("Ange det andra talet:");
let tal3 = prompt("Ange det tredje talet:");

// Anta det första talet är störst
let maxTal = tal1;

// Jämför för att hitta det största talet
if (tal2 > maxTal) {
    maxTal = tal2;
}
if (tal3 > maxTal) {
    maxTal = tal3;
}

// Skriv ut det största talet
console.log("Det största talet är: " + maxTal);




//Övning 10: Enkel Lösenordsvalidering　パスワード検証

let password = prompt("Ange ett lösenord:");　//パスワードを入力してください:

if (password.length >= 8 && /\d/.test(password)) {
    console.log("Lösenordet är giltigt.");　//パスワードは有効です。
} else {
    console.log("Lösenordet är ogiltigt. Det måste vara minst 8 tecken långt och innehålla minst en siffra.");　//パスワードは無効です。
}



//
//
//
