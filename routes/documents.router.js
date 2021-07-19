const jwt = require("jsonwebtoken");
const documentRouter = require("express").Router();

const { auth, isAdmin } = require("../utils/functions");

const {
  getAllDocuments,
  createDocument,
  filterDocuments,
  deleteDocument,
  getDocument,
  updateDocument,
} = require("../controllers/documents.controller");

documentRouter.get("/", getAllDocuments);
documentRouter.post("/", createDocument);
documentRouter.get("/filter", auth, isAdmin, filterDocuments);
documentRouter.get("/:documentId", getDocument);
documentRouter.delete("/:documentId", deleteDocument);
documentRouter.put("/:documentId", updateDocument);

module.exports = documentRouter;
