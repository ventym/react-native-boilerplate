import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import actions from 'app/actions';
import { IState } from 'app/state/types';
import { default as apiFetchBlablaList } from 'app/api/fetchBlablaList';

const fetchBlablaList = (): ThunkAction<Promise<void>, IState, {}, AnyAction> => async (dispatch) => {
    dispatch(actions.blabla.fetchListStarted());

    const response = await apiFetchBlablaList();

    if (response.success) {
        dispatch(actions.blabla.fetchListSuccess(response.data));
    } else {
        dispatch(actions.appMessage.add({
            type: 'WARN',
            text: 'Не удалось загрузить данные',
        }));
        dispatch(actions.blabla.fetchListFailed());
    }
};

export default fetchBlablaList;
