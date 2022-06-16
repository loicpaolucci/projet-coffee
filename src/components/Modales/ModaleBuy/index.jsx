import React from "react";
import { useState } from "react";
import "../../../assets/styles/modale.scss"
import "../../../assets/styles/forms.scss"

const ModaleBuy = ({price, name, stock, closeModal}) => {

    const [quantity, setQuantity] = useState(0)

    const changeQuantity = (nb) => {
        setQuantity(Number(nb))
    }

    const close = () => {
        closeModal()
    }

    return (
        <div className="modale-buy">
            <div className="modale-body">
                <h2>Vous voulez acheter {name}</h2>
                <input type="number" className="form-input buy-input" min="0" max={`${stock}`} placeholder="Quantité de sacs" onChange={event => {changeQuantity(event.target.value)}}></input>
                <p>{`${quantity} sachets de ${name} coûterons $${price*quantity}`}</p>
                <div>
                    <button className="btn close-btn" onClick={close}>Close</button>
                    <button className="btn close-btn" onClick={close}>Acheter</button>
                </div>
            </div>
        </div>
    )
}

export default ModaleBuy