import { useEffect, useState } from "react"
import { SheetsURL } from "../config/SheetsURL";

export const Reports = () => {
    // TITLE
    useEffect(() => {
        document.title = 'Reports';
        fetchData();
    });

    // sheet
    const [rec, setRec] = useState([])
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(true)

    // SHEET FUNCTIONS
    const url = SheetsURL;

    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        const recValues = values.rsss;

        // split val  by ,
        const rVal = recValues.map((item: any) => {
            return {
                item: item.split('|||')
            }
        })

        // return item vise allotment
        const rVal2 = rVal.map((item: any) => {
            return {
                date: item.item[0],
                score: item.item[1],
                check: item.item[2],
                reason: item.item[3],
                underlying: item.item[4],
                problem: item.item[5],
                steps: item.item[6],
                today: item.item[7],
                gratitude: item.item[8]
            }
        })

        // DONT RETURN EMPTY VALUES
        const finalVal = rVal2.filter((item: any) => {
            return item.score !== ''
        })

        // RETURN VALUES BY DATE
        const finalVal2 = finalVal.filter((item: any) => {
            return item.date === date
        })

        setRec(finalVal2)
        setLoading(false)
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
                            <h3>Reports</h3><i className="fa-solid fa-backward"></i>
                        </div>
                        <input type="date" onChange={(e) => {
                            setDate(e.target.value)
                            setLoading(true)

                        }} onClick={fetchData} className="mt-4" />
                        {
                            loading ?
                                <div>
                                    <h4 className="d-flex justify-content-center mt-4 text-danger">No data found</h4>
                                    <h4 className="d-flex justify-content-center mb-5 text-primary">Try again</h4>
                                </div>
                                :
                                rec.map((thisPost) => (
                                    <div key={thisPost.id} style={{ fontSize: '20px' }}>
                                        <p>
                                            <b>Date: </b>
                                            {
                                                // convert date to nov 12, 2020
                                                new Date(thisPost.date).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                            }
                                        </p>
                                        <p>
                                            <b>{thisPost.score === "" ? <></> : "Score: "}</b>
                                            {thisPost.score === "" ? <></> : thisPost.score}
                                        </p>
                                        <p>
                                            <b>{thisPost.check === "" ? <></> : "Check: "}</b>
                                            {thisPost.check === "" ? <></> : thisPost.check}
                                        </p>
                                        <p>
                                            <b>{thisPost.reason === "" ? <></> : "Reason: "}</b>
                                            {thisPost.reason === "" ? <></> : thisPost.reason}
                                        </p>
                                        <p>
                                            <b>{thisPost.underlying === "" ? <></> : "Underlying: "}</b>
                                            {thisPost.underlying === "" ? <></> : thisPost.underlying}
                                        </p>
                                        <p>
                                            <b>{thisPost.problem === "" ? <></> : "Problem: "}</b>
                                            {thisPost.problem === "" ? <></> : thisPost.problem}
                                        </p>
                                        <p>
                                            <b>{thisPost.steps === "" ? <></> : "Steps: "}</b>
                                            {thisPost.steps === "" ? <></> : thisPost.steps}
                                        </p>
                                        <p>
                                            <b>{thisPost.today === "" ? <></> : "Today: "}</b>
                                            {thisPost.today === "" ? <></> : thisPost.today}
                                        </p>
                                        <p>
                                            <b>{thisPost.gratitude === "" ? <></> : "Gratitude: "}</b>
                                            {thisPost.gratitude === "" ? <></> : thisPost.gratitude}
                                        </p>
                                    </div>
                                ))
                        }
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3 ">
                    <a href={"https://calendar.google.com/calendar/u/0/r/agenda/" + date2} rel="noreferrer" target={'_blank'} className="btn-accent mt-3 blk skyblue blk calImg">
                        Open Calendar
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>

            </div>
            <span className='anchor'></span>
        </div >
    )
}
