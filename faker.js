const { address } = require("faker");
const faker = require("faker");

//Collections BD
const data = {
  employees: [],
  artists: [],
  artworks: [],
  contacts: [],
  documents: [],
  auctions: [],
  wishlists: [],
};

function fakeData() {
  var name,
    surname,
    image,
    email,
    telephone,
    street,
    city,
    country,
    postcode,
    type,
    note,
    title,
    documenttype,
    date,
    pricebought,
    currencybought,
    datebought,
    namefile;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  for (let i = 0; i < 25; i++) {
    name = faker.name.firstName();
    surname = faker.name.lastName();
    image = faker.image.avatar();
    email = faker.internet.email();
    telephone = faker.phone.phoneNumberFormat();
    addss = faker.address.streetAddress();

    street = faker.address.streetName();
    city = faker.address.city();
    postcode = faker.address.zipCodeByState();
    country = faker.address.country();
    note = faker.lorem.paragraph(2);
    type = "User";
    password = faker.internet.password();
    year = random(1700, 2030);

    title = faker.lorem.sentence();
    documenttype = "Contract";
    date = faker.date.soon();
    pricebought = faker.finance.amount();
    currencybought = faker.finance.currencyCode();
    datebought = faker.date.past();
    datebought = "1900-02-05";
    namefile = faker.random.image();
    website = faker.internet.url();
    medium = faker.lorem.word();
    width = random(50, 500);
    height = random(50, 1500);
    depth = random(20, 60);
    artwork = "https://source.unsplash.com/collection/881002";

    data.artworks.push({
      title: title,
      year: year,
      stockNo: password,
      medium: medium,
      location: "Storage",
      width: width,
      height: height,
      depth: 0,
      condition: "Good",
      status: "Available",
      type: "Painting",
      image: artwork,
      priceoffered: height,
      currencyoffered: "EUR",
      pricebought: width,
      currencybought: "EUR",
      datebought: datebought,
      currencysold: height,
      datesold: date,
      publish: true,
      artistId: [],
      author: "Anonymus",
    });
  }
  return data;
}

module.exports = fakeData;
//console.log(fakeData());
