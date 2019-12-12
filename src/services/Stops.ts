import db from '@/services/pg';
import { IStops, IStopsSmall } from '@/types/IStops';

export default class Stops  {
  static async get(id: string) : Promise<IStops> {
    const data: IStops = await db.one('select * from stops where stop_id like $1', [id]);
    return data;
  }

  static async typeahead(term: string): Promise<IStopsSmall> {
    const data: IStopsSmall = await db.manyOrNone(`SELECT DISTINCT resolvedname, stop_id FROM stop_names WHERE searchterm LIKE '${term}%'`);
    return data;
  }

  static async getStationsByName(stop: string): Promise<IStops> {
    const data: IStops = await db.manyOrNone('select * from stops where stop_name like $1', [stop]);
    return data;
  }
}