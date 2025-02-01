import { getAuth } from "firebase/auth";
import { getFirebaseApp } from "../../../firebase";
import { useLoaderData, useNavigate } from "react-router";
import { useContext } from "react";
import { SetUserContext } from "../../userProvider/userContext";

const app = getFirebaseApp();
const auth = getAuth(app);

const UserProfile = () => {

    const userData = useLoaderData();
    const setUserData = useContext( SetUserContext );

    const navigate = useNavigate();

    return (
        <div>
            <h1>User Profile</h1>

            <h4>Preffered theme: {userData?.theme}</h4>

            <button
                type="button"
                onClick={() => {
                    setUserData({ type: 'logout' });
                    navigate('/');
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default UserProfile;
