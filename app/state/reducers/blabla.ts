import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';

import actions from 'app/actions';
import { IBlablaState, IBlabla } from 'app/state/types';

const initialState: IBlablaState = {
    list: [],
    isLoaded: false,
    isLoading: false,
};

const blabla = reducerWithInitialState(initialState)
.case(actions.blabla.fetchListStarted, produce((draft: IBlablaState) => {
    draft.isLoading = true;
}))
.case(actions.blabla.fetchListSuccess, produce((draft: IBlablaState, payload: IBlabla[]) => {
    draft.isLoading = false;
    draft.isLoaded = true;
    draft.list = payload;
}))
.case(actions.blabla.fetchListFailed, produce((draft: IBlablaState) => {
    draft.isLoading = false;
}))
.build();

export default blabla;
