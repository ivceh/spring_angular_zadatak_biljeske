Osnovni zadaci (riješeni su ~~precrtani~~):
1. ~~Upload datoteka!~~
   ~~upload, view, download, delete, update popisa nakon dodavanja ili brisanja~~
1. Security i login!
1. Mogućnost više kategorija za jednu bilješku (preurediti bazu, stupac kategorijaid neće biti u tablici biljeske
   nego će trebati nova tablica za many-to-many relationship biljeskaid, kategorijaid)
1. Ne dopušta se bilješka bez ijedne kategorije.
1. Paginacija (Prvo s dohvaćanjem svih podataka, kasnije s parcijalnim SQL upitima).
1. Pamti se vrijeme i korisnik za bilješku. Prikaz toga u tablici.
1. ~~Prikaz bilješki po kategoriji~~
1. Korištenje udaljene baze na render.com. (Trenutna lokalna baza je na [biljeske_app.sql](biljeske_app.sql))
1. Pretraživanje bilješki prema tekstu. (SQL FULLTEXT indeksi)
1. Bi li sve bilješke trebale biti vidljive svim korisnicima
   ili svakom korisniku samo njegove?

Dodatni zadaci:
1. Pozabaviti se s deprecated stvarima u kodu (npr. subscribe).
1. Pozabaviti se s duplikacijama u kodu.
1. Pozabaviti se s private, public, protected.
1. Provjeriti izazivaju li asinkroni pozivi funkcija još neki problem.
   (Morao sam osigurati da se prvo dohvati popis kategorija i tek onda bilješki u popis-biljeski.component)
1. Vizualno i funkcionalno uređivanje.
1. Slučajevi kad nemam dobar error handling i exceptions (npr. @DeleteMapping("/biljeska/{id}")).
1. SpringZadatakBiljeskeApplicationTests, testovi na frontendu i zajednički testovi cijele aplikacije.
1. Kako izgleda na mobitelu?
1. Upload više datoteka odjednom.
1. Drag and drop datoteka.
1. .gitignore i isključiti dosad praćene nepotrebne konfiguracije