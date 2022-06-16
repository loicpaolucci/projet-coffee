import ModaleBuy from "../../components/Modales/ModaleBuy/ModaleBuy"

export const openBuyModale = () => {
    document.getElementById('root').insertAdjacentHTML('beforeend', <ModaleBuy />)
}