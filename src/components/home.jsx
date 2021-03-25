import React from "react";
import { Button } from '@material-ui/core';

function Home() {
    let [responseData, setResponseData] = React.useState([]);

    const fetchData = React.useCallback(() => {
        fetch("https://swapi.dev/api/people/1/", {
            method: 'GET',
        }).then(response => response.json())
            .then(data => setResponseData(data))
            .catch(error => console.log(error));
    }, []);

    React.useEffect(() => {
        fetchData()
    }, [fetchData]);

    return (
        <div className="Home">
            <header className="Home-header">
                <h1>Test</h1>
                <Button type='button' onClick={fetchData}>Click for Data</Button>
                <p>{responseData.name}</p>
            </header>
        </div>
    )
}

export default Home;
