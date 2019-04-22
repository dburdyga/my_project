import {Module} from 'vuex';
import {
    ACCOUNT_DISPLAY_NAME,
    ACCOUNT_PHOTO_FILE,
    ACCOUNT_PHOTO_PREVIEW_URL,
    ACCOUNT_PHOTO_URL,
    IS_ACCOUNT_EDIT_MODE,
} from '@/store/account/getter-types';
import {
    RESET_ACCOUNT_EDIT_FORM,
    UPDATE_ACCOUNT_DISPLAY_NAME,
    UPDATE_ACCOUNT_EDIT_MODE,
    UPDATE_ACCOUNT_PHOTO_FILE, UPDATE_ACCOUNT_PHOTO_PREVIEW_URL,
    UPDATE_ACCOUNT_PHOTO_URL,
} from '@/store/account/mutation-types';
import {
    FINISH_ACCOUNT_EDIT,
    GET_ACCOUNT_PHOTO_URL,
    HANDLE_ACCOUNT_PHOTO_FILE_CHANGE,
    START_ACCOUNT_EDIT, SAVE_USER_ACCOUNT,
} from '@/store/account/action-types';
import {CURRENT_USER} from '@/store/auth/getter-types';
import {auth, storage} from '@/firebase';
import {UtilService} from '@/common/services/UtilService';
import {AccountService} from '@/common/services/AccountService';
import {UPDATE_CURRENT_USER} from '@/store/auth/mutation-types';

interface IAccountEditForm {
    displayName: string;
    photoFile: File | null;
    previewURL: string;
}

interface IAccountState {
    isEditMode: boolean;
    photoURL: string;
    editForm: IAccountEditForm;
}

const INITIAL_ACCOUNT_EDIT_FORM: IAccountEditForm = {
    displayName: '',
    photoFile: null,
    previewURL: '',
};

const accountState: Module<IAccountState, {}> = {
    state: {
        isEditMode: false,
        photoURL: '',
        editForm: {...INITIAL_ACCOUNT_EDIT_FORM},
    },
    actions: {
        [START_ACCOUNT_EDIT]({getters, commit}) {
            commit(UPDATE_ACCOUNT_EDIT_MODE, true);
            commit(UPDATE_ACCOUNT_DISPLAY_NAME, getters[CURRENT_USER]!.displayName || '');
        },
        [FINISH_ACCOUNT_EDIT]({getters, commit}) {
            commit(UPDATE_ACCOUNT_EDIT_MODE, false);
            commit(RESET_ACCOUNT_EDIT_FORM);
        },
        [GET_ACCOUNT_PHOTO_URL]({state, getters, commit}) {
            const currentUser = getters[CURRENT_USER];
            if (currentUser && currentUser.photoURL) {
                storage.ref(currentUser.photoURL).getDownloadURL()
                    .then((url: string) => {
                        commit(UPDATE_ACCOUNT_PHOTO_URL, url);
                    });
            }
        },
        [HANDLE_ACCOUNT_PHOTO_FILE_CHANGE]({state, commit}, file) {
            UtilService.readAsDataUrl(file)
                .then((imgUrl: string) => { commit(UPDATE_ACCOUNT_PHOTO_PREVIEW_URL, imgUrl); });
            commit(UPDATE_ACCOUNT_PHOTO_FILE, file);
        },
        [SAVE_USER_ACCOUNT]({state, getters, commit, dispatch}) {
            const currentUser = getters[CURRENT_USER];
            // if the photo was updated - upload new photo
            const chain: Promise<firebase.storage.UploadTaskSnapshot | null> = state.editForm.photoFile && currentUser ?
                AccountService.uploadUserPhoto(currentUser, state.editForm.photoFile) :
                Promise.resolve(null);
            chain
                .then((snapshot) => AccountService.updateUserAccount(
                    state.editForm.displayName,
                    snapshot && snapshot.metadata.fullPath ? snapshot.metadata.fullPath : currentUser!.photoURL,
                ))
                .then(() => {
                    commit(UPDATE_CURRENT_USER, auth.currentUser);
                    dispatch(FINISH_ACCOUNT_EDIT);
                });
        },
    },
    mutations: {
        [UPDATE_ACCOUNT_EDIT_MODE](state, value: boolean) {
            state.isEditMode = value;
        },
        [UPDATE_ACCOUNT_PHOTO_URL](state, value: string) {
            state.photoURL = value;
        },
        [UPDATE_ACCOUNT_PHOTO_FILE](state, value: File | null) {
            state.editForm.photoFile = value;
        },
        [UPDATE_ACCOUNT_PHOTO_PREVIEW_URL](state, value: string) {
            state.editForm.previewURL = value;
        },
        [UPDATE_ACCOUNT_DISPLAY_NAME](state, value: string) {
            state.editForm.displayName = value;
        },
        [RESET_ACCOUNT_EDIT_FORM](state) {
            state.editForm = {...INITIAL_ACCOUNT_EDIT_FORM};
        },
    },
    getters: {
        [IS_ACCOUNT_EDIT_MODE](state): boolean {
            return state.isEditMode;
        },
        [ACCOUNT_PHOTO_URL](state): string {
            return state.photoURL;
        },
        [ACCOUNT_PHOTO_FILE](state): File | null {
            return state.editForm.photoFile;
        },
        [ACCOUNT_PHOTO_PREVIEW_URL](state): string {
            return state.editForm.previewURL;
        },
        [ACCOUNT_DISPLAY_NAME](state): string {
            return state.editForm.displayName;
        },
    },
};

export default accountState;
