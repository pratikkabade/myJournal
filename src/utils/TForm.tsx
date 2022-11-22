import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Diff, todayDate } from "../config/Date"
import { journalCollectionRef } from "../config/Firebase"
import { changeEmoji, changeIT } from "../utils/Functions"
import { _ReadPost } from "./read/_ReadPost"

export const TForm = () => {


    // States
    const [goal, setGoal] = useState('')
    const [reason, setReason] = useState('')
    const [ul, setUl] = useState('')
    const [problem, setProblem] = useState('')
    const [step, setStep] = useState('')
    const [grt, setGrt] = useState('')
    const [date1, setDate1] = useState(todayDate)
    const [details, setDetails] = useState('')
    const [score, setScore] = useState(0)

    // Functions
    const theDiff = Diff(date1)
    const finalText = 'day ' + theDiff + ':  (' + score + ')'

    // Submit
    const Word = 'https://calendar.google.com/calendar/u/0/r/eventedit?' +
        'text=' + finalText +
        '&dates=' + date1 + '/' + date1 +
        '&details=' + details


    // Forms
    const event2 = (e: any) => {
        setDate1(e.target.value.replace(/-/g, ''))
    }
    const event5 = (e: any) => {
        setDetails(e.target.value.replace(/ /g, '+') + "%0A%0A")
    }
    function event6a() {
        var checkin = 1
        addDetails("Check-in: " + checkin + "%0A")
    }
    function event6b() {
        var checkin = 2
        addDetails("Check-in: " + checkin + "%0A")
    }
    function event6c() {
        var checkin = 3
        addDetails("Check-in: " + checkin + "%0A")
    }
    function event6d() {
        var checkin = 4
        addDetails("Check-in: " + checkin + "%0A")
    }
    function event6e() {
        var checkin = 5
        addDetails("Check-in: " + checkin + "%0A")
    }
    function event7a() {
        addDetails("Reasons: " + reason)
    }
    function event7b() {
        addDetails("Underlyings: " + ul)
    }
    function event8a() {
        addDetails("%0AProblems: " + problem)
    }
    function event8b() {
        addDetails("Steps: " + step)
    }
    function event9a() {
        addDetails("%0ATodays Goal: " + goal)
    }
    function event9b() {
        addDetails("Grateful for: " + grt + "%0A")
    }


    // FUNCTION TO ADD DETAILS
    async function addDetails(newDetail: any) {
        await setDetails(details + newDetail + "%0A")
    }

    // FUNCTION TO CALCULATE SCORE
    function calculateScore(val: any) {
        setScore(score + val)
    }

    // READ ALL
    const [posts, setPosts] = useState([])

    const readPost = async () => {
        const data = await getDocs(journalCollectionRef)
        setPosts(data.docs.map(
            (doc) => ({
                ...doc.data(), id: doc.id
            })
        ));
    }

    useEffect(() => {
        readPost()
    })

    //log
    function log() {
        console.log(details)
    }


    // Output
    return (
        <div>
            <div className="contactForm">
                <h1>Journal <i className="fa-regular fa-calendar"></i> </h1>

                <div className="noSelect">
                    <div className="mt-5">
                        <div className="skyblue d-flex justify-content-center align-items-center">
                            <h3>Date</h3><i className="fa-solid fa-calendar-days"></i>
                        </div>
                    </div>
                    <div className="mt-3">
                        <input type="date" onChange={event2} />
                        <textarea onChange={event5} placeholder='Details' />
                    </div>



                    <div className="mt-5">
                        <div className="purple d-flex justify-content-center align-items-center">
                            <h3>Yesterday</h3><i className="fa-solid fa-backward"></i>
                        </div>

                        {posts.filter((post) => post.group === "Yesterday").map((thisPost) => (
                            <div key={thisPost.id}>
                                <a onClick={() => {
                                    console.log(thisPost.name);
                                    addDetails("(" + thisPost.val + ") Recorded")

                                    var v = parseInt(thisPost.val) / 2
                                    calculateScore(v)
                                }} >
                                    <_ReadPost id={thisPost.id} logo={thisPost.logo} name={thisPost.name} val={thisPost.val} details={''} setDetails={''} />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5">
                        <div className="green d-flex justify-content-center align-items-center">
                            <h3>Additions</h3><i className="fa-solid fa-square-plus"></i>
                        </div>

                        {posts.filter((post) => post.group === "Addition").map((thisPost) => (
                            <div key={thisPost.id}>
                                <a onClick={() => {
                                    console.log(thisPost.name);
                                    addDetails("(" + thisPost.val + ") Recorded")

                                    var v = parseInt(thisPost.val) / 2
                                    calculateScore(v)
                                }} >
                                    <_ReadPost id={thisPost.id} logo={thisPost.logo} name={thisPost.name} val={thisPost.val} details={''} setDetails={''} />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5">
                        <div className="red d-flex justify-content-center align-items-center ">
                            <h3>Deductions</h3><i className="fa-solid fa-square-minus"></i>
                        </div>

                        {posts.filter((post) => post.group === "Deduction").map((thisPost) => (
                            <div key={thisPost.id}>
                                <a onClick={() => {
                                    console.log(thisPost.name);
                                    addDetails("(" + thisPost.val + ")" + thisPost.name)

                                    var v = parseInt(thisPost.val) / 2
                                    calculateScore(v)
                                }} >
                                    <_ReadPost id={thisPost.id} logo={thisPost.logo} name={thisPost.name} val={thisPost.val} details={''} setDetails={''} />
                                </a>
                            </div>
                        ))}
                    </div>

                </div>



                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="noSelect" readOnly value={'Score: ' + score} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="noSelect" readOnly value={'on day #' + theDiff} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <a href={Word} target={"_blank"} rel="noreferrer" className="btn-accent mt-3 blk green">
                        Save
                        <i className="fa-solid fa-arrow-up-right-from-square">
                        </i>
                    </a>
                    <a onClick={log} target={"_blank"} rel="noreferrer" className="btn-accent mt-3 blk green">
                        log
                    </a>
                </div>

            </div>
            <span className='anchor'></span>
        </div >
    )
}
