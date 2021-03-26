import React from "react";
import HomeTable from "./HomeTable";

function List({ items, fallback }) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return <HomeTable data={items} />
    }
}

export default List;
