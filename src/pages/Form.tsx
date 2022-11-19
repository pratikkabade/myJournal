import { useState } from "react"
import { Diff, todayDate } from "../config/Date"

export const Form = () => {


    // States
    const [text, setText] = useState('')
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
    const event1 = () => {
        setText(finalText)
    }

    const event2 = (e: any) => {
        setDate1(e.target.value.replace(/-/g, ''))
    }

    const event5 = (e: any) => {
        setDetails(e.target.value.replace(/ /g, '+') + "%0A" + "%0A")
    }

    // FUNCTION TO ADD DETAILS
    async function addDetails(newDetail: any) {
        await setDetails(details + newDetail + "%0A")
    }

    // FUNCTION TO CALCULATE SCORE
    function calculateScore(val: any) {
        setScore(score + val)
    }

    // Output
    return (
        <div>
            <div className="contactForm">
                <h1>Journal <i className="fa-regular fa-calendar"></i> </h1>

                <h3>Date</h3>
                <div className="pt-3">
                </div>
                <input type="date" onChange={event2} />

                <textarea onChange={event5} placeholder='Details' />

                <div className="noSelect">
                    <div className="pt-5"></div>
                    <div className="btn-accent green d-flex justify-content-center">
                        <h3>Additions</h3>
                    </div>
                    <div className="d-flex pt-3">
                        <label><input type='checkbox' onClick={() => {
                            var val = 1
                            addDetails("(+" + val + ") Talks")
                            calculateScore(val)
                        }} />
                            Talks</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = 1
                            addDetails("(+" + val + ") Project work")
                            calculateScore(val)
                        }} />
                            Project</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = 1
                            addDetails("(+" + val + ") Connects")
                            calculateScore(val)
                        }} />
                            Connects</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = 1
                            addDetails("(+" + val + ") Out of Zone")
                            calculateScore(val)
                        }} />
                            Out of Zone</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = 1
                            addDetails("(+" + val + ") Hrs Coded")
                            calculateScore(val)
                        }} />
                            Hrs Coded </label>
                    </div>



                    <div className="pt-5"></div>
                    <div className="btn-accent red d-flex justify-content-center">
                        <h3>Deductions</h3>
                    </div>
                    <div className="d-flex pt-3">
                        <label><input type='checkbox' onClick={() => {
                            var val = -1
                            addDetails("(-" + val + ") Food")
                            calculateScore(val)
                        }} />
                            Food</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = -1
                            addDetails("(-" + val + ") Negativity")
                            calculateScore(val)
                        }} />
                            Negativity</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = -1
                            addDetails("(-" + val + ") Music")
                            calculateScore(val)
                        }} />
                            Music</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = -1
                            addDetails("(-" + val + ") Sleep")
                            calculateScore(val)
                        }} />
                            Sleep</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = -5
                            addDetails("(-" + val + ") Burnout")
                            calculateScore(val)
                        }} />
                            Burnout</label>
                    </div>
                    <div className="d-flex pt-2">
                        <label><input type='checkbox' onClick={() => {
                            var val = -1
                            addDetails("(-" + val + ") Hrs Wasted")
                            calculateScore(val)
                        }} />
                            Hrs Wasted</label>
                    </div>
                </div>



                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="noSelect" onChange={event1} placeholder='Score' readOnly value={'Score: ' + score} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="noSelect" onChange={event1} placeholder='#day' readOnly value={'on day #' + theDiff} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center pt-3">
                    <a href={Word} target={"_blank"} rel="noreferrer" className="btn-accent pt-3 blk green">Save  <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>

            </div>
            <span className='anchor'></span>
        </div>
    )
}
