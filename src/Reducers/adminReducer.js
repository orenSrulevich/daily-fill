const adminReducerInitialState = {

};


export default (state = adminReducerInitialState, action) => {
    switch (action.type) {
        case "UPDATE_ADMIN":
            let {propName, propValue} = action.payload;
            return {
                ...state,
                [propName]: propValue,
            };
            break;
        default :
            return {...state}
    }
};
