# Colour-Ball v1 – fastställd specifikation

Digital kortlek för Färg-Ball. Åtta färgkort representerar klot 1–15: gul 1/9, blå 2/10, röd 3/11, lila 4/12, orange 5/13, grön 6/14, brun 7/15, svart 8. Alla får ett eller två kort; överblivna kort delas inte ut. Ingen färg delas till två spelare.

## Flöde

1. Spelare/inställningar: redigera namn, välj 1 eller 2 kort, starta utdelning.
2. Privat utdelning: en spelare i taget, neutral skärm med namn; kort visas endast vid avsiktlig nedhållning. Fortsätt till nästa spelare. Sista spelaren startar omgången.
3. Pågående omgång: spelarnamn utan färger. Tryck på namn för samma neutrala kortvisning. Markera utslagen efter bekräftelse, ångra möjlig. Utslagna behåller kort.
4. Ny omgång kräver bekräftelse, behåller spelarna, återställer utslagningar och blandar om.

Spara spelare, antal kort och pågående omgång lokalt. Vid omstart visas Fortsätt omgång, aldrig öppna kort. Ingen server, konto eller spårning. PWA ska fungera offline efter första laddning. Svenskt gränssnitt, mörk layout, stora biljardbollar med klotnummer, diskret avsändare Åkermyntan. Publik gratis distribution via GitHub Pages och QR-kod.

## Integritet

Ett tryck på spelarnamn visar aldrig kort. Kort döljs när fingret släpps, appen tappar fokus eller sidan lämnas. Den som avsiktligt öppnar en annans kort kan dock se det; detta är inte autentisering.
