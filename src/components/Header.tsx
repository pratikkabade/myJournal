import { auth } from "../config/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import { SignOut } from "../security/SignOut";
import { useEffect } from "react";
import { title } from "../utils/Title";

export const Header = () => {
    const [user] = useAuthState(auth);

    useEffect(() => {
        title()
    }, [])

    return (
        <nav className='navbar navbar-expand-sm bg-light fixed-top' id='customNav' style={{ boxShadow: 'var(--shadowtiny)' }}>
            <div className='container-fluid'>
                <ul className='navbar-nav justify-content-start'>
                    <Link to='/myJournal'>
                        <img alt='a' id='hrtLogo' src='https://avatars.githubusercontent.com/u/108847584?s=200&v=4' draggable='false' />
                    </Link>
                </ul>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <i className='fa-solid fa-caret-down'></i>
                </button>

                <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
                    {user ?
                        <>
                            {document.title == 'Form' ?
                                <button className='btn-accent green blk pg' onClick={title}>Form</button>
                                :
                                <Link to='/myJournal/Form'>
                                    <button className='btn-accent green blk' onClick={title}>Form</button>
                                </Link>
                            }
                            {document.title == 'Calendar' ?
                                <button className='btn-accent blue blk pg' onClick={title}>Calendar</button>
                                :
                                <Link to='/myJournal/Calendar'>
                                    <button className='btn-accent blue blk' onClick={title}>Calendar</button>
                                </Link>
                            }
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
