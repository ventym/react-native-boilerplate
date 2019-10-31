import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';

import actions from 'app/actions';
import { IClientState, IClient } from 'app/state/types';

const initialState: IClientState = {
    list: [],
    isLoaded: false,
    isLoading: false,
};

const client = reducerWithInitialState(initialState)
.case(actions.client.fetchListStarted, produce((draft: IClientState) => {
    draft.isLoading = true;
}))
.case(actions.client.fetchListSuccess, produce((draft: IClientState, payload: IClient[]) => {
    draft.isLoading = false;
    draft.isLoaded = true;
    draft.list = payload;
}))
.case(actions.client.fetchListFailed, produce((draft: IClientState) => {
    draft.isLoading = false;
}))
.build();

export default client;
