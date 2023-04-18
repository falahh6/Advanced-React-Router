import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const { events } = useLoaderData();

    return <Suspense fallback={<p>Loading...</p>}> 
        <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />    }
        </Await>
    </Suspense>
}

export default EventsPage;

export const eventsLoader = async  () => {
        const response = await fetch('http://localhost:8080/events');
        if (!response.ok) {
        //   return { isError : true, message : 'uh oh, :) - Error fetching events'};
        // throw new Response(JSON.stringify({message : 'Could not fetch events'}), {status : 500})
        throw json({message : 'Could not fetch events'}, {status : 500});
        } else {
          const result = await response.json();
          return result.events;
        }
}

export const loader = async () => {
    return defer({
        events : eventsLoader()
    })
}