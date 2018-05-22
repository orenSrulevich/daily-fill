const mathInitialState = {
    result: 1,
    latestValues: []
}

export default (state = mathInitialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                result: state.result + action.payload,
                latestValues: [...state.latestValues, action.payload]
            }
        case "SUBTRACT":
            return {
                ...state,
                result: state.result - action.payload,
                latestValues: [...state.latestValues, action.payload]
            };
            break;
        default : return {...state}
    }
};
