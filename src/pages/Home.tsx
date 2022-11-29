import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/Firebase";
import { SignIn } from "../security/SignIn"
import { Form } from "./Form";

export const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            {user?.email === 'thisispratikkabade@gmail.com' ?
                <div>
                    <Form />
                </div>
                :
                <div className="d-flex justify-content-center align-items-center flex-column noSelect" style={{ height: '80vh' }}>
                    <h1><span className="text-danger">Partially Restricted</span> as for <span className="text-success">now</span></h1>
                    <br /><br />
                    <SignIn />
                </div>
            }
        </>
    )
}
