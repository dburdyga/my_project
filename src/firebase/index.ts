import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import store from '@/store/index';
import router from '@/router';
import {RouteNames} from '@/router/RouteNames';
import {UtilService} from '@/common/services/UtilService';
import {UPDATE_CURRENT_USER} from '@/store/auth/mutation-types';




const config = {
    apiKey: 'AIzaSyC7JkmYFlHfJihdYKcaEShshQyY034E-vg',
    authDomain: 'frontend-school.firebaseapp.com',
    databaseURL: 'https://frontend-school.firebaseio.com',
    projectId: 'frontend-school',
    storageBucket: 'frontend-school.appspot.com',
    messagingSenderId: '570721181687',
};


const firebaseApp = firebase.initializeApp(config);

export const db = firebase.firestore(firebaseApp);
export const auth = firebase.auth(firebaseApp);
export const storage = firebase.storage(firebaseApp);

// update current user when the auth state changes
// and redirect to appropriate page
auth.onAuthStateChanged((user) => {
    if (user) {
        store.commit(UPDATE_CURRENT_USER, user);
        if (router.currentRoute.meta.requiresGuest) {
            router.push(UtilService.getRedirectPath(router.currentRoute));
        }
    } else {
        store.commit(UPDATE_CURRENT_USER, null);
        if (router.currentRoute.meta.requiresAuth) {
            router.push({
                name: RouteNames.Login,
                query: { redirect: router.currentRoute.fullPath },
            });
        }
    }
});
