import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';
import cuid from 'cuid';

import actions from 'app/actions';
import { IAppMessageState, IAppMessage } from 'app/state/types';
import { IAppMessageAddPayload } from 'app/actions/types';

const DEFAULT_APP_MESSAGE_LIFETIME = 15000; // ms

const initialState: IAppMessageState = {
    list: [],
};

const appMessage = reducerWithInitialState(initialState)
.case(actions.appMessage.add, produce((draft: IAppMessageState, payload: IAppMessageAddPayload) => {
    draft.list.push({
        id: cuid(),
        createTimestamp: Date.now(),
        lifetime: payload.lifetime || DEFAULT_APP_MESSAGE_LIFETIME,
        type: payload.type,
        text: payload.text,
    });
}))
.case(actions.appMessage.delete, produce((draft: IAppMessageState, appMessageId: string) => {
    draft.list = draft.list.filter(appMessage => appMessage.id !== appMessageId);
}))
.build();

export default appMessage;
