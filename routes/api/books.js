const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  // ! if the route is hit with a get then it will do this 
  .get(booksController.findAll)
  // ! or if the route is hit with this it will do this 
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router
  .route(`/search/:title`)
  .get(booksController.search)

module.exports = router;


