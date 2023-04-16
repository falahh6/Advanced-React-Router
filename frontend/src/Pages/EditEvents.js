import { useParams } from "react-router-dom";

const EditEvent = () => {
    const params = useParams();
    console.log(params);
    return <>
        <h1>This is Events Editing Page</h1>
        <p>{params.eID}</p>
    </>  

}

export default EditEvent;