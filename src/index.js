//https://github.com/Sv1nnet/mario-plan-migrated-on-redux601-and-firebase300-alpha/blob/after-migration/src/index.js
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {

//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2020, 7, 17);
//     }
//   }
// }

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore } from 'redux'; //1
import { createStore, applyMiddleware, compose } from 'redux'; //10?


import rootReducers from './store/reducers/rootReducers'; //5
import { Provider } from 'react-redux'; //dostawca
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import { reactReduxFirebase, getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import  fbConfig  from './config/fbConfig';
import firebase from 'firebase/app'
// const store = createStore(); //2
// const store = createStore(rootReducers); //6



const store = createStore(rootReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase), // still need this line to get access to firestore via getFirestore function (in projectActions, for example)
  ));
  const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true,// Firestore for Profile instead of Realtime DB
    
  };
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // Create firestore instead of craete it in fbConfig.js
  };
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider  {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
      </Provider> ,
  document.getElementById('root')
);

