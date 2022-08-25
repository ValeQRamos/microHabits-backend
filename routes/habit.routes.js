const router = require("express").Router();
const {verifyToken} = require('../middlewares/index')

const {
  allHabits,
  addingHabit,
  updateHabit,
  deleteHabit
}  = require('../controllers/habit.controller')

router.get('/allhabits',verifyToken, allHabits)

router.post('/addHabit', verifyToken ,addingHabit)

router.patch('/edit-habit/:id', verifyToken ,updateHabit)

router.delete('/delete-habit/:id', verifyToken, deleteHabit)
module.exports = router;
