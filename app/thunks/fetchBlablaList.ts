import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import actions from 'app/actions';
import { IState } from 'app/state/types';
import { default as apiFetchBlablaList } from 'app/api/fetchBlablaList';
import i18n from 'app/i18n';

const fetchBlablaList = (): ThunkAction<Promise<void>, IState, {}, AnyAction> => async (dispatch) => {
    dispatch(actions.blabla.fetchListStarted());

    const response = await apiFetchBlablaList();

    if (response.success) {
        dispatch(actions.blabla.fetchListSuccess(response.data));
    } else {
        dispatch(actions.appMessage.add({
            type: 'ERROR',
            text: i18n.t('AppMessage:sampleError'),
        }));
        dispatch(actions.appMessage.add({
            type: 'WARN',
            text: i18n.t('AppMessage:cannotFetchBlablaList'),
        }));
        dispatch(actions.blabla.fetchListFailed());
    }
};

export default fetchBlablaList;
