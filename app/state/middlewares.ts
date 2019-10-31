import { applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';

const middlewareList: Middleware[] = [
    thunk,
];

if (__DEV__) {
    middlewareList.push(immutableStateInvariantMiddleware());
    middlewareList.push(createLogger({
        diff: true,
        collapsed: true,
    }));
}

const enhancer = applyMiddleware(...middlewareList);

export default enhancer;
