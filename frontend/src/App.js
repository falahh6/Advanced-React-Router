import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';
import Events, {loader as  eventsLoader } from './Pages/Events';
import Home from './Pages/Home';
import NewEvents, { newEventAction } from './Pages/NewEvents';
import EventDetails, { loader as eventDetailsLoader, eventDetailsAction} from './Pages/EventDetails';
import EventRoot from './Pages/EventRoot';
import EditEvents from './Pages/EditEvents';
import Error from './Pages/Error';
import Newsletter, { newsletterActions } from './Pages/Newsletter';

function App() {
  
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Root />,
      errorElement : <Error />,
      children : [
        { index : true, element : <Home /> },
        { path : '/events' , element : <EventRoot />, children : [
          { index : true, element : <Events /> , loader : eventsLoader },
          { path : ':eID', id : 'event-details', loader : eventDetailsLoader, children : [
            { index : true, element : <EventDetails /> , action : eventDetailsAction },
            { path : 'edit', element : <EditEvents /> }
          ]},
          { path : 'new', element : <NewEvents />, action : newEventAction},
        ] },
        { path : 'newsletter', element : <Newsletter />, action : newsletterActions}
      ]
    }

  ])

  return <RouterProvider router={router} />;
}

export default App;
