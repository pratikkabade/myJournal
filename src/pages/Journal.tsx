import { useEffect, useState } from "react"
import { startDate } from "../config/Date"
import { SheetsURL } from "../config/SheetsURL"
import { changeEmoji, changeIT } from "../utils/Functions"

export const Journal = () => {

    // States
    const [goal, setGoal] = useState('')
    const [reason, setReason] = useState('')
    const [ul, setUl] = useState('')
    const [problem, setProblem] = useState('')
    const [step, setStep] = useState('')
    const [grt, setGrt] = useState('')
    const [date1, setDate1] = useState('')
    const [details, setDetails] = useState('')
    const [score, setScore] = useState(0)
    // sheet
    const [yesV, setYesV] = useState([])
    const [addV, setAddV] = useState([])
    const [dedV, setDedV] = useState([])
    const [loading, setLoading] = useState(true)


    // CONVERT DATE1 TO DATE
    const date1S = date1.toString()
    const yearS = date1S.slice(0, 4)
    const monthS = date1S.slice(4, 6)
    const dayS = date1S.slice(6, 8)
    const date1d = new Date(monthS + '/' + dayS + '/' + yearS);
    // const date1D = new Date(date1d);

    // CALCULATE DIFFERENCE
    const date2 = new Date(startDate);
    const diffTime = Math.abs(+date1d - +date2);
    const theDiffBase = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Functions
    const theDiff = theDiffBase
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

    // REMOVED FIREBASE FUNCTION
    // // WATCH `Firebase` BRANCH FOR CHANGES

    // SHEET FUNCTIONS
    const url = SheetsURL;

    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        const yesValues = values.values.yesv;
        const addValues = values.values.addv;
        const dedValues = values.values.dedv;
        // split val  by ,
        const yVal = yesValues.map((item: any) => {
            return {
                item: item.split(',')
            }
        })
        // return item vise allotment
        const yVAL = yVal.map((item: any) => {
            return {
                val: item.item[0],
                name: item.item[1],
                logo: item.item[2]
            }
        })
        // dont return empty values
        const finalyVal = yVAL.filter((item: any) => {
            return item.val !== ''
        })
        setYesV(finalyVal)


        // split val  by ,
        const aVal = addValues.map((item: any) => {
            return {
                item: item.split(',')
            }
        })
        // return item vise allotment
        const aVAL = aVal.map((item: any) => {
            return {
                val: item.item[0],
                name: item.item[1],
                logo: item.item[2]
            }
        })
        // dont return empty values
        const finalaVal = aVAL.filter((item: any) => {
            return item.val !== ''
        })
        setAddV(finalaVal)


        // split val  by ,
        const dVal = dedValues.map((item: any) => {
            return {
                item: item.split(',')
            }
        })
        // return item vise allotment
        const dVAL = dVal.map((item: any) => {
            return {
                val: item.item[0],
                name: item.item[1],
                logo: item.item[2]
            }
        })
        // dont return empty values
        const finaldVal = dVAL.filter((item: any) => {
            return item.val !== ''
        })
        setDedV(finaldVal)


        setLoading(false)
    }

    // USE EFFECT
    useEffect(() => {
        fetchData()
        document.title = 'Journal';
    })


    // Output
    return (
        <div>
            <div className="contactForm">
                <div className="noSelect pt-3">
                    <div className="mt-5">
                        <div className="green d-flex justify-content-center align-items-center font-weight-bold">
                            <h3>Journal</h3><i className="fa-regular fa-calendar"></i>
                        </div>
                    </div>
                </div>

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
                            <h1>
                                <span onClick={() => {
                                    event6a()
                                    changeEmoji('a')
                                }}
                                    id='a'
                                    className="">😡</span>

                                <span onClick={() => {
                                    event6b()
                                    changeEmoji('b')
                                }}
                                    id='b'
                                    className="">😥</span>

                                <span onClick={() => {
                                    event6c()
                                    changeEmoji('c')
                                }}
                                    id='c'
                                    className="">☹️</span>

                                <span onClick={() => {
                                    event6d()
                                    changeEmoji('d')
                                }}
                                    id='d'
                                    className="">😐</span>

                                <span onClick={() => {
                                    event6e()
                                    changeEmoji('e')
                                }}
                                    id='e'
                                    className="">😀</span>
                            </h1>
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
                        {
                            loading ?
                                <h4 className="d-flex justify-content-center mt-4 mb-5 text-success">Loading...</h4>
                                :
                                yesV.map((thisPost) => (
                                    <div key={thisPost.id}>
                                        <label key={thisPost.id}><input type='checkbox' onChange={() => {
                                            addDetails("(" + thisPost.val + ") " + thisPost.name)

                                            var v = parseInt(thisPost.val)
                                            calculateScore(v)
                                        }} />
                                            <i className={thisPost.logo}></i> <kbd>{thisPost.name}</kbd></label>
                                    </div>
                                ))
                        }
                    </div>
                    <div className="mt-5">
                        <div className="green d-flex justify-content-center align-items-center">
                            <h3>Additions</h3><i className="fa-solid fa-square-plus"></i>
                        </div>
                        {
                            loading ?
                                <h4 className="d-flex justify-content-center mt-4 mb-5 text-success">Loading...</h4>
                                :
                                addV.map((thisPost) => (
                                    <div key={thisPost.id}>
                                        <label key={thisPost.id}><input type='checkbox' onChange={() => {
                                            addDetails("(" + thisPost.val + ") " + thisPost.name)

                                            var v = parseInt(thisPost.val)
                                            calculateScore(v)
                                        }} />
                                            <i className={thisPost.logo}></i> <kbd>{thisPost.name}</kbd></label>
                                    </div>
                                ))
                        }
                    </div>
                    <div className="mt-5">
                        <div className="red d-flex justify-content-center align-items-center ">
                            <h3>Deductions</h3><i className="fa-solid fa-square-minus"></i>
                        </div>
                        {
                            loading ?
                                <h4 className="d-flex justify-content-center mt-4 mb-5 text-success">Loading...</h4>
                                :
                                dedV.map((thisPost) => (
                                    <div key={thisPost.id}>
                                        <label key={thisPost.id}><input type='checkbox' onChange={() => {
                                            addDetails("(" + thisPost.val + ") " + thisPost.name)

                                            var v = parseInt(thisPost.val)
                                            calculateScore(v)
                                        }} />
                                            <i className={thisPost.logo}></i> <kbd>{thisPost.name}</kbd></label>
                                    </div>
                                ))
                        }
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
