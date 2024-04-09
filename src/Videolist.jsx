import { useState } from "react";

const VideoList = (props) => {
    const apiKey = props.apiKey;
    const teamNumber = props.teamNumber;
    const eventKey = props.eventKey;

    const [videos, setVideos] = useState([]);

    const callApi = async () => {
        const data = await fetch(`https://thebluealliance.com/api/v3/team/frc${teamNumber}/event/${eventKey}/matches`, {
            headers: {
                "X-TBA-Auth-Key": apiKey,
            },
        });

        const json = data.json();

        console.log(json);
    }

    setInterval(callApi, 1000);

    return (
        <>

        </>
    );
}


export default VideoList;