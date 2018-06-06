const appInitialState = {
    spreadsheetData: {},
};

export default (state = appInitialState, action) => {
    switch (action.type) {
        case "UPDATE_SP_DATA":
            let {propName, propValue} = action.payload;
            return {
                ...state,
                [propName]: propValue,
            }
            break;
        default : return {...state}
    }
};
