const uiReducerInitialState = {
    tabValue: 0
};

export default (state = uiReducerInitialState, action) => {
    switch (action.type) {
        case "CHANGE_TAB":
            return {
                ...state,
                tabValue: action.payload
            };
        default :
            return {...state}
    }
};
