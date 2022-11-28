import { auth } from "../config/Firebase";
import { SignOut } from "../security/SignOut"
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='navbar navbar-expand-sm bg-light fixed-top' id='customNav' style={{ boxShadow: 'var(--shadowtiny)' }}>
            <div className='container-fluid'>
                <ul className='navbar-nav justify-content-start'>
                    <a href='https://calendar.google.com'>
                        <img alt='a' id='hrtLogo' src='https://avatars.githubusercontent.com/u/108847584?s=200&v=4' draggable='false' />
                    </a>
                </ul>
                <div className='collapse navbar-collapse justify-content-end'>
                    {user ? <SignOut />
                        :
                        <>
                            <Link to='/myJournal/Form'>
                                <button className='btn-accent green'>Form</button>
                            </Link>
                            <Link to='/myJournal/Calendar'>
                                <button className='btn-accent blue'>Calendar</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}
