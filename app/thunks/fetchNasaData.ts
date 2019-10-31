import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import actions from 'app/actions';
import thunks from 'app/thunks';
import { IState } from 'app/state/types';
import api from 'app/api';
import i18n from 'app/i18n';

const fetchNasaData = (): ThunkAction<Promise<void>, IState, {}, AnyAction> => async (dispatch) => {
    dispatch(actions.nasa.fetchDataStarted());

    const response = await api.fetchNasaData();

    if (response.success) {
        dispatch(actions.nasa.fetchDataSuccess(response.data));
        dispatch(thunks.fetchNasaImages());
    } else {
        dispatch(actions.appMessage.add({
            type: 'WARN',
            text: i18n.t('AppMessage:cannotFetchNasaData'),
        }));
        dispatch(actions.nasa.fetchDataFailed());
    }
};

export default fetchNasaData;
