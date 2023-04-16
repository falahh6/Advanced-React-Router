import {useLoaderData, json } from "react-router-dom";
import EventItem from '../components/EventItem';
const EventDetails = () => {
    const data = useLoaderData();

    return <>
    <EventItem event={data.event}/>
    </> 
}

export default EventDetails;

export const loader = async ({request , params}) => {
    const id = params.eID;

    const response = await fetch('http://localhost:8080/events/' + id)

    if(!response.ok){
        throw json({message : 'Event Details could not be displayed'}, {status : 500})
    } else {
        return response;
    }
}