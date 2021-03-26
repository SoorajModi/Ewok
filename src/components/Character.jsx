import React from "react";
import FallBack from "./FallBack";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

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

function RenderBreadcrumb({items}) {
    if (!items || items.length === 0) {
        return <Typography color="textPrimary">Character</Typography>;
    } else {
        return <Typography color="textPrimary">{items.name}</Typography>;
    }
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
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <RenderBreadcrumb items={charData}/>
            </Breadcrumbs>
            <RenderCharContents items={charData} fallback={<FallBack/>}/>
        </>
    )
}

export default Character;
