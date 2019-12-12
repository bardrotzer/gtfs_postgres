export interface IStops {
  [index: number]: { 
    stop_id: string,
    stop_code?: string,
    stop_name: string,
    stop_desc?: string,
    stop_lat: number,
    stop_lon: number,
    zone_id?: string,
    stop_url?: string,
    location_type?: string,
    parent_station?: string,
    wheelchair_boarding?: string,
    stop_timezone?: string,
    platform_code?: string,
    vehicle_type?: number,
    location_country?: string
  };
}

export interface IStopsSmall {
  [index: number]: { 
    stop_id: string,
    stop_name: string
  }
}