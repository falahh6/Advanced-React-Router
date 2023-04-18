import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEvents = () =>{
    return <>
        <EventForm /> 
    </>
}
export default NewEvents;

export const newEventAction = async ({request, params}) => {

    const data = await request.formData();

    const eventData = {
        title : data.get('title'),
        image : data.get('image'),
        date : data.get('date'),
        description : data.get('description')
    }


    const response = await fetch('http://localhost:8080/events', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(eventData)
    })

    if(response.ok){
        return redirect('/events');
    } else {
        throw json({message : 'Could not save event'}, {status : 500});
    }

}