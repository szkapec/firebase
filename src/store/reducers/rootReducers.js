import projectReducer from './projectReducer';
import authReducer from './authReducer'; 
import { combineReducers  } from 'redux' //4
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducers = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})
export default rootReducers;