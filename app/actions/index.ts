import { actionCreatorFactory } from 'typescript-fsa';

import { IClient } from 'app/state/types';
import {
    IAppMessageAddPayload,
    INasaFetchDataSuccessPayload,
    INasaChangePhotoLoadStatusPayload,
} from 'app/actions/types';

const settingsAction = actionCreatorFactory('settings');
const appMessageAction = actionCreatorFactory('appMessage');
const clientAction = actionCreatorFactory('client');
const nasaAction = actionCreatorFactory('nasa');

const actions = {
    settings: {
        toggleTheme: settingsAction('toggleTheme'),
    },
    appMessage: {
        add: appMessageAction<IAppMessageAddPayload>('add'),
        delete: appMessageAction<string>('delete'),
    },
    client: {
        fetchListStarted: clientAction('fetchListStarted'),
        fetchListSuccess: clientAction<IClient[]>('fetchListSuccess'),
        fetchListFailed: clientAction('fetchListFailed'),
    },
    nasa: {
        fetchDataStarted: nasaAction('fetchDataStarted'),
        fetchDataSuccess: nasaAction<INasaFetchDataSuccessPayload>('fetchDataSuccess'),
        fetchDataFailed: nasaAction('fetchDataFailed'),
        changePhotoLoadStatus: nasaAction<INasaChangePhotoLoadStatusPayload>('changePhotoLoadStatus'),
    },
};

export default actions;
