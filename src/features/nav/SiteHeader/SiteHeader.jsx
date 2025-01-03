import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { getFirebaseApp } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SiteHeader = () => {

    const [userData, setUserData] = useState(null);

    const app = getFirebaseApp();
    const auth = getAuth(app);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUserData(user);
        });
    }, []);

    return (
        <header>
            <Navbar userEmail={userData?.email || null} />
        </header>
    );
}

export default SiteHeader;
