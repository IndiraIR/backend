const documentsModel = require("../models/documents.model");
const { handdleError } = require("../utils/functions");

function getAllDocuments(req, res) {
  documentsModel
    .find()
    .populate("artwork")
    .populate("contactsId", "name")
    .then((documents) => {
      res.json(documents);
    })
    .catch((err) => handdleError(err, res));
}

function createDocument(req, res) {
  console.log(req.body);
  documentsModel
    .create(req.body)
    .then((document) => {
      res.json(document);
    })
    .catch((err) => handdleError(err, res));
}

function filterDocuments(req, res) {
  let queryArr = [];
  //req.query.min & req.query.max price: { gt: req.query.min, lte: req.query.max}
  if (req.query.documentType)
    queryArr.push({
      documentType: { $regex: req.query.documentType, $options: "i" },
    });
  if (req.query.price) queryArr.push({ price: { $lte: req.query.price } });
  documentsModel
    .find({ $or: queryArr })
    .populate("artworks", "title")
    .populate("artist", "artistName")
    .then((documents) => {
      res.json(documents);
    })
    .catch((err) => handdleError(err, res));
}

function getDocument(req, res) {
  documentId = req.params.documentId;
  documentsModel
    .findById(documentId)
    .populate("artworks", "title")
    .then((document) => {
      res.json(document);
    })
    .catch((err) => handdleError(err, res));
}

function deleteDocument(req, res) {
  documentsModel
    .deleteOne({ _id: req.params.documentId })
    .then((document) => {
      res.json(document);
    })
    .catch((err) => handdleError(err, res));
}

function updateDocument(req, res) {
  documentsModel
    .findByIdAndUpdate(req.params.documentId, req.body, {
      new: true,
      runValidators: true,
    }) //returnNewDocument : true
    //save?
    .then((document) => res.json(document))
    .catch((err) => handdleError(err, res));
}

module.exports = {
  getAllDocuments,
  createDocument,
  filterDocuments,
  deleteDocument,
  getDocument,
  updateDocument,
};
