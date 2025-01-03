import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirebaseApp } from "../../../firebase";

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const app = getFirebaseApp();
        const auth = getAuth(app);

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);

            console.log(userCredentials);

            navigate('/campaigns');

        }
        catch (err) {
            console.log('Login failed');
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        minLength={8}
                    />
                </div>

                <button type="submit">Login</button>

                <p>
                    Don't have an account yet? <Link to={'/auth/register'}>Register</Link> here.
                </p>

            </form>
        </div>
    );
}

export default LoginForm;
