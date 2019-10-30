import { combineReducers } from 'redux';

import { IState } from 'app/state/types';
import appMessage from 'app/state/reducers/appMessage';
import blabla from 'app/state/reducers/blabla';

const reducer = combineReducers<IState>({
    appMessage,
    blabla,
});

export default reducer;
