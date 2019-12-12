import { Request, Response, NextFunction } from 'express';
import express from 'express';
import Stops from '@/services/Stops';
import { IStops, IStopsSmall } from '@/types/IStops';

// instanciate the router
let router = express.Router();

/**
 * GET stops/:id returns a stop by its id
 */
router.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const retval: IStops = await Stops.get(id);
  res.status(200).send(retval);
});

/**
 * GET stops/typeahead/:term searches for a stop by name
 */
router.get('/typeahead/:term', async (req: Request, res: Response) => {
  const term: string = req.params.term;
  const retval: IStopsSmall = await Stops.typeahead(term);
  res.status(200).send(retval);
})

export default router;