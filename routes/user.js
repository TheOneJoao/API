const app = require('express');
const router = app.Router();

const userController = require('./../controllers/user');

// triggers the parameterized callback functions whenever the user routes to the parameter 'id'
router.param('id', userController.checkAuth);

router.route("/:id")
    //.get(userController.checkAuth, userController.checkID, userController.getUser) // more than one middleware
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

router.route("/")
    .post(userController.createUser);

module.exports = router;