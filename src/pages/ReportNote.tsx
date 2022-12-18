import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { SheetsURL } from "../config/SheetsURL";

export const ReportNote = () => {
    // TITLE
    useEffect(() => {
        document.title = 'Notes Report';
        fetchData();
    });

    // sheet
    const [note, setNote] = useState([])
    const [date, setDate] = useState('')

    // SHEET FUNCTIONS
    const url = SheetsURL;

    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        const noteValues = values.notes;

        // DATE
        const data1 = noteValues.compiled

        // SPLIT BY `|||`
        const nVal = data1.map((item: any) => {
            return {
                item: item.split('|||')
            }
        })

        // RETURN ITEM VISE ALLOTMENT
        const nVal2 = nVal.map((item: any) => {
            return {
                date: item.item[0],
                time: item.item[1],
                issue1: item.item[2],
                issue2: item.item[3],
                issue3: item.item[4],
                issue4: item.item[5],
                timeHash: item.item[6]
            }
        })


        setNote(nVal2)
    }

    // CONVERT DATE TO 2021/12/8 FORMAT
    const date2 = date.replace(/-/g, '/');

    // Output
    return (
        <div>
            <div className="contactForm">
                <div className="noSelect pt-3">
                    <div className="mt-5">
                        <div className="purple d-flex justify-content-center align-items-center font-weight-bold">
                            <h3>Notes Report</h3><i className="fa-solid fa-book"></i>
                        </div>
                        <input type="date" onChange={(e) => {
                            setDate(e.target.value)
                        }} onClick={fetchData} className="mt-4" />
                        {
                            // IF DATE IS EMPTY
                            date === "" ?
                                <div>
                                    <h4 className="d-flex justify-content-center mt-4 text-danger">No data found</h4>
                                    <h4 className="d-flex justify-content-center mb-5 text-primary">Try again</h4>
                                </div>
                                :
                                // FILTER NOTE BY DATE AND SORT BY TIME
                                note.sort((a: any, b: any) => {
                                    return a.timeHash - b.timeHash
                                }).filter((item: any) => item.date === date).map((item: any) => (
                                    <div key={item.id} className="mt-4 note">
                                        <div className="timeNote">
                                            {item.time === "" ? <></> : <p>{item.time}</p>}
                                        </div>
                                        <div className="issueNote">
                                            {item.issue1 === "" ? <></> : <p><b>Issue 1: </b>{item.issue1}</p>}
                                            {item.issue2 === "" ? <></> : <p><b>Issue 2: </b>{item.issue2}</p>}
                                            {item.issue3 === "" ? <></> : <p><b>Issue 3: </b>{item.issue3}</p>}
                                            {item.issue4 === "" ? <></> : <p><b>Issue 4: </b>{item.issue4}</p>}
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5 align-items-center  pb-3">
                    <Link to={'/myJournal/Reports/'} className="btn-accent blk skyblue blk calImg"> <i className="fa-solid fa-arrow-left"></i> Back</Link>
                    <a href={"https://calendar.google.com/calendar/u/0/r/agenda/" + date2} rel="noreferrer" target={'_blank'} className="btn-accent blk blue blk calImg">
                        Open in Calendar
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>

            </div>
            <span className='anchor'></span>
        </div >
    )
}
