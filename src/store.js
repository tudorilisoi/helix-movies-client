import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './localStorage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protectedData';
import userReducer from './reducers/user';
import {searchReducer, profileSearchReducer, matchReducer} from './reducers/helixReducer';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        search: searchReducer,
        profileSearch: profileSearchReducer,
        // detail: detailReducer,
        // similar: similarReducer,
        match: matchReducer,
        userProfile: userReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;