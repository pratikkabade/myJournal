import { useAuthState } from "react-firebase-hooks/auth";
import { Form } from "react-router-dom";
import { auth } from "../config/Firebase";
import { SignIn } from "../security/SignIn"

export const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            {user?.email === 'thisispratikkabade@gmail.com' ?
                <div>
                    <Form />
                </div>
                :
                <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                    <SignIn />
                </div>
            }
        </>
    )
}
