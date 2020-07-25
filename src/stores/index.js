import * as firebase from "firebase/app";
import { configure } from 'mobx';
import FunctionalityStore from './FunctionalityStore';


configure({enforceActions: "observed"});

class RootStore {
    constructor() {
        var firebaseConfig = {
            apiKey: process.env.REACT_APP_apiKey,
            authDomain: process.env.REACT_APP_authDomain,
            databaseURL: process.env.REACT_APP_databaseURL,
            projectId: process.env.REACT_APP_projectId,
            storageBucket: process.env.REACT_APP_storageBucket,
            messagingSenderId: process.env.REACT_APP_messagingSenderId,
            appId: process.env.REACT_APP_appId
          };
        // Initialize Firebase
        this.firebase = firebase.initializeApp(firebaseConfig);
        this.functionalityStore = new FunctionalityStore(this);
    
    }
}

const rootStore = new RootStore();

export {rootStore}

export default RootStore;