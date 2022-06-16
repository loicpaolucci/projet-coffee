import React from "react";
import { openBuyModale } from "../../../../functions/openModal/openBuyModal";
import "../../../../assets/styles/cofeeCards.scss"
import LogoWithName from '../../../../assets/Images/LogoWithName.png'

const CofeeComponent = ({ product }) => {

    const startBuy = () => {
        openBuyModale()
    }

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.counrty}</p>
            <ul>
                <li>{product.intensity}</li>
                <li>{product.stock}</li>
            </ul>
            <div className="product-description">
                <p>{product.description}</p>
            </div>
            <div className="buy-action-div">
                <button className="btn buy-cofee" onClick={startBuy} >Buy Cofee</button>
                <img src={LogoWithName} alt="Logo LeBonCafé" />
            </div>
        </div>
    )
}

export default CofeeComponent