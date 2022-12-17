import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { Header } from "../components/Header"
import { Journal } from "../pages/Journal"
import { Home } from "../pages/Home"
import { Calendars } from "../pages/Calendar"
import { Reports } from "../pages/Reports"
import { Dashboard } from "../pages/Dashboard"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/myJournal/' element={<Home />} />
                <Route path='/myJournal/*' element={<Dashboard />} />
                <Route path='/myJournal/Dashboard' element={<Dashboard />} />
                <Route path='/myJournal/Journal' element={<Journal />} />
                <Route path='/myJournal/Calendar' element={<Calendars />} />
                <Route path='/myJournal/Reports' element={<Reports />} />
            </Routes>
        </BrowserRouter>
    )
}