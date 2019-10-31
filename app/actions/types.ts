import {
    IAppMessageType,
    INasaRover,
    INasaPhoto,
    INasaCamera,
    INasaPhotoLoadStatus,
} from "app/state/types";

export interface IAppMessageAddPayload {
    lifetime?: number;
    type: IAppMessageType;
    text: string;
}

export interface INasaFetchDataSuccessPayload {
    photoList: Record<string, INasaPhoto>;
    photoIdList: string[];
    cameraList: Record<string, INasaCamera>;
    cameraIdList: string[];
    roverList: Record<string, INasaRover>;
    roverIdList: string[];
}

export interface INasaChangePhotoLoadStatusPayload {
    photoId: string;
    loadStatus: INasaPhotoLoadStatus;
}
