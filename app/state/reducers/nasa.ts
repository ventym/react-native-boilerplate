import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';

import actions from 'app/actions';
import { INasaState, INasaPhoto, INasaCamera, INasaRover } from 'app/state/types';
import { INasaFetchDataSuccessPayload, INasaChangePhotoLoadStatusPayload } from 'app/actions/types';

const initialState: INasaState = {
    photoList: {},
    photoIdList: [],
    cameraList: {},
    cameraIdList: [],
    roverList: {},
    roverIdList: [],
    isLoaded: false,
    isLoading: false,
};

const nasaPhoto = reducerWithInitialState(initialState)
.case(actions.nasa.fetchDataStarted, produce((draft: INasaState) => {
    draft.isLoading = true;
}))
.case(actions.nasa.fetchDataSuccess, produce((draft: INasaState, payload: INasaFetchDataSuccessPayload) => {
    draft.isLoading = false;
    draft.isLoaded = true;
    draft.photoList = payload.photoList;
    draft.photoIdList = payload.photoIdList;
    draft.cameraList = payload.cameraList;
    draft.cameraIdList = payload.cameraIdList;
    draft.roverList = payload.roverList;
    draft.roverIdList = payload.roverIdList;
}))
.case(actions.nasa.fetchDataFailed, produce((draft: INasaState) => {
    draft.isLoading = false;
}))
.case(actions.nasa.changePhotoLoadStatus, produce((draft: INasaState, payload: INasaChangePhotoLoadStatusPayload) => {
    const photo = draft.photoList[payload.photoId];
    if (photo) {
        photo.loadStatus = payload.loadStatus;
    }
}))
.build();

export default nasaPhoto;
