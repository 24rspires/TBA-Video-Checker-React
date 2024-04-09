import { useEffect, useState } from "react";

const VideoList = (props) => {
    const apiKey = props.apiKey;
    const teamNumber = props.teamNumber;
    const eventKey = props.eventKey;

    const [videos, setVideos] = useState([]);

    const callApi = () => {

        if (apiKey === null || apiKey === "") {
            console.log("No API Key provided");
            return;
        }

        fetch(`https://thebluealliance.com/api/v3/team/frc${teamNumber}/event/${eventKey}/matches/`, {
            headers: {
                "X-TBA-Auth-Key": apiKey,
            }
        })
        .then(data => data.json())
        .then(json => console.log(json));
    }

    useEffect(() => {
        const timer = setInterval(callApi, 1000);

        return (
            () => clearInterval(timer)
        );
    })

    return (
        <>

        </>
    );
}


export default VideoList;