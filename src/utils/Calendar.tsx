import { useState } from 'react';
import Calendar from 'reactjs-availability-calendar'
import '../styles/Calendar.css';

export const Calendars = () => {
    // fetch data from google sheets
    const [data, setData] = useState([]);
    const [req, setReq] = useState('');

    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=sqiV_pqLHEl8xLoQ9CJUxa6MS5mccCGDYj8FciKSI2tz81RlEtscxzAus6UkkZbaEfGtsVteS9mwFnftbXHl_idDMof_y54bm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGsy-dnwbs2K1L3hlkMPAS8_iuBOuLSK_pAvPhX0puQ-QSZeKD8KO4vb7Hs9tpWKTxIUTIcyFVLrfglSsBCK54ESHUXg6H4xJdz9Jw9Md8uu&lib=M3F1BTSbd-dlV_V0TT11YoiNPQFieuaK3";

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
    }

    const bookings = data

    const options = [
        { value: '', text: '--Choose an option--' },

        { value: 'Recorded', text: 'Recorded' },
        { value: 'Tasks', text: 'Tasks' },
        { value: 'Early Sleep', text: 'Early Sleep' },
        { value: 'Early Wake', text: 'Early Wake' },
        { value: 'Meditation', text: 'Meditation' },
        { value: 'Talks', text: 'Talks' },
        { value: 'Coding', text: 'Coding' },
        { value: 'Project work', text: 'Project work' },
        { value: 'Connects', text: 'Connects' },
        { value: 'Out of Zone', text: 'Out of Zone' },
        { value: 'Food', text: 'Food' },
        { value: 'Hrs Wasted', text: 'Hrs Wasted' },
        { value: 'Negativity', text: 'Negativity' },
        { value: 'Music', text: 'Music' },
        { value: 'Sleep', text: 'Sleep' },
        { value: 'Burnout', text: 'Burnout' },
    ];

    const handleChange = (event: any) => {
        setReq(event.target.value);
    };


    return (
        <div className="Reader">
            <select value={req} onChange={handleChange} onClick={fetchData} className="form-select pushDown100 mb-5">
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>

            <Calendar bookings={bookings} />
        </div>
    )
}

