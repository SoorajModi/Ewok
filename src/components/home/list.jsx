import React from "react";
import HomeTable from "./homeTable";

function List({ items, fallback }) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return <HomeTable data={items} />
    }
}

export default List;
