import { combineReducers } from 'redux';

import { IState } from 'app/state/types';
import settings from 'app/state/reducers/settings';
import appMessage from 'app/state/reducers/appMessage';
import client from 'app/state/reducers/client';
import nasa from 'app/state/reducers/nasa';

const reducer = combineReducers<IState>({
    settings,
    appMessage,
    client,
    nasa,
});

export default reducer;
