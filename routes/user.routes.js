const router = require("express").Router();

// User controllers
const {
  getLoggedUser,
  getUserById,
  editProfile,
  deleteProfile
} = require("../controllers/user.controller");

// middlewares
const { verifyToken } = require("../middlewares/index");

// Read user route
router.get("/profile", verifyToken, getLoggedUser);

// Read other user route
router.get('/:id/profile',verifyToken, getUserById)

// Update user route
router.patch('/edit-profile',verifyToken, editProfile)

// Delete user route
router.delete('/delete-profile', verifyToken , deleteProfile)

module.exports = router;
