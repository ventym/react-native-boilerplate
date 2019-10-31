export interface IResponseSuccess<T> {
    success: true;
    data: T;
}

export interface IResponseFailed {
    success: false;
    error: string;
}

export type IResponse<T> = IResponseSuccess<T> | IResponseFailed;

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
