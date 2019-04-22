import {auth, db} from '../../firebase';
import {ITask} from '@/common/interfaces/ITask';

const COLLECTION_NAME = 'tasks';

export class TaskService {
    // add rule to tasks collection
    /*
      service cloud.firestore {
      match /databases/{database}/documents {
          match /tasks/{task} {
            allow read, update, delete: if resource.data.userId == request.auth.uid;
            allow create: if request.auth.uid != null;
          }
        }
      }
   */
    public static getTasks(): Promise<ITask[]> {
        return db.collection(COLLECTION_NAME)
            .where('userId', '==', auth.currentUser && auth.currentUser.uid)
            .get()
            .then((querySnapshot) => {
                const tasks: ITask[] = querySnapshot.docs
                    .map((doc: firebase.firestore.QueryDocumentSnapshot) => ({
                        id: doc.id,
                        ...doc.data(),
                    } as ITask));
                return tasks;
            });
    }

    public static addTask(task: ITask): Promise<firebase.firestore.DocumentReference> {
        return db.collection(COLLECTION_NAME)
            .add({
                ...task,
                userId: auth.currentUser && auth.currentUser.uid,
            });
    }
}
