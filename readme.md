# Steps

https://www.npmjs.com/package/react-router - npm
https://reactrouter.com/en/main - docs

1. `npm i react-router-dom `
2. prideti BrowserRouter i main.jsx `import { BrowserRouter } from 'react-router-dom';`
3. susikurti Routes ten kur bus generuojami koponentai.
4. Navigacijai naudojam Link ir NavLink komponentus.

## eslint

1. `npm init @eslint/config`

## styled

1. npm i styled-components

## mini uzd

1.  padaryti kad /books adresas parodytu BooksList.jsx komponenta
2.  // padaryti kad /books/1 adresas parodytu SingleBookPage.jsx komponenta
3.  prideti books i Headerio navigacija
4.  // sugeneruoti BookItems is bookData masyvo
    // atvaizduoti tik title ir metus
5.  BookItems turi buti nuorodos elementas kuris veda i SingleBookPage

## practice uzd

1. Sukurti NewBookPage.jsx
2. padaryti kad /books/new adresu atsidarytu NewBookPage komponentas
3. prideti i navigacija 'Add book' nuoroda.
4. NewBookPage butu forma su ivesties laukais, sukurti naujai knygai.
5. surinkti inputu reiksmes ir pateikimo metu iskonsologini naujos knygo objekta
