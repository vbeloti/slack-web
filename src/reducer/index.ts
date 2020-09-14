export const initialState = {
    user: null
}

export const actionTypes = {
    SET_USER: 'SET_USER'
}

export interface IUser {
    displayName: string;
    photoURL: string;
}

export interface IState {
    user: IUser | null;
}

export interface IAction {
    type: string;
    user: IState;
}


const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
    
        default:
            return state;
    }
};

export default reducer;