import { getAuth } from "firebase/auth";
import { getAppDb, getFirebaseApp } from "../../../firebase";
import { useLoaderData } from "react-router";

const app = getFirebaseApp();
const auth = getAuth(app);

const UserProfile = () => {

    const userData = useLoaderData();

    return (
        <div>
            <h1>User Profile</h1>

            <h4>Preffered theme: {userData?.theme}</h4>

            <button type="button" onClick={() => auth.signOut()} >Logout</button>
        </div>
    );
}

export default UserProfile;
