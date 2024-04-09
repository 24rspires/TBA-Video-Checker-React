import { useState } from 'react';
import InputForm from './InputForm';
import VideoList from './Videolist';


const App = () => {
  const [apiKey, setApiKey] = useState("");
  const [teamNumber, setTeamNumber] = useState(4611);
  const [eventKey, setEventKey] = useState("2024ohmv");


  const handleSubmit = (ev) => {
    ev.preventDefault();

    setApiKey(ev.target.apiKey.value);
    setTeamNumber(+ev.target.teamNumber.value);
    setEventKey(ev.target.eventKey.value);
  }



  return (
    <>
      <InputForm onSubmit={handleSubmit} />
      <VideoList apiKey={apiKey} teamNumber={teamNumber} eventKey={eventKey} />
    </>
  )
}

export default App
