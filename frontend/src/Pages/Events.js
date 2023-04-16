import { Link } from "react-router-dom";
const EVENTS = [
    {
        id : '9991',
        name : 'event 1'
    },
    {
        id : '9992',
        name : 'event 2'
    },
    {
        id : '9993',
        name : 'event 3'
    }
]

const Events = () => {
    return <>
    <h1>Events</h1>
    {EVENTS.map(event => (
        <li key={event.id} > <Link to={`/events/${event.id}`} >{event.name}</Link> </li>
    ))}
    </> 

}

export default Events;