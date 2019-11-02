import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { IState, IAppMessageType } from 'app/state/types';
import actions from 'app/actions';
import i18next from 'app/i18n';

const generateRandomAppMessage = (): ThunkAction<void, IState, undefined, AnyAction> => async (dispatch, getState) => {
    const randomNumber = Math.floor(Math.random() * 3);
    const type: IAppMessageType = randomNumber === 0 ? 'WARN' : randomNumber === 1 ? 'INFO' : 'ERROR';
    const text = i18next.t(`randomAppMessage:${type}`);

    dispatch(actions.appMessage.add({
        type,
        text,
    }));
};

export default generateRandomAppMessage;
