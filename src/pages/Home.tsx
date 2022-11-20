import { SignIn } from "../security/SignIn"

export const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <SignIn />
        </div>
    )
}
