import PageContent from "../components/PageContent"
import { useRouteError } from "react-router-dom";
import MainNavigation from "../layouts/MainNavigation";
const Error = () => {
    const error = useRouteError();
    let title = 'An error occured!';
    let message = 'Something went wrong';

    if(error.status === 500){
        message = error.data.message; 
    }

    if(error.status === 404){
        title = 'Not found!';
        message = 'Could not find resources'
    }

    return <>
        <MainNavigation />
        <PageContent title={title} />
        <p>{message}</p>
    </> 
}

export default Error;