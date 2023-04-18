import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';
import Events, { eventsLoader } from './Pages/Events';
import Home from './Pages/Home';
import NewEvents from './Pages/NewEvents';
import EventDetails, { loader as eventDetailsLoader, eventDetailsAction} from './Pages/EventDetails';
import EventRoot from './Pages/EventRoot';
import EditEvents from './Pages/EditEvents';
import Error from './Pages/Error';
import  { newEventAction } from './components/EventForm';

function App() {
  
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Root />,
      errorElement : <Error />,
      children : [
        { path : '/', element : <Home /> },
        { path : '/events' , element : <EventRoot />, children : [
          { path : '/events', element : <Events /> , loader : eventsLoader },
          { path : ':eID', id : 'event-details', loader : eventDetailsLoader, children : [
            { index : true, element : <EventDetails /> , action : eventDetailsAction },
            { path : 'edit', element : <EditEvents />, action : newEventAction}
          ]},
          { path : 'new', element : <NewEvents />, action : newEventAction},
        ] },
      ]
    }

  ])

  return <RouterProvider router={router} />;
}

export default App;
