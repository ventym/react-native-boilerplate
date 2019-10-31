export interface IState {
    appMessage: IAppMessageState;
    client: IClientState;
    nasa: INasaState;
}

export interface IAppMessageState {
    list: IAppMessage[];
}

export interface IClientState {
    list: IClient[];
    isLoaded: boolean;
    isLoading: boolean;
}

export interface INasaState {
    photoList: Record<string, INasaPhoto>;
    photoIdList: string[];
    cameraList: Record<string, INasaCamera>;
    cameraIdList: string[];
    roverList: Record<string, INasaRover>;
    roverIdList: string[];
    isLoaded: boolean;
    isLoading: boolean;
}

// entities:

export type IAppMessageType = 'INFO' | 'WARN' | 'ERROR';

export interface IAppMessage {
    id: string;
    createTimestamp: number;
    lifetime: number;
    type: IAppMessageType;
    text: string;
}

export interface IClient {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
}

export type INasaPhotoLoadStatus = '' | 'LOADING' | 'LOADED' | 'NOT_LOADED';

export interface INasaPhoto {
    id: string; // "102693"
    earthDate: string; // "2015-05-30"
    imgSrc: string; // "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
    loadStatus: INasaPhotoLoadStatus;
    cameraId: string;
    cameraFullName: string;
    roverId: string;
    roverName: string;
    sol: number; // 1000
}

export interface INasaCamera {
    id: string; // "20"
    name: string; // "FHAZ"
    fullName: string; // "Front Hazard Avoidance Camera"
    roverId: string; // "5"
    roverName: string;
}

export interface INasaRover {
    id: string; // "5"
    landingDate: string; // "2012-08-06"
    launchDate: string; // "2011-11-26"
    maxDate: string; // "2019-09-28"
    maxSol: number; // 2540
    name: string; // "Curiosity"
    status: string; // "active"
    totalPhotos: number; // 366206
    // cameras: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
    cameraIdList: string[];
}
