import React from "react";
import List from './list'
import FallBack from "../fallBack";

const swapiURL = "https://swapi.dev/api/people/";

const fetchData = () => {
    const apiPromises = [];
    const pagesRequired = 9;

    for (let i = 1; i <= pagesRequired; i++) {
        apiPromises.push(fetch(swapiURL + "?page=" + i));
    }

    return Promise.all(apiPromises)
        .then(res => res.map(r => r.json()))
        .then(res => Promise.all(res))
        .then(res => res.map(r => r.results).flat());
};

function Home() {
    let [responseData, setResponseData] = React.useState([]);

    React.useEffect(() => {
        fetchData()
            .then(data => setResponseData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="Home" style={{paddingTop: "10vh"}}>
            <header className="Home-header">
                <List items={responseData} fallback={<FallBack/>}/>
            </header>
        </div>
    )
}

export default Home;
