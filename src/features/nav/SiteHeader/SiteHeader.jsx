import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { UserContext } from "../../user";

// single source of truth

const SiteHeader = () => {

    const userData = useContext( UserContext );

    return (
        <header>
            <Navbar userEmail={userData?.email || null} />
        </header>
    );
}

export default SiteHeader;
