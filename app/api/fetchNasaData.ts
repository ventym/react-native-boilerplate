import { AxiosRequestConfig } from 'axios';

import nasaApi from 'app/api/nasaApi';
import { IApiResponse, IFetchNasaDataResponse } from 'app/api/types';
import { INasaFetchDataSuccessPayload } from 'app/actions/types';
// import { INasaPhoto, INasaCamera, INasaRover } from 'app/state/types';
import config from 'react-native-config';


const fetchNasaData = async (): Promise<IApiResponse<INasaFetchDataSuccessPayload>> => {
    try {
        const request: AxiosRequestConfig = {
            method: 'GET',
            url: '/rovers/curiosity/photos',
            params: {
                'sol': 1001,
                // 'camera': '',
                'page': 1,
                'api_key': config.NASA_API_KEY || '',
            },
        };
        const response = await nasaApi.request<IFetchNasaDataResponse>(request);

        if (response.status !== 200) {
            return {
                success: false,
                error: 'Response error',
            };
        }

        if (!validate(response.data)) {
            return {
                success: false,
                error: 'Validation error',
            };
        }

        return {
            success: true,
            data: convert(response.data),
        };

    } catch(error) {
        return {
            success: false,
            error: 'Request error',
        };
    }
};

export default fetchNasaData;

// TODO
const validate = (responseData: IFetchNasaDataResponse): boolean => {
    return true;
};

const convert = (responseData: IFetchNasaDataResponse): INasaFetchDataSuccessPayload => {
    const result: INasaFetchDataSuccessPayload = {
        photoList: {},
        photoIdList: [],
        cameraList: {},
        cameraIdList: [],
        roverList: {},
        roverIdList: [],
    };

    return responseData.photos.reduce<INasaFetchDataSuccessPayload>((draft, photo) => {
        const roverId = photo.camera.rover_id.toString();
        if (draft.roverList[roverId] === undefined) {
            draft.roverList[roverId] = {
                id: roverId,
                name: photo.rover.name,
                status: photo.rover.status,
                landingDate: photo.rover.landing_date,
                launchDate: photo.rover.launch_date,
                maxDate: photo.rover.max_date,
                maxSol: photo.rover.max_sol,
                totalPhotos: photo.rover.total_photos,
                cameraIdList: [], // TODO
            };
            draft.roverIdList.push(roverId);
        }

        const cameraId = photo.camera.id.toString();
        if (draft.cameraList[cameraId] === undefined) {
            const cameraRoverId = photo.camera.rover_id.toString();
            draft.cameraList[cameraId] = {
                id: cameraId,
                name: photo.camera.name,
                fullName: photo.camera.full_name,
                roverId: cameraRoverId,
                roverName: draft.roverList[cameraRoverId].name || '',
            };
            draft.cameraIdList.push(cameraId);
        }

        const photoId = photo.id.toString();
        draft.photoList[photo.id] = {
            id: photoId,
            imgSrc: photo.img_src,
            loadStatus: '',
            sol: photo.sol,
            earthDate: photo.earth_date,
            cameraId: cameraId,
            cameraFullName: draft.cameraList[cameraId].fullName || '',
            roverId: roverId,
            roverName: draft.roverList[roverId].name || '',
        };
        draft.photoIdList.push(photoId);

        return draft;
    }, result); 
};
