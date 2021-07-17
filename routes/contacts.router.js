const jwt = require("jsonwebtoken");
const contactRouter = require("express").Router();
const { auth, isAdmin } = require("../utils/functions");

const {
  getAllContacts,
  createContact,
  filterContacts,
  deleteContact,
  getContact,
  updateContact,
} = require("../controllers/contacts.controller");

contactRouter.get("/", getAllContacts);
contactRouter.get("/filter", auth, isAdmin, filterContacts);
contactRouter.get("/:contactId", getContact);
contactRouter.post("/", createContact);
contactRouter.delete("/:contactId", deleteContact);
contactRouter.put("/:contactId", updateContact);

module.exports = contactRouter;
