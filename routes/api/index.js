const router = require("express").Router();
const booksRoute = require("./booksRoute")

router.use("/books", booksRoute);
module.exports = router;

