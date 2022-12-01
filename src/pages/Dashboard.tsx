import { useEffect } from "react";
import { Link } from "react-router-dom"

export const Dashboard = () => {
    // TITLE
    useEffect(() => {
        document.title = 'Dashboard';
    });

    return (
        <>
            <div className="mainSection">
                <div className="subSection">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className="mainSection">
                <div className="subSection d-flex justify-content-center">
                    <Link to={"/myJournal/Journal"} className="btn-accent green blk">Journal 📃</Link>
                </div>
                <div className="subSection d-flex justify-content-center">
                    <Link to={"/myJournal/Calendar"} className="btn-accent blue blk">Calendar 📆</Link>
                </div>
                <div className="subSection d-flex justify-content-center">
                    <Link to={"/myJournal/Records"} className="btn-accent purple blk">Records 📂</Link>
                </div>
            </div>

        </>
    )
}