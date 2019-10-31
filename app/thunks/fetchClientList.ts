import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import actions from 'app/actions';
import { IState } from 'app/state/types';
import api from 'app/api';
import i18n from 'app/i18n';

const fetchClientList = (): ThunkAction<Promise<void>, IState, {}, AnyAction> => async (dispatch) => {
    dispatch(actions.client.fetchListStarted());

    const response = await api.fetchClientList();

    if (response.success) {
        dispatch(actions.client.fetchListSuccess(response.data));
    } else {
        // dispatch(actions.appMessage.add({
        //     type: 'ERROR',
        //     text: i18n.t('AppMessage:sampleError'),
        // }));
        dispatch(actions.appMessage.add({
            type: 'WARN',
            text: i18n.t('AppMessage:cannotFetchClientList'),
        }));
        dispatch(actions.client.fetchListFailed());
    }
};

export default fetchClientList;
