import { Image } from 'react-native';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import actions from 'app/actions';
import { IState, INasaPhoto } from 'app/state/types';

const fetchNasaImages = (): ThunkAction<Promise<void>, IState, {}, AnyAction> => async (dispatch, getState) => {
    const photoList = Object.values(getState().nasa.photoList);
    const photoUrlList = photoList.map(photo => photo.imgSrc);

    const cachedUrlList = Image.queryCache ? await Image.queryCache(photoUrlList) : {};
    // console.log('cachedUrlList', cachedUrlList);

    photoList.forEach(async (photo) => {
        if (cachedUrlList[photo.imgSrc] === undefined) {
            dispatch(actions.nasa.changePhotoLoadStatus({
                photoId: photo.id,
                loadStatus: 'LOADING',
            }));
    
            const result = await prefetchImage(photo);

            if (result) {
                dispatch(actions.nasa.changePhotoLoadStatus({
                    photoId: photo.id,
                    loadStatus: 'LOADED',
                }));
            } else {
                dispatch(actions.nasa.changePhotoLoadStatus({
                    photoId: photo.id,
                    loadStatus: 'NOT_LOADED',
                }));
            }
        } else {
            dispatch(actions.nasa.changePhotoLoadStatus({
                photoId: photo.id,
                loadStatus: 'LOADED',
            }));
        }
    });
};

export default fetchNasaImages;

const prefetchImage = async (photo: INasaPhoto): Promise<boolean> => {
    try {
        const result = await Image.prefetch(photo.imgSrc);
        // console.log('prefetchImage', photo.id, result);
        return result;

    } catch (error) {
        // console.log('prefetchImage error', photo.id, error);
        return false;
    }
};
