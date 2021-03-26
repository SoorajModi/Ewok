import React from "react";
import List from './List'
import FallBack from "./FallBack";

const swapiURL = "https://swapi.dev/api/people/";
const fetchData = () => fetch(swapiURL).then(res => res.json());

function Home() {
    let [responseData, setResponseData] = React.useState([]);

    React.useEffect(() => {
        fetchData()
            .then(data => setResponseData(data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="Home">
            <header className="Home-header">
                <h1>SWAPI</h1>
                <List items={responseData} fallback={<FallBack />}/>
            </header>
        </div>
    )
}

export default Home;
