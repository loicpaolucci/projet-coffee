import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CofeeComponent from "./CofeeComponent";

const IndexCofees = () => {

    const [cofeeList, setList] = useState("")
    const [showList, setShow] = useState("")

    const prepList = (list) => {
        setList(JSON.stringify(list))
        setShow(JSON.stringify(list))
    }

    const filter = (value) => {
        setShow(JSON.stringify(JSON.parse(cofeeList).filter(elem => (
            elem.name.toUpperCase().includes(value.toUpperCase()) || elem.country.toUpperCase().includes(value.toUpperCase())
            ))))
    }

    useEffect(() => {
        fetch("https://mycoffees.herokuapp.com/products", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => { return (response.json()) })
            .then((response) => {prepList(response)})
    }, []);

    return (
        <>
            <form className="search-form" id="search-form">
                <input type="text" id="search-bar" name="search-bar" onChange={event => {filter(event.target.value)}}></input>
            </form>
            <div className="cofee-list">
                {showList.length > 1 ? JSON.parse(showList).map(product => (
                    <CofeeComponent key={product.id} product={product}/>
                )) : <></>}
            </div>
        </>
    )
}

export default IndexCofees