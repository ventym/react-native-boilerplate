import { actionCreatorFactory } from 'typescript-fsa';

import { IBlabla } from 'app/state/types';
import { IAppMessageAddPayload } from 'app/actions/types';

const appMessageAction = actionCreatorFactory('appMessage');
const blablaAction = actionCreatorFactory('blabla');

const actions = {
    appMessage: {
        add: appMessageAction<IAppMessageAddPayload>('add'),
        delete: appMessageAction<string>('delete'),
    },
    blabla: {
        fetchListStarted: blablaAction('fetchListStarted'),
        fetchListSuccess: blablaAction<IBlabla[]>('fetchListSuccess'),
        fetchListFailed: blablaAction('fetchListFailed'),
    },
};

export default actions;
