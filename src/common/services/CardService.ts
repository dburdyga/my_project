import {auth, db} from '../../firebase';
import {ICard} from '@/common/interfaces/ICard';

const COLLECTION_NAME = 'cards';


export class CardService {
    // add rule to tasks collection
    /*
      service cloud.firestore {
      match /databases/{database}/documents {
          match /cards/{card} {
            allow read, update, delete: if resource.data.userId == request.auth.uid;
            allow create: if request.auth.uid != null;
          }
        }
      }
   */
    public static getCards(): Promise<ICard[]> {
        return db.collection(COLLECTION_NAME)
            .where('userId', '==', auth.currentUser && auth.currentUser.uid)
            .orderBy('project', 'asc')
            .limit(5)
            .get()
            .then((querySnapshot) => {
                const cards: ICard[] = querySnapshot.docs
                    .sort()
                    .map((doc: firebase.firestore.QueryDocumentSnapshot) => ({
                        id: doc.id,
                        ...doc.data(),
                    } as ICard));
                return cards;
            });
    }


    public static addCard(card: ICard): Promise<firebase.firestore.DocumentReference> {
        return db.collection(COLLECTION_NAME)
            .add({
                ...card,
                userId: auth.currentUser && auth.currentUser.uid,
            });
    }
}
