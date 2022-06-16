import React from "react";
import { useState } from "react";
import "../../../assets/styles/modale.scss"
import "../../../assets/styles/forms.scss"

const ModaleBuy = ({price, name, stock}) => {

    const [quantity, setQuantity] = useState(0)

    const changeQuantity = (nb) => {
        setQuantity(Number(nb))
    }

    return (
        <div className="modale-buy">
            <div className="modale-body">
                <p>Vous voulez acheter {name}</p>
                <input type="number" className="form-input buy-input" min="0" max={`${stock}`} placeholder="Quantité de sacs" onChange={event => {changeQuantity(event.target.value)}}></input>
                <p>{`${quantity} sachets de ${name} coûterons $${price*quantity}`}</p>
            </div>
        </div>
    )
}

export default ModaleBuy