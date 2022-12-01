import { useEffect, useState } from 'react';
import Calendar from 'reactjs-availability-calendar'
import '../styles/Calendar.css';
import { options } from '../utils/CalendarOptions';

export const Calendars = () => {
    // TITLE
    useEffect(() => {
        document.title = 'Calendar';
    });
    // FETCH DATA FROM GOOGLE SHEETS API
    const [data, setData] = useState([]);
    const [req, setReq] = useState('');
    const [loading, setLoading] = useState(true);

    const url = "https://script.google.com/macros/s/AKfycbzcUU_Qa6vthx_X-bBZcoALtOe5coqAc8bsOFFeFxCKH1oDGUGzQCVWL_NDKvo7W45iuw/exec";

    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        // val is values.{req}
        const val = values[req];

        const datas = val.map((item: any) => {
            return {
                from: item,
                to: item
            }
        })

        setData(datas);
        setLoading(false);
    }

    const bookings2 = [{
        from: '2022-11-18',
        to: '2022-11-18',
        middayCheckout: true,
    }]
    const bookings = data.concat(bookings2);


    const handleChange = (event: any) => {
        setReq(event.target.value);
    };


    return (
        <div className="Reader">
            <div className="contactForm">
                <div className="noSelect pt-3">
                    <div className="mt-5">
                        <div className="blue d-flex justify-content-center align-items-center font-weight-bold">
                            <h3>Calendar</h3><i className="fa-solid fa-calendar"></i>
                        </div>
                    </div>
                </div>

                <select value={req} onChange={handleChange} onClick={fetchData} className="mt-5">
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>

            {loading ? <h2 className="d-flex justify-content-center pushDown100">Select option from the drop down</h2> :
                <Calendar bookings={bookings} />
            }

            <span className='anchor'></span>
        </div >
    )
}

