import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';
const EditEvent = () => {
    const data = useRouteLoaderData('event-details');
    return <>
        <EventForm method="patch" event={data.event}/>
    </>  

}

export default EditEvent;