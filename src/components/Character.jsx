import React from "react";
import FallBack from "./FallBack";

let swapiURL = "https://swapi.dev/api/people/";

const fetchData = (id) => {
    if (id > 83 || id < 1) id = 1;
    swapiURL += id + "/";
    return fetch(swapiURL).then(res => res.json());
};

function CharContents({char}) {
    return (
        <>
            <p>Name: {char.name}</p>
            <p>Gender: {char.gender}</p>
            <p>Birth Year: {char.birth_year}</p>
            <p>Birth Year: {char.birth_year}</p>
            <p>Height: {char.height}</p>
            <p>Mass: {char.mass}</p>
            <p>Hair Color: {char.hair_color}</p>
            <p>Skin Color: {char.skin_color}</p>
        </>
    )
}

function RenderCharContents({items, fallback}) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return <CharContents char={items}/>
    }
}

function Character(props) {
    let [charData, setCharData] = React.useState({});
    const id = props.match.params.id;

    React.useEffect(() => {
        fetchData(id)
            .then(data => setCharData(data))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <>
            <h1>Character</h1>
            <RenderCharContents items={charData} fallback={<FallBack/>}/>
        </>
    )
}

export default Character;
