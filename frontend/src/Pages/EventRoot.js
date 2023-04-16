import EventNav from "../layouts/EventNav"
import { Outlet } from "react-router-dom";
const EventRoot = () => {
    return <>
    <EventNav />
    <main>
        <Outlet />
    </main>
    </> 
}

export default EventRoot;