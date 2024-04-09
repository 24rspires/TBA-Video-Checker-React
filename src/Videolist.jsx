import { useState } from "react";

const VideoList = (props) => {
    const apiKey = props.apiKey;
    const teamNumber = props.teamNumber;
    const eventKey = props.eventKey;

    const [videos, setVideos] = useState([]);

    const callApi = () => {

    }

    setInterval(callApi, 1000)

    return (
        <>

        </>
    )
}


export default VideoList;