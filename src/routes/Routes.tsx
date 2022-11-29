import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { Header } from "../components/Header"
import { Form } from "../pages/Form"
import { Home } from "../pages/Home"
import { Calendars } from "../pages/Calendar"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/myJournal/*' element={<Home />} />
                <Route path='/myJournal/Form' element={<Form />} />
                <Route path='/myJournal/Calendar' element={<Calendars />} />
            </Routes>
        </BrowserRouter>
    )
}