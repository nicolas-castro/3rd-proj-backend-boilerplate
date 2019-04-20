const express = require('express');
const router  = express.Router();
const Phone   = require('../models/phone-model')

/* GET home page */
router.post('/phones', (req, res, next) => {
  const {brand, model, price, image, specs} = req.body;
  Phone.create({ brand, model, price, image, specs })
  .then(phoneDoc => res.json(phoneDoc))
  .catch(err => next(err));
});

router.get('/phones', (req, res, next)=> {
  Phone.find()
  .sort({ createdAt: -1 })
  .limit(10)
  // send the result from DB as JSON to front end
  .then( phonesFromDB => res.json(phonesFromDB))
  .catch( err => next(err) )
})

module.exports = router;
