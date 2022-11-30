import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/Firebase";
import { SignIn } from "../security/SignIn"
import { Dashboard } from "./Dashboard";

export const Home = () => {
    const [user] = useAuthState(auth);

    // sheet
    const [email, setEmail] = useState([])

    // SHEET FUNCTIONS
    const url = "https://script.google.com/macros/s/AKfycbzcUU_Qa6vthx_X-bBZcoALtOe5coqAc8bsOFFeFxCKH1oDGUGzQCVWL_NDKvo7W45iuw/exec";

    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        const emailValues = values.users;

        // split val  by ,
        const rVal = emailValues.map((item: any) => {
            return {
                item: item.split('|||')
            }
        })

        // return item vise allotment
        const rVal2 = rVal.map((item: any) => {
            return {
                email: item.item[0],
            }
        })

        // DONT RETURN EMPTY VALUES
        const finalVal = rVal2.filter((item: any) => {
            return item.email !== ''
        })

        // CHECK FOR USER
        const finalVal2 = finalVal.filter((item: any) => {
            return item.email === user?.email
        })

        console.log(finalVal2);
        setEmail(finalVal2)
    }

    // USE EFFECT
    useEffect(() => {
        fetchData()
    })

    return (
        <>
            {
                email.length !== 0
                    ?
                    <div>
                        <Dashboard />
                    </div>
                    :
                    <div className="d-flex justify-content-center align-items-center flex-column noSelect" style={{ height: '80vh' }}>
                        <h1><span className="text-danger">Partially Restricted</span> as for <span className="text-success">now</span></h1>
                        <br /><br />
                        <SignIn />
                    </div>
            }
        </>
    )
}
