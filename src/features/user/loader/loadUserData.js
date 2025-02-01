import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAppDb, getFirebaseApp } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function loadUserData() {

    const app = getFirebaseApp();
    const auth = getAuth(app);
    const db = getAppDb();

    const userData = await new Promise((resolve, reject) => {

        onAuthStateChanged(auth, async (user) => {

            if (!user) {
                return reject(user);
            }

            const userRef = doc(db, 'users', user.uid);
            // const userRef = doc(db, 'users', 'XQZTmoWTshUABIwBz0Q0oBSpRU43');

            const userSnapshot = await getDoc(userRef)
    
            const userData = userSnapshot.data();
            
            resolve(userData);
        });
    });

    return userData;
}
