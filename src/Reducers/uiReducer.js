const uiReducerInitialState = {
    tabValue: 1,
    isLoading : true
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
