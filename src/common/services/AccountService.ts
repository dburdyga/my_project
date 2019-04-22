import {auth, storage} from '../../firebase';

export class AccountService {
    public static updateUserAccount(displayName: string | null, photoURL: string | null) {
        if (auth.currentUser) {
            return auth.currentUser.updateProfile({
                displayName,
                photoURL,
            });
        }
        return Promise.resolve();
    }

    public static uploadUserPhoto(user: firebase.User, file: File): Promise<firebase.storage.UploadTaskSnapshot> {
        const storageRef = storage.ref(user.email + '/profilePicture/' + file.name);
        return storageRef.put(file)
            .then((snapshot) => snapshot);
    }
}
