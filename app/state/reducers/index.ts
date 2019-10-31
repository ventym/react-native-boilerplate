import { combineReducers } from 'redux';

import { IState } from 'app/state/types';
import appMessage from 'app/state/reducers/appMessage';
import client from 'app/state/reducers/client';

const reducer = combineReducers<IState>({
    appMessage,
    client,
});

export default reducer;
