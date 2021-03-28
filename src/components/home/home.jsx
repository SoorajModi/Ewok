import React from "react";
import List from './list'
import FallBack from "../fallBack";

const swapiURL = "https://swapi.dev/api/people/";
const fetchData = () => fetch(swapiURL, {
    method: "GET"
}).then(res => res.json());

// const fetchData = () => fetch(swapiURL, {
//     method: "GET"
// }).then(res => {
//     res = res.json();
//     console.log(res);
//     const apiPromises = [];
//     const pagesRequired = 9;
//
//     for (let i = pagesRequired; i > 0; i--) {
//         apiPromises.push(fetch(swapiURL + "?page=" + i ));
//     }
//
//     return Promise.all(apiPromises)
//         .then(responses => {
//             const processedResponses = [];
//             responses.map(response => {
//                 // console.log(response);
//                 return processedResponses.push(response);
//             });
//             return processedResponses;
//         });
// });

// const fetchAllData = () => {
//     const apiPromises = [];
//     const pagesRequired = 9;
//
//     for (let i = pagesRequired; i > 0; i--) {
//         apiPromises.push(fetch(swapiURL + "?page=" + i));
//     }
//
//     console.log(apiPromises);
//
//     const processedResponses = [];
//     return Promise.all(apiPromises)
//         .then(responses => {
//             console.log("responses:" + responses);
//             responses.forEach(response => {
//                 console.log("result: " + response);
//                 processedResponses.push(response.json());
//             });
//             console.log("processed: " + processedResponses);
//             return processedResponses;
//         })
// };

function Home() {
    let [responseData, setResponseData] = React.useState([]);

    React.useEffect(() => {
        fetchData()
            .then(data => {
                setResponseData(data.results)
            })
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
