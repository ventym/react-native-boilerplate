import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IState } from 'app/state/types';
import i18next from 'app/i18n';

const changeLanguage = (): ThunkAction<void, IState, undefined, AnyAction> => async (dispatch, getState) => {
    const lang = i18next.language === 'en' ? 'ru' : 'en';
    await i18next.changeLanguage(lang);
};

export default changeLanguage;
