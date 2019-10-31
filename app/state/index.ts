import { createStore, Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { IState } from 'app/state/types';
import reducer from 'app/state/reducers';
import enhancer from 'app/state/middlewares';

const buildState = (onCreate?: (dispatch: ThunkDispatch<IState, {}, AnyAction>) => void) => {
    const store = createStore(reducer, enhancer);
    onCreate && onCreate(store.dispatch);

    return store;
}

export default buildState;
