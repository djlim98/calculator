const router=require('express').Router();
const people=require('../controllers/people.controller')

router.post('/calculate',people.calculate);

module.exports = router;