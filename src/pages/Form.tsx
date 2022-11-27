import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Diff, todayDate } from "../config/Date"
import { journalCollectionRef } from "../config/Firebase"
import { changeEmoji, changeIT } from "../utils/Functions"

export const Form = () => {


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
    const [posts, setPosts] = useState([])

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


    //READ ALL
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
                        <div className="mt-3">
                            <input type="date" onChange={event2} />
                            <textarea onChange={event5} placeholder='Details' />
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="yellow d-flex justify-content-center align-items-center">
                            <h3>Check-in</h3><i className="fa-solid fa-square-check"></i>
                        </div>
                        <div className="mt-3 emoji">
                            <i onClick={() => {
                                event6a()
                                changeEmoji('a')
                            }}
                                id='a'
                                className="fa-solid fa-face-angry"></i>
                            <i onClick={() => {
                                event6b()
                                changeEmoji('b')
                            }}
                                id='b'
                                className="fa-solid fa-face-frown"></i>
                            <i onClick={() => {
                                event6c()
                                changeEmoji('c')
                            }}
                                id='c'
                                className="fa-solid fa-face-smile"></i>
                            <i onClick={() => {
                                event6d()
                                changeEmoji('d')
                            }}
                                id='d'
                                className="fa-solid fa-face-smile-beam"></i>
                            <i onClick={() => {
                                event6e()
                                changeEmoji('e')
                            }}
                                id='e'
                                className="fa-solid fa-face-laugh-beam"></i>
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="red d-flex justify-content-center align-items-center">
                            <h3>Reasons</h3><i className="fa-solid fa-circle-question"></i>
                        </div>
                        <div className="mt-3 d-flex mm">
                            <input type={'text'} onChange={(e) => {
                                setReason(e.target.value)
                            }} placeholder='Reasons' />
                            <i onClick={() => {
                                event7a()
                                changeIT('1')
                            }}
                                id='1'
                                className="fa-solid fa-refresh"></i>
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="red d-flex justify-content-center align-items-center">
                            <h3>Underlyings</h3><i className="fa-solid fa-door-closed"></i>
                        </div>
                        <div className="mt-3 d-flex mm">
                            <input type={'text'} onChange={(e) => {
                                setUl(e.target.value)
                            }} placeholder='Underlyings' />
                            <i onClick={() => {
                                event7b()
                                changeIT('2')
                            }}
                                id='2'
                                className="fa-solid fa-refresh"></i>
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="blue d-flex justify-content-center align-items-center">
                            <h3>Problems</h3><i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div className="mt-3 d-flex mm">
                            <input type={'text'} onChange={(e) => {
                                setProblem(e.target.value)
                            }} placeholder='Todays Problems' />
                            <i onClick={() => {
                                event8a()
                                changeIT('3')
                            }}
                                id='3'
                                className="fa-solid fa-refresh"></i>
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="blue d-flex justify-content-center align-items-center">
                            <h3>Steps</h3><i className="fa-solid fa-stairs"></i>
                        </div>
                        <div className="mt-3 d-flex mm">
                            <input type={'text'} onChange={(e) => {
                                setStep(e.target.value)
                            }} placeholder='Steps' />
                            <i onClick={() => {
                                event8b()
                                changeIT('4')
                            }}
                                id='4'
                                className="fa-solid fa-refresh"></i>
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="skyblue d-flex justify-content-center align-items-center">
                            <h3>Goals</h3><i className="fa-solid fa-bullseye"></i>
                        </div>
                        <div className="mt-3 d-flex mm">
                            <input type={'text'} onChange={(e) => {
                                setGoal(e.target.value)
                            }} placeholder='Todays Goals' />
                            <i onClick={() => {
                                event9a()
                                changeIT('5')
                            }}
                                id='5'
                                className="fa-solid fa-refresh"></i>
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="orange d-flex justify-content-center align-items-center">
                            <h3>Gratitude</h3><i className="fa-brands fa-gratipay"></i>
                        </div>
                        <div className="mt-3 d-flex mm">
                            <input type={'text'} onChange={(e) => {
                                setGrt(e.target.value)
                            }} placeholder='Grateful for' />
                            <i onClick={() => {
                                event9b()
                                changeIT('6')
                            }}
                                id='6'
                                className="fa-solid fa-refresh"></i>
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="purple d-flex justify-content-center align-items-center">
                            <h3>Yesterday</h3><i className="fa-solid fa-backward"></i>
                        </div>

                        {posts.filter((post) => post.group === "Yesterday").map((thisPost) => (
                            <div key={thisPost.id}>
                                <label key={thisPost.id}><input type='checkbox' onChange={() => {
                                    addDetails("(" + thisPost.val + ") " + thisPost.name)

                                    var v = parseInt(thisPost.val)
                                    calculateScore(v)
                                }} />
                                    <i className={thisPost.logo}></i> <kbd>{thisPost.name}</kbd></label>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5">
                        <div className="green d-flex justify-content-center align-items-center">
                            <h3>Additions</h3><i className="fa-solid fa-square-plus"></i>
                        </div>

                        {posts.filter((post) => post.group === "Addition").map((thisPost) => (
                            <div key={thisPost.id}>
                                <label key={thisPost.id}><input type='checkbox' onChange={() => {
                                    addDetails("(" + thisPost.val + ") " + thisPost.name)

                                    var v = parseInt(thisPost.val)
                                    calculateScore(v)
                                }} />
                                    <i className={thisPost.logo}></i> <kbd>{thisPost.name}</kbd></label>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5">
                        <div className="red d-flex justify-content-center align-items-center ">
                            <h3>Deductions</h3><i className="fa-solid fa-square-minus"></i>
                        </div>

                        {posts.filter((post) => post.group === "Deduction").map((thisPost) => (
                            <div key={thisPost.id}>
                                <label key={thisPost.id}><input type='checkbox' onChange={() => {
                                    addDetails("(" + thisPost.val + ") " + thisPost.name)

                                    var v = parseInt(thisPost.val)
                                    calculateScore(v)
                                }} />
                                    <i className={thisPost.logo}></i> <kbd>{thisPost.name}</kbd></label>
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
                </div>

            </div>
            <span className='anchor'></span>
        </div >
    )
}
