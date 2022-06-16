import React from "react";
import ModaleBuy from "../../../Modales/ModaleBuy";
import { useState } from "react";
import "../../../../assets/styles/cofeeCards.scss"
import LogoWithName from '../../../../assets/Images/LogoWithName.png'

const CofeeComponent = ({ product }) => {

    const [toggleModale, setToggleModae] = useState(false)

    const startBuy = () => {
        setToggleModae(!toggleModale)
    }

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <h4>{product.country}</h4>
            <ul>
                <li>{product.intensity}</li>
                <li>{product.stock}</li>
                <li>${product.price}</li>
            </ul>
            <div className="product-description">
                <h5>{product.description}</h5>
            </div>
            <div className="buy-action-div">
                <button className="btn buy-cofee" onClick={startBuy}>Buy Cofee</button>
                <img src={LogoWithName} alt="Logo LeBonCafé" />
            </div>
            {toggleModale ? <ModaleBuy price={product.price} name={product.name} closeModal={startBuy} stock={product.stock}/> : <></>}
        </div>
    )
}

export default CofeeComponent