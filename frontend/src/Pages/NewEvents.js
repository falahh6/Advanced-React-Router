// import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEvents = () =>{
    return <>
        <EventForm method="post" /> 
    </>
}
export default NewEvents;

