import { useEffect, useReducer, useState } from "react";
import { SetUserContext, UserContext } from "./userContext";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirebaseApp } from "../../firebase";

const app = getFirebaseApp();
const auth = getAuth(app);

const reducer = (state, action) => {

    const { type, payload } = action;
    let newState = state;

    switch (type) {
        case 'signIn': newState = payload;
            break;
        case 'logout': auth.signOut();
            break;
        default:
    }

    return newState;
}


const UserProvider = ({ children }) => {

    /**
     * @type { [ User | null, React.DispatchWithoutAction ] }
     */
    const [user, dispatch] = useReducer(reducer, null);

    useEffect(() => {
        onAuthStateChanged(auth, (loggedUser) => {
            dispatch({ type: 'signIn', payload: loggedUser});
        });
    }, []);

    return (
        <UserContext.Provider value={user}>
            <SetUserContext.Provider value={dispatch}>
                {children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    );
}

export default UserProvider;
