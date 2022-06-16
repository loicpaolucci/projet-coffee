export const AddOrder = (datas, AppStore) => {
    fetch("https://mycoffees.herokuapp.com/orders", {
        method: "post",
        headers: {
            "Authorization": AppStore.getState().state.token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
    }).then((response) => {
        return (response.json())
    }).then((response) => {
        console.log(response)
    })
    alert('Votre commande à été passé')
}