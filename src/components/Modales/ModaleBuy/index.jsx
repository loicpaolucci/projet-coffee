import React from "react";
import { useState } from "react";
import AppStore from "stores/Redux/AppStore";
import { AddOrder } from "apiCalls/AddOrder";
import "../../../assets/styles/modale.scss"
import "../../../assets/styles/forms.scss"

const ModaleBuy = ({price, name, stock, closeModal, id}) => {

    const [quantity, setQuantity] = useState(0)

    const changeQuantity = (nb) => {
        setQuantity(Number(nb))
    }

    const buy = () => {
        const datas = {
            order: {
                quantity: quantity,
                user_id: AppStore.getState().state.user.id,
                product_id: id
            }
        }
        AddOrder(datas,AppStore)
    }

    const close = () => {
        setTimeout(function() {
            closeModal()
          }, 500);
        document.getElementById("modale").classList.toggle('closing-anim')
    }

    return (
        <div className="modale-buy" id="modale">
            <div className="modale-body">
                <h2>Vous voulez acheter {name}</h2>
                <input type="number" className="form-input buy-input" min="1" max={`${stock}`} placeholder="Quantité de sacs" onChange={event => {changeQuantity(event.target.value)}}></input>
                <p>{`${quantity} sachets de ${name} coûterons $${price*quantity}`}</p>
                <div>
                    <button className="btn close-btn" onClick={close}>Close</button>
                    <button className="btn close-btn" onClick={() => {buy(); setTimeout(function() {
                        close();
                    }, 500);}}>Acheter</button>
                </div>
            </div>
        </div>
    )
}

export default ModaleBuy