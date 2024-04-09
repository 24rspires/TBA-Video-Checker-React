const InputForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <label htmlFor="apiKey">API Key:</label>
            <input type="password" name="apiKey" id="apiKey" placeholder="Insert API Key"/><br />

            <label htmlFor="teamNumber">Team Number:</label>
            <input type="number" name="teamNumber" id="teamNumber" defaultValue={4611}/><br />

            <label htmlFor="eventKey">Event Key:</label>
            <input type="text" name="eventKey" id="eventKey" defaultValue={"2024ohmv"}/><br />

            <input type="submit" value="Submit" />
        </form>
    );
}


export default InputForm;