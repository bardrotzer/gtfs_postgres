import { isString, has } from 'lodash';
import { Request  } from 'express';

export const getName = (req: Request) => {
  const body = req.body;
  if(!has(body, 'stationname')) {
    return 'missing property stationname';
  }

  if(!isString(body.stationname) || body.stationname === '') {
    return 'station name must be a string';
  }
  return '';
}
