import { getFirestore } from 'firebase/firestore';
import getFirebaseApp from "../firebaseApp/getFirebaseApp";

let appDb = null;

export default function getAppDb() {

    if(!appDb) {
        appDb = getFirestore( getFirebaseApp() );
    }

    return appDb;
}
