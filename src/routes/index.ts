import { Request, Response, NextFunction } from 'express';
import express from 'express';
import pg from '@/services/pg'
import stops from '@/routes/stops';

// instanciate the router
let router = express.Router();

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
router.get('/', (req: Request, res: Response) => {
  console.log(pg);
   res.json({
      'message': 'This is the root of the api. Examine a sub endpoint for details',
   });
})
/**
 * Just because I can
 */
router.get('/coffee', (req: Request, res: Response) => {
   res.status(418).send({
      message: 'teapots does not make coffee'
   })
})

router.use('/stops', stops);

export default router;