import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { SheetsURL } from "../config/SheetsURL";

export const ReportMonth = () => {
    // TITLE
    useEffect(() => {
        document.title = 'Month Report';
    });

    // sheet
    const [month, setMonth] = useState([])
    const [click, setClick] = useState(true);

    // SHEET FUNCTIONS
    const url = SheetsURL;

    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        // DATE
        const data1 = values.Month

        // SPLIT BY `|||`
        const nVal = data1.map((item: any) => {
            return {
                item: item.split('|')
            }
        })

        // DONT RETURN EMPTY VALUES
        const nVal1 = nVal.filter((item: any) => {
            return item.item[0] !== ''
        })

        // RETURN ITEM VISE ALLOTMENT
        const nVal2 = nVal1.map((item: any) => {
            return {
                month: item.item[0],
                year: item.item[1],
                name1: item.item[2],
                value1: item.item[3],
                name2: item.item[4],
                value2: item.item[5]
            }
        })

        setMonth(nVal2)
    }

    // Output
    return (
        <div>
            <div className="contactForm">
                <div className="noSelect pt-3">
                    <div className="mt-5">
                        <div className="purple d-flex justify-content-center align-items-center font-weight-bold">
                            <h3>Month Report</h3><i className="fa-solid fa-calendar"></i>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5 align-items-center  pb-3">
                    <Link to={'/myJournal/Reports/'} className="btn-accent blk skyblue blk calImg"> <i className="fa-solid fa-arrow-left"></i> Back</Link>
                </div>
            </div>


            <div className="mainSection mt-5 noSelect">
                {
                    month.length === 0 ?
                        <div className="d-flex mt-4 text-danger">
                            {click ?
                                <button onClick={() => {
                                    fetchData();
                                    setClick(false);
                                }} className="btn-accent purple blk">Load data <i className="fa-solid fa-angle-down"></i></button>
                                :
                                <button className="btn-accent yellow blk ">Load data <i className="fa-solid fa-refresh rotateCW"></i></button>}
                        </div>
                        :
                        month.map((item: any) => {
                            return (
                                <div className="subSection month moveUp ">
                                    <p className="mon"><b>{item.month}, {item.year}:</b></p>
                                    <p className="val">{item.name1}: <b>{item.value1}</b></p>
                                    <p className="val">{item.name2}: <b>{item.value2}</b></p>
                                </div>
                            )
                        })
                }
            </div>
        </div >
    )
}
