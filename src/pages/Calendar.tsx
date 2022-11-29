import { useState } from 'react';
import Calendar from 'reactjs-availability-calendar'
import '../styles/Calendar.css';
import { options } from '../utils/CalendarOptions';

export const Calendars = () => {
    // fetch data from google sheets
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
            {loading ? <h2 className="d-flex justify-content-center pushDown100">Select option from the drop down</h2> :
                <Calendar bookings={bookings} />
            }

            <select value={req} onChange={handleChange} onClick={fetchData} className="form-select pushDown100 mb-5">
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    )
}

