const userInitialState = {
    name: "Oren",
    age: "34"
}

export default (state = userInitialState, action) => {
    switch (action.type) {
        case "SET_NAME_FULFILLED":
            return {
                ...state,
                name: action.payload
            }
        case "SET_AGE":
            return state = {
                ...state,
                age: action.payload
            };
        default :
            return {...state}
    }
};