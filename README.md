# MANAGEMENT SYSTEM FOR ART GALLERIES 🖼️

&nbsp;

Presenting a complete management system for art businesses that allows to easily view, record and have control of

- stock 📕
- operations 📗
- sales admin 📒
- clients 📘

&nbsp;

This web-based solution is also intended to generate business intelligence by giving access to limited information to interested users following their signing up.

&nbsp;

## MODELS & RELATIONSHIPS 🔀

&nbsp;

<img width="1000" alt="Captura de pantalla 2021-06-04 a las 21 05 15" src="https://user-images.githubusercontent.com/77930436/120857074-a6cafb80-c578-11eb-98ec-e7410b31bf49.png">

_Please note, ✔ indicates the field is_ **_required_**.

&nbsp;

## ENDPOINTS 🔊

&nbsp;

### - AUTH

| METHOD | ENDPOINT   | TOKEN | AUTH | DESCRIPTION                  | BODY                                                                                                                                                                                           | QUERY | RETURNS                        |
| ------ | ---------- | ----- | ---- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------------------------------ |
| POST   | api/signUp | None  | None | Signs up for an account      | - Required: `name` `surname` `email` `telephone` `password` - Additional: `street` `city` `postcode` `country` `notes` `exhibitionsVisited` `artworkAcquired` `type` `image` `relatedContacts` | None  | Inputted information & `token` |
| GET    | api/logIn  | None  | None | Logs user into their account | - Required: `email` `password`                                                                                                                                                                 | None  | `token`                        |

&nbsp;

### - ARTWORKS

| METHOD | ENDPOINT                | TOKEN | AUTH                          | DESCRIPTION                            | BODY                                                                                                                                                                    | QUERY         | RETURNS                                                                         |
| ------ | ----------------------- | ----- | ----------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------- |
| GET    | api/artworks            | None  | None                          | Searches all artworks                  | None                                                                                                                                                                    | None          | All artworks' artists, titles and years                                         |
| GET    | api/artworks/:artworkId | None  | None                          | Finds a specific artwork               | None                                                                                                                                                                    | `artworkId`   | An artwork's artist, title and year                                             |
| GET    | api/artworks/auth       | Yes   | Required: `auth`              | Searches all artworks extended version | None                                                                                                                                                                    | None          | Extended technical information on all artworks including price and availability |
| GET    | api/artworks/filter     | Yes   | Required: `auth`              | Filters artworks                       | None                                                                                                                                                                    | `year` `type` | Filtered artworks by year and/or type                                           |
| POST   | api/artworks            | Yes   | Required: `auth` `isEmployee` | Creates an entry for an artwork        | - Required: `title` `dimensions` `stockNo` `medium` - Optional: `artistId` `year` `type` `image` `exhibitionHistory` `location` `condition` `status` `currency` `price` | None          | Inputted information                                                            |
| PUT    | api/artworks/:artworkId | Yes   | Required: `auth` `isEmployee` | Updates an entry for an artwork        | - Optional: `title` `dimensions` `stockNo` `medium` `artistId` `year` `type` `image` `exhibitionHistory` `location` `condition` `status` `currency` `price`             | `artworkId`   | Full artwork entry                                                              |
| DELETE | api/artworks/:artworkId | Yes   | Required: `auth` `isEmployee` | Deletes an artwork's entry             | None                                                                                                                                                                    | `artworkId`   |                                                                                 |

&nbsp;

### - ARTISTS

| METHOD | ENDPOINT              | TOKEN | AUTH                          | DESCRIPTION                            | BODY                                                                                                                                 | QUERY                  | RETURNS                                 |
| ------ | --------------------- | ----- | ----------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | --------------------------------------- |
| GET    | api/artists           | Yes   | Required: `auth` `isEmployee` | Searches all artists                   | None                                                                                                                                 | None                   | All artists                             |
| GET    | api/artists/:artistId | Yes   | Required: `auth` `isEmployee` | Finds a specific artist                | None                                                                                                                                 | `artistId`             | A specific artist's entry               |
| GET    | api/artists/filter    | Yes   | Required: `auth` `isEmployee` | Filters artists                        | None                                                                                                                                 | `artistName` `country` | Filtered artists by name and/or country |
| POST   | api/artists           | Yes   | Required: `auth` `isEmployee` | Creates an entry for an artist         | - Required: `artistName` `country` `email` `telephone` - Additional: `artworks` `dateOfBirth` `dateOfDeath` `website` `publications` | None                   | Inputted information                    |
| PUT    | api/artists/:artistId | Yes   | Required: `auth` `isEmployee` | Updates an entry for an artist         | - Optional: `artistName` `country` `email` `telephone` `artworks` `dateOfBirth` `dateOfDeath` `website` `publications`               | None                   | Full artist entry                       |
| PUT    | api/artists/:artistId | Yes   | Required: `auth` `isEmployee` | Adds publications to an artist's entry | -Required: `author` `title` - Optional: `year` `publisher` `signed` `type` `ISBN` `stock` `currency` `price`                         | `artistId`             | Full artist entry                       |
| DELETE | api/artists/:artistId | Yes   | Required: `auth` `isEmployee` | Deletes an artist's entry              | None                                                                                                                                 | `artistId`             |                                         |

&nbsp;

### - CONTACTS

| METHOD | ENDPOINT                | TOKEN | AUTH                       | DESCRIPTION                    | BODY                                                                                                                                                                                           | QUERY         | RETURNS                                  |
| ------ | ----------------------- | ----- | -------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------- |
| GET    | api/contacts            | Yes   | Required: `auth` `isAdmin` | Searches all contacts          | None                                                                                                                                                                                           | None          | All contacts                             |
| GET    | api/contacts/:contactId | Yes   | Required: `auth` `isAdmin` | Finds a specific contact       | None                                                                                                                                                                                           | `contactId`   | A specific contact's entry               |
| GET    | api/contacts/filter     | Yes   | Required: `auth` `isAdmin` | Filters contacts               | None                                                                                                                                                                                           | `name` `type` | Filtered contacts by name and/or country |
| POST   | api/contacts            | Yes   | Required: `auth` `isAdmin` | Creates an entry for a contact | - Required: `name` `surname` `email` `telephone` `password` - Additional: `street` `city` `postcode` `country` `notes` `exhibitionsVisited` `artworkAcquired` `type` `image` `relatedContacts` | None          | Inputted information                     |
| PUT    | api/contacts/:contactId | Yes   | Required: `auth`           | Updates an entry for a contact | - Optional: `name` `surname` `email` `telephone` `password` `street` `city` `postcode` `country` `notes` `exhibitionsVisited` `artworkAcquired` `type` `image` `relatedContacts`               | `contactId`   | Full contact entry                       |
| DELETE | api/contacts/:contactId | Yes   | Required: `auth` `isAdmin` | Deletes a contact's entry      | None                                                                                                                                                                                           | `contactId`   |                                          |

&nbsp;

### - DOCUMENTS

| METHOD | ENDPOINT                | TOKEN | AUTH                       | DESCRIPTION                     | BODY                                                                                                         | QUERY                  | RETURNS                                                                      |
| ------ | ----------------------- | ----- | -------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------- | ---------------------------------------------------------------------------- |
| GET    | api/documents           | Yes   | Required: `auth` `isAdmin` | Searches all documents          | None                                                                                                         | None                   | All documents                                                                |
| GET    | api/documents/:document | Yes   | Required: `auth` `isAdmin` | Finds a specific document       | None                                                                                                         | `documentId`           | A specific document's entry                                                  |
| GET    | api/documents/filter    | Yes   | Required: `auth` `isAdmin` | Filters documents               | None                                                                                                         | `documentType` `price` | Filtered documentsvby document type and price (equal or less to input price) |
| POST   | api/documents           | Yes   | Required: `auth` `isAdmin` | Creates an entry for a document | - Required: `documentType` `price` `documentNo` - Additional: `artwork` `artist` `date` `currency` `parties` | None                   | Inputted information                                                         |
| PUT    | api/documents/:document | Yes   | Required: `auth` `isAdmin` | Updates an entry for a shipment | - Optional: `documentNo` `documentType` `artwork` `artist` `date` `currency` `price` `parties`               | `documentId`           | Full shipment entry                                                          |

&nbsp;

## TECHNOLOGY & INSTALLATION 💻

&nbsp;

Technology employed: NPM, NodeJS, ExpressJS, MongoDB, Mongoose & Heroku

&nbsp;

```
//on local
git clone https://github.com/IndiraIR/gallery
cd gallery
npm i
nodemon index.js
```

&nbsp;

By Indira Izquierdo Rodríguez (@IndiraIR)
& Jorge Lorenzo-Santana (@jorlorsan)
