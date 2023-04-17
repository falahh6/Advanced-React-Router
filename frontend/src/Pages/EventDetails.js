import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from '../components/EventItem';
const EventDetails = () => {
    const data = useRouteLoaderData('event-details');
    return <>
    <EventItem event={data.event} />
    </> 
}

export default EventDetails;

export const loader = async ({request , params}) => {
    const id = params.eID;

    const response = await fetch('http://localhost:8080/events/' + id)

    if(!response.ok){
        throw json({message : 'Event Details could not be displayed'}, {status : 500})
    } else {
        const data = response.json();
        return data;
    }
}

export const eventDetailsAction = async ({ params , request }) => {
    const id = params.eID;
    const response = await fetch('http://localhost:8080/events/' + id, {
        method : request.method
    });

    if(!response.ok){
        throw json({message : 'Could not delete the Event'}, {status : 500})
    } 
    return redirect('/events');
}