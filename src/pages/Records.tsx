import { useEffect, useState } from "react"

export const Records = () => {

    // sheet
    const [rec, setRec] = useState([])
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(true)

    // SHEET FUNCTIONS
    const url = "https://script.google.com/macros/s/AKfycbzcUU_Qa6vthx_X-bBZcoALtOe5coqAc8bsOFFeFxCKH1oDGUGzQCVWL_NDKvo7W45iuw/exec";

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

        // REMOVE "\n" FROM VALUES
        const finalVal3 = finalVal2.filter((item: any) => {
            return {
                date: item.date.replace(/\n/g, ""),
                score: item.score.replace(/\n/g, ""),
                check: item.check.replace(/\n/g, ""),
                reason: item.reason.replace(/\n/g, ""),
                underlying: item.underlying.replace(/\n/g, ""),
                problem: item.problem.replace(/\n/g, ""),
                steps: item.steps.replace(/\n/g, ""),
                today: item.today.replace(/\n/g, ""),
                gratitude: item.gratitude.replace(/\n/g, ""),
            }
        })

        setRec(finalVal3)
        setLoading(false)
    }


    // Output
    return (
        <div>
            <div className="contactForm">
                <div className="noSelect pt-3">
                    <div className="mt-5">
                        <div className="purple d-flex justify-content-center align-items-center font-weight-bold">
                            <h3>Records</h3><i className="fa-solid fa-backward"></i>
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
                                    <div key={thisPost.id}>
                                        <h4>Date: {
                                            // convert date to nov 12, 2020
                                            new Date(thisPost.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric'
                                            })
                                        }
                                        </h4>
                                        <h4>{thisPost.score === "" ? <></> : "Score: " + thisPost.score}</h4>
                                        <h4>{thisPost.check === "" ? <></> : "Check: " + thisPost.check}</h4>
                                        <h4>{thisPost.reason === "" ? <></> : "Reason: " + thisPost.reason}</h4>
                                        <h4>{thisPost.underlying === "" ? <></> : "Underlying: " + thisPost.underlying}</h4>
                                        <h4>{thisPost.problem === "" ? <></> : "Problem: " + thisPost.problem}</h4>
                                        <h4>{thisPost.steps === "" ? <></> : "Steps: " + thisPost.steps}</h4>
                                        <h4>{thisPost.today === "" ? <></> : "Today: " + thisPost.today}</h4>
                                        <h4>{thisPost.gratitude === "" ? <></> : "Gratitude: " + thisPost.gratitude}</h4>
                                    </div>
                                ))
                        }
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3 ">
                    <a href="https://calendar.google.com" rel="noreferrer" className="btn-accent mt-3 blk skyblue blk calImg">
                        Open Calendar
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>

            </div>
            <span className='anchor'></span>
        </div >
    )
}
