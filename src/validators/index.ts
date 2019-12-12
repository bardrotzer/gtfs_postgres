import { Request, Response, NextFunction } from 'express';
import factory from '@/validators/factory';
// import { body, validationResult } from 'express-validator';

// export const getName = 
export default  (req: Request, res: Response, next: NextFunction) => {
  const validator = factory(`${req.baseUrl}${req.path}`);
  const validadorResponse: string = validator(req);
  if(validadorResponse === '') {
    next();
  } else {
    res.status(400).send({
      error: validadorResponse
    });
  }
};