import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const IndexCofees = () => {

    const [cofeeList, setList] = useState("")
    const [showList, setShow] = useState("")

    const prepList = (list) => {
        setList(JSON.stringify(list))
        setShow(cofeeList)
    }

    const filter = (value) => {
        setShow(JSON.stringify(JSON.parse(cofeeList).filter(elem => (elem.name.includes(value)))))
    }

    useEffect(() => {
        fetch("https://mycoffees.herokuapp.com/products", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => { return (response.json()) })
            .then((response) => {prepList(response)
            console.log(response)
            console.log(cofeeList)})
    }, []);

    return (
        <>
            <form class="search-form" id="search-form">
                <input type="text" id="search-bar" name="search-bar" onChange={event => {filter(event.target.value)}}></input>
            </form>
            <div>
                {showList.length > 1 ? JSON.parse(cofeeList).map(elem => (
                    <p>{elem.name}</p>
                )) : <></>}
            </div>
        </>
    )
}

export default IndexCofees