import { signOut } from "firebase/auth"
import { auth } from "../config/Firebase"

export const SignOut = () => {

    const signOutWithGoogle = async () => {
        await signOut(auth)
    }

    return (
        <div>
            <button className="btn-accent btn-red" onClick={signOutWithGoogle}>
                Sign Out
            </button>
        </div>
    )
}