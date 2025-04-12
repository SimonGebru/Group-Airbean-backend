# Group-Airbean-backend

Grupparbete Airbean API
Instruktioner

I detta grupparbete ska ni skapa ett API för en webbapp där det går att beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).
User stories

En gruppmedlem gör ett repo och bjuder in resterande gruppmedlemmar till det repot. Sedan under fliken Projects så välj ett nytt projekt och sätt upp enligt strukturen nedan samt kopiera över alla user stories. Ni får även använda Trello och skapa upp fler stories eller tasks (som kan vara mer tekniska). I detta grupparbete kan det vara till fördel att skapa upp lite fler tasks att koppla till en user story som mer beskriver det som behövs göras i backend för att uppnå funktionaliteten i user storyn.

Obs! En user story kan också enbart vara en FE-story alltså att det inte behövs göras något i backend.

Se detta som tips/hjälp, inga krav alls hittar ni här: https://github.com/users/zocom-christoffer-wallenberg/projects/11/views/1
Figmaskiss

    https://www.figma.com/file/ONcO3UQRPBLQsZc3FkysMt/AirBean-v.1.1---with-profile?node-id=0%3A1&t=aOiJ6vMVkTI7Xxth-0

Betygskriterier

För Godkänt:

    Uppfyller alla krav av funktionalitet.
    Använder sig av Express och NeDB som databas (en annan databas exempelvis MongoDB är okej ifall alla i gruppen är överens om detta).
    All input som skickas i url eller i body ska valideras i en middleware och ifall det är fel data ska ett felmeddelande skickas tillbaka.
    Det ska enbart gå att lägga till produkter som finns i menyn, ifall någon annan produkt skickas med så ska ett felmeddelande skickas tillbaka. Även pris ska kontrolleras, allt detta ska göras i en middleware.
    När ett konto skapas ska detta kopplas till ett slumpat användarid (här används fördelaktigt ett bibliotek) där användarid:et sedan kan användas för att hämta orderhistorik, användarnamn ska alltså ej skickas med i url för att hämta orderhistorik.
    Att alla gruppmedlemmar deltar eller meddelar frånvaro till gruppen senast 12 timmar innan möten, detta gäller för alla grupplanerade möte.
    Alla gruppmedlemmar deltar i redovisnings momentet (alla ska prata ungefär lika mycket).

Extra uppgifter som ger Guldstjärnor (Men inget högre betyg eftersom det inte går att få VG):

    Allt i godkänt
    Kunna se pågående beställningar och tidigare beställningar (man kollar när beställningen lades (klockslag) gentemot vad klockan är nu. Här är det godkänt att använda något bibliotek för datum och tidshantering (ex. moment.js eller date-fns).
    Ert projekt använder sig av en MVC-arkitektur.

Handledning

Handledning för måndagens och onsdagens lektion bokas här: https://docs.google.com/document/d/1zCTCEAbQNIL1zewBV5dzRnqaI0bfOLQJ7r1JBxFD0zg/edit?usp=sharing
Redovisning

Sker genom inspelad redovisning och lämnas in senast 22/4 kl 12 till läraren. MAX 20 min redovisning.
Inlämning av kod
Inlämning sker på Azomo med en länk till ert Github repo senast 22/4 22:59.
