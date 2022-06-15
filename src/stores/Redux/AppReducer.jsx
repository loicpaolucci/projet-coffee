import Cookies from "js-cookie"

const initialState = {
    token: Cookies.get('jwt-token') ? Cookies.get('jwt-token') : "",
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {}
}

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'EDIT_USER' : 
            return { ...state, user: action.newUser }
        case 'EDIT_TOKEN' :
            return { ...state, token: action.newToken }
        case 'DESTROY':
            return { ...state, user: null, token: ""}
        default :
            return { state }
    }
}   