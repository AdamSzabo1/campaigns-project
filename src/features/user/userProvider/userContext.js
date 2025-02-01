import { createContext } from "react";
import { User } from 'firebase/auth';

/**
 * @type { React.Context<null | User> }
 */
const UserContext = createContext(null);


const SetUserContext = createContext(() => {});

export {
    UserContext,
    SetUserContext
}
