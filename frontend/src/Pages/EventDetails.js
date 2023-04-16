import { useParams } from "react-router-dom";

const EventDetails = () => {
    const params = useParams();
    return <>
    <h1>This is Event Details Page</h1>
    <p>Event ID : {params.eID}</p>
    {/* <button> <Link to={`events/${params.eID}/edit`}>Edit event</Link> </button> */}
    </> 
}

export default EventDetails;