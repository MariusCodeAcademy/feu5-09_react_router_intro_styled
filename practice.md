# Practice

1. susikuriam nauja projekta nuo starterio arba su vite. 10_react_formik_validations
2. sukurti 3 puslapius. Home, About, Contact.
3. Igalinti navigajija su react-router.
4. App.jsx aprasyti Routes.
   - / => home
   - /about => About
   - /contact => Contact
5. Sukurti Navigacijos komponenta kuris tures nuorodas vaikscioti po puslapius
6. Sukurti contact form Componenta ir ikelti ji i Contact puslapi. dizainas ir laukai https://colorlib.com/etc/regform/colorlib-regform-5/
   ![](https://img001.prntscr.com/file/img001/aUJPVmlVSaactWQCd9w4KQ.png)

7. Forma valdom su formik. useFormik objekto pagalba susieti inputus ir ju atnaujinimo funkcijas.
8. Validuoti visus laukus:

- Vardas\*: (privaloma) Laukelis turi būti užpildytas ir susidaryti tik iš raidžių, maziausiai 3 simboliai.
- Pavardė\*: (privaloma) Laukelis turi būti užpildytas ir susidaryti tik iš raidžių maziausiai 3 simboliai.
- Įmonės pavadinimas\*: (privaloma) Laukelis turi būti užpildytas maziausiai 4 simboliai.
- El. paštas\*: (privaloma) Laukelis turi būti užpildytas teisingu el. pašto adresu.
- Telefono kodas\*: (privaloma) Laukelis turi būti užpildytas trimis skaitmenimis.
- Telefono numeris\*: (privaloma) Laukelis turi būti užpildytas ir susidaryti tik iš skaitmenų.
- Tema*: (privaloma) Reikia pasirinkti temą iš pasirinkimo sąrašo.
  *Privalomi laukeliai.

Papildoma informacija: formos laukai turi būti užpildyti teisingai, kad forma būtų išsiųsta. Jei kokie nors laukai neteisingai užpildyti, reikia pranešti apie tai ir neleisti siųsti formos.
