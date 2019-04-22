import {auth, storage} from '../../firebase';

export class AuthService {

    public static isLoggedIn(): boolean {
        return Boolean(auth.currentUser);
    }

    public static login({email, password}: { email: string; password: string; }): Promise<firebase.auth.UserCredential> {
        return auth.signInWithEmailAndPassword(email, password);
    }

    public static register({email, password}: { email: string; password: string; }): Promise<firebase.auth.UserCredential> {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    public static logout(): Promise<void> {
        return auth.signOut();
    }
}
