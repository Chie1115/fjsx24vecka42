fjsx24vecka42
Grunderna i JavaScript

Onsdag 16 oktober: Fortsättning från igår + operatorer:

Övning 1: Grundläggande Aritmetiska Operationer (Lätt)
Uppgift:
Deklarera två variabler a och b med värdena 12 och 5.
Beräkna och skriv ut summan, differensen, produkten, kvoten och resten av a och b.

Exempel på utskrift:

makefile
Kopiera kod
a = 12, b = 5
Summa: 17
Differens: 7
Produkt: 60
Kvot: 2.4
Rest: 2

Övning 2: Temperaturkonvertering (Lätt)
Uppgift:
Skriv ett program som omvandlar temperatur från Celsius till Fahrenheit.
Be användaren ange temperaturen i Celsius.
Använd formeln F = C \* 9/5 + 32.
Skriv ut resultatet.

Övning 3: Jämförelseoperatorer (Medel)
Uppgift:
Be användaren ange två tal.
Jämför talen och skriv ut vilket som är störst, eller om de är lika.

Övning 4: Even eller Udda (Medel)
Uppgift:
Skriv ett program som ber användaren ange ett tal.
Använd modulusoperatorn % för att avgöra om talet är jämnt eller udda.
Skriv ut resultatet.

Övning 5: Logiska Operatorer (Medel)
Uppgift:
Be användaren ange sin ålder och om de har giltig legitimation (true/false).
Använd logiska operatorer för att avgöra om personen får komma in på en klubb (minst 18 år och giltig legitimation).
Skriv ut om de får komma in eller inte.

Övning 6: Enkel Kalkylator (Medel)
Uppgift:
Skriv ett program som ber användaren ange två tal och en operator (+, -, \*, /, %).
Utför operationen och skriv ut resultatet.
Hantera division med noll genom att kontrollera om nämnaren är noll.

Övning 7: Strikt vs Lös Jämförelse (Medel)
Uppgift:
Deklarera variablerna let x = '10'; och let y = 10;.
Jämför x och y med == och ===.
Förklara skillnaden i en kommentar.

Övning 8: Ålderskontroll (Medel)
Uppgift:
Skriv ett program som ber användaren ange sin ålder.
Om åldern är mellan 13 och 19 (inklusive), skriv ut "Du är tonåring."
Annars, skriv ut "Du är inte tonåring."

Övning 9: Max av Tre Tal (Svår)
Uppgift:
Be användaren ange tre tal.
Använd jämförelseoperatorer för att bestämma vilket tal som är störst.
Skriv ut det största talet.

Övning 10: Enkel Lösenordsvalidering (Svår)
Uppgift:
Be användaren ange ett lösenord.
Kontrollera att lösenordet är minst 8 tecken långt och innehåller minst en siffra.
Använd logiska operatorer för att kombinera villkoren.
Skriv ut om lösenordet är giltigt eller inte.

Övning 11: Skottårskoll (Svår)
Uppgift:
Be användaren ange ett årtal.
Avgör om året är ett skottår.
Ett år är ett skottår om det är jämnt delbart med 4 men inte med 100, om det inte också är delbart med 400.

Övning 12: BMI-Kalkylator (Svår)
Uppgift:
Be användaren ange sin vikt i kilogram och längd i meter.
Beräkna BMI med formeln BMI = vikt / (längd \* längd).
Använd jämförelseoperatorer för att kategorisera BMI:
Under 18.5: Undervikt
18.5 - 24.9: Normalvikt
25 - 29.9: Övervikt
30 och över: Fetma
Skriv ut BMI-värdet och kategorin.

Övning 13: Logiska Operatorer - Sanningstabell (Avancerad)
Uppgift:
Skapa en sanningstabell för logiska operatorer &&, ||, !.
Visa resultatet av alla kombinationer av true och false.

Exempel på utskrift:

A B A && B A || B !A
true true true true false
true false false true false
false true false true true
false false false false true

Övning 14: FizzBuzz (Avancerad)
Uppgift:
Skriv ett program som skriver ut talen från 1 till 30.
För multiplar av 3, skriv ut "Fizz" istället för talet.
För multiplar av 5, skriv ut "Buzz".
För tal som är multiplar av både 3 och 5, skriv ut "FizzBuzz".

Övning 15: Nummergissningsspel (Avancerad)
Uppgift:
Programmet ska generera ett slumpmässigt tal mellan 1 och 100.
Be användaren gissa talet.
Använd jämförelseoperatorer för att ge feedback om gissningen är för hög, för låg eller korrekt.
Låt användaren fortsätta gissa tills de hittar rätt tal.
