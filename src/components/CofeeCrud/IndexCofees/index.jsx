import React from "react";
import { useState } from "react";

const IndexCofees = () => {

    const [cofeeList, setList] = useState()

    const prepList = (list) => {
        setList(list)
    }

    const list = () => {
        fetch("https://mycoffees.herokuapp.com/products", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => { return (response.json()) })
            .then((response) => prepList(JSON.stringify(response)))
    }

    return (
        <>
            <button onClick={list}>CLICK ME</button>
        </>
    )
}

export default IndexCofees