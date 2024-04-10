import { useEffect, useState } from "react";

const VideoList = (props) => {
    const apiKey = props.apiKey;
    const teamNumber = props.teamNumber;
    const eventKey = props.eventKey;

    const [videos, setVideos] = useState([{"key": "No videos found yet"}]);

    const callApi = async () => {

        if (apiKey === null || apiKey === "") {
            console.log("No API Key provided");
            return;
        }

        const data = await fetch(`http://127.0.0.1:8000/team/frc${teamNumber}/event/${eventKey}/matches/`, {
            headers: {
                "X-TBA-Auth-Key": apiKey,
            }
        });
        const json = await data.json();

        let v = [];

        json.forEach(match => {
            if (match !== undefined && match.videos !== undefined && match.videos[0] !== undefined)
                v.push(match.videos[0]);   
        });

        setVideos([...v]);
    }

    useEffect(() => {
        callApi();

        const timer = setInterval(callApi, 1000);

        return (
            () => clearInterval(timer)
        );
    })

    return (
        <ul>
            {console.log(videos)}
            {
                videos.map(video => {
                    return (
                        <li key={video.key}>
                            <a href={`https://youtube.com/watch/${video.key}`}>youtube.com/watch/{video.key}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
}


export default VideoList;