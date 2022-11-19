import { useState } from "react"

export const Form = () => {
    // States
    const [text, setText] = useState('')
    const [date1, setDate1] = useState('')
    const [time1, setTime1] = useState('')
    const [date2, setDate2] = useState('')
    const [time2, setTime2] = useState('')
    const [located, setLocated] = useState('')
    const [details, setDetails] = useState('')
    const [date7, setDate7] = useState('')
    const [time7, setTime7] = useState('')
    const [visibility, setVisibility] = useState(false)

    //Error handling
    const [error, setError] = useState(false)

    // Submit
    const Word = 'https://calendar.google.com/calendar/u/0/r/eventedit?' +
        'text=' + text +
        '&dates=' + date1 +
        'T' + time1 +
        '/' + date2 +
        'T' + time2 +
        '&location=' + located +
        '&details=' + details +
        '&recur=RRULE:FREQ=DAILY;INTERVAL=1;' +
        'UNTIL=' + date7 +
        'T' + time7 +
        'Z';

    // Copy Function
    function copy() {
        navigator.clipboard.writeText(Word);
        document.getElementById('copyBtn')!.innerHTML = 'Copied!';
        setTimeout(() => {
            document.getElementById('copyBtn')!.innerHTML = 'Copy Link <i class="fa-regular fa-copy"></i>';
        }, 2000);
    }



    // Forms
    const event1 = (e: any) => {
        setText(e.target.value.replace(/ /g, '+'))
    }

    const event2 = (e: any) => {
        setDate1(e.target.value.replace(/-/g, ''))
    }

    const event2t = (e: any) => {
        var t2 = e.target.value.replace(/:/g, '') + '00'
        setTime1(t2)
    }

    const event3 = (e: any) => {
        setDate2(e.target.value.replace(/-/g, ''))
    }

    const event3t = (e: any) => {
        var t3 = e.target.value.replace(/:/g, '') + '00'
        setTime2(t3)
    }

    const event4 = (e: any) => {
        setLocated(e.target.value.replace(/ /g, '+'))
    }

    const event5 = (e: any) => {
        setDetails(e.target.value.replace(/ /g, '+'))
    }

    const event7 = (e: any) => {
        setDate7(e.target.value.replace(/-/g, ''))
    }

    const event7t = (e: any) => {
        var t7 = e.target.value.replace(/:/g, '') + '00'
        setTime7(t7)
    }

    const show = () => {
        setVisibility(!visibility)
    }

    // Output
    return (
        <div className="contactForm pushDown200">
            <h1>Get Calendar Link <i className="fa-regular fa-calendar"></i> </h1>
            <input type="text" onChange={event1} placeholder='Event Name' />

            <h3>Starts from</h3>
            <div className="smaller">
                <input type="date" onChange={event2} />

                <input type="time" onChange={event2t} />
                {error && <p className="error">Time cannot be in the past</p>}
            </div>

            <h3>Ends on</h3>
            <div className="smaller">
                <input type="date" onChange={event3} />

                <input type="time" onChange={event3t} />
                {error && <p className="error">Time cannot be in the past</p>}
            </div>

            <input type="text" onChange={event4} placeholder='Add Location' />

            <input type="text" onChange={event5} placeholder='Details' />


            {visibility ?
                <div>
                    <button onClick={show} className="flex-row redd">Non Recurring <i className="fa-sharp fa-solid fa-xmark"></i></button>
                    <h3>Recurring ends on</h3>
                    <div className="smaller">
                        <input type="date" onChange={event7} />
                        <input type="time" onChange={event7t} />
                        {error && <p className="error">Time cannot be in the past</p>}
                    </div>
                </div>
                : <button onClick={show} className="flex-row yelloww">Recurring <i className="fa-solid fa-repeat"></i></button>
            }

            <div className="flex-row row2">
                <button onClick={copy} className="greenn" id="copyBtn">Copy Link <i className="fa-regular fa-copy"></i></button>
                <a href={Word} target={"_blank"} rel="noreferrer" className="btn-accent bluee">Open it <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    )
}
