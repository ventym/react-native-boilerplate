export interface IApiResponseSuccess<T> {
    success: true;
    data: T;
}

export interface IApiResponseFailed {
    success: false;
    error: string;
}

export type IApiResponse<T> = IApiResponseSuccess<T> | IApiResponseFailed;

// API types:

export interface IFetchClientListResponse {
    "page": number,
    "per_page": number,
    "total": number,
    "total_pages": number,
    "data": {
        "id": number,
        "email": string,
        "first_name": string,
        "last_name": string,
        "avatar": string,
    }[],
}

export interface IFetchNasaDataResponse {
    "photos": {
        "camera": {
            "id": number; // 20
            "name": string; // "FHAZ"
            "rover_id": number; // 5
            "full_name": string; // "Front Hazard Avoidance Camera"
        };
        "earth_date": string; // "2015-05-30"
        "id": number; // 102693
        "img_src": string; // "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
        "rover": {
            "cameras": {
                "name": string; // "FHAZ",
                "full_name": string; // "Front Hazard Avoidance Camera"
            }[];
            "id": number; // 5
            "landing_date": string; // "2012-08-06"
            "launch_date": string; // "2011-11-26"
            "max_date": string; // "2019-09-28"
            "max_sol": number; // 2540
            "name": string; // "Curiosity"
            "status": string; // "active"
            "total_photos": number; // 366206
        };
        "sol": number; // 1000
    }[];
}
