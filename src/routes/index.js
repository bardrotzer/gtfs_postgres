import express from 'express';
let router = express.Router();
import Stops from '@/controllers/Stops'


/**
 * @typedef {Object} params
 * @property {String} term - The term to search for
 *
 * @typedef {Object} req
 * @property {params}
 *
 *
 */

/* GET home page. */
router.get('/', (req, res, next) => {
   let languages = [
    {
     language: "French"
    },
    {
     langauge: "Germans is here"
    }
];
res.json(languages);
});


router.post('/stops/search/', (req, res, next) => {
  const data = req.body;
  if (!data.query) {
    res.status(400).send({
      error: 'missing parameter query'
    });
  }

  Stops.search(req.body).then(r => {
    res.send(r);
  });
})
/**
 *
 * GET stops
 *
 */
router.get('/stops', (req, res, next) => {
  res.send([]);
});



   // res.json({
   //    "WALLA": req.params.searchterm
   // });
// });

export default router;