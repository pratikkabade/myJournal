import { auth } from "../config/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import { SignOut } from "../security/SignOut";

export const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className='navbar navbar-expand-sm bg-light fixed-top' id='customNav' style={{ boxShadow: 'var(--shadowtiny)' }}>
            <div className='container-fluid'>
                <ul className='navbar-nav justify-content-start'>
                    <Link to='/myJournal'>
                        <img alt='a' id='hrtLogo' src='https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/myJournal.svg' draggable='false' />
                    </Link>
                </ul>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <i className='fa-solid fa-caret-down'></i>
                </button>

                <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
                    {user ?
                        <>
                            <Link to='/myJournal/Journal'>
                                <button className='btn-accent green blk'>Journal</button>
                            </Link>
                            <Link to='/myJournal/Calendar'>
                                <button className='btn-accent blue blk'>Calendar</button>
                            </Link>
                            <Link to='/myJournal/Records'>
                                <button className='btn-accent purple blk'>Records</button>
                            </Link>
                            <SignOut />
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </nav>
    )
}
