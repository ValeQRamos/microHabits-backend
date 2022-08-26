const router = require("express").Router();
const { verifyToken } = require("../middlewares/index");
const {
  createBoard,
  getBoard,
  updateBoard
} = require("../controllers/visionBoard.controller");

router.post("/createVision", verifyToken, createBoard);

router.get("/myVision/:id", verifyToken, getBoard);

router.patch("/updateMyBoard/:id",verifyToken, updateBoard)

module.exports = router;
