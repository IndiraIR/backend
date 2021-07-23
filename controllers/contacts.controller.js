const contactsModel = require("../models/contacts.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { handleError } = require("../utils/functions");

function getAllContacts(req, res) {
  contactsModel
    .find()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((err) => handdleError(err, res));
}

function createContact(req, res) {
   contactsModel
    .create(req.body)
    .then((contact) => {
        console.log(contact);
      res.json(resContact);
    })
    .catch((err) => {
      res.json(err);
    });
}

function filterContacts(req, res) {
  let queryArr = [];
  if (req.query.name)
    queryArr.push({ name: { $regex: req.query.name, $options: "i" } });
  if (req.query.type)
    queryArr.push({ type: { $regex: req.query.type, $options: "i" } });
  contactsModel
    .find({ $or: queryArr })
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((err) => res.json(err));
}

function getContact(req, res) {
  contactId = req.params.contactId;
  console.log(contactId);
  contactsModel
    .findById(contactId)
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => res.json(err));
}

function deleteContact(req, res) {
  contactsModel
    .deleteOne({ _id: req.params.contactId })
    .then((contactId) => {
      res.json(contactId);
    })
    .catch((err) => handdleError(err, res));
}

function updateContact(req, res) {
  contactsModel
    .findByIdAndUpdate(req.params.contactId, req.body, {
      new: true,
      runValidators: false,
    })
    .then((contact) => {
      res.json(contact)
    })
    .catch((err) => handdleError(err, res));
}

module.exports = {
  getAllContacts,
  createContact,
  filterContacts,
  deleteContact,
  getContact,
  updateContact,
};
