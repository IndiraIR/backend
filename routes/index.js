const router = require("express").Router();

const authRouter = require("./auth.router");
const employeeRouter = require("./employees.router");
const contactRouter = require("./contacts.router");
const artistRouter = require("./artists.router");
const artworkRouter = require("./artworks.router");
const documentRouter = require("./documents.router");
const wishRouter = require("./wishlists.router");
const auctionRouter = require("./auctions.router");

router.use("/auth", authRouter);
router.use("/employees", employeeRouter);
router.use("/contacts", contactRouter);
router.use("/artists", artistRouter);
router.use("/artworks", artworkRouter);
router.use("/documents", documentRouter);
router.use("/wishs", wishRouter);
router.use("/auctions/", auctionRouter);

module.exports = router;
