import { actionCreatorFactory } from 'typescript-fsa';

import { IClient } from 'app/state/types';
import { IAppMessageAddPayload } from 'app/actions/types';

const appMessageAction = actionCreatorFactory('appMessage');
const clientAction = actionCreatorFactory('client');

const actions = {
    appMessage: {
        add: appMessageAction<IAppMessageAddPayload>('add'),
        delete: appMessageAction<string>('delete'),
    },
    client: {
        fetchListStarted: clientAction('fetchListStarted'),
        fetchListSuccess: clientAction<IClient[]>('fetchListSuccess'),
        fetchListFailed: clientAction('fetchListFailed'),
    },
};

export default actions;
