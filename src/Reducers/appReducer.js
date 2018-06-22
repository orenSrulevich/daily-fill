
import CookieHandler from "../Services/CookieHandler";

const init = () => {
    const cookieData = CookieHandler.retrieve();
    const appReducerInitialState = {
        spreadsheetData: {},
        spreadsheetId: cookieData.spreadsheetId || "",
        spreadsheetTabName: cookieData.spreadsheetTabName || "",

    };
    return appReducerInitialState;
};

const appReducerInitialState = init();

export default (state = appReducerInitialState, action) => {
    switch (action.type) {
        case "UPDATE_APP_DATA":
            let {propName, propValue} = action.payload;
            return {
                ...state,
                [propName]: propValue,
            };
            break;
        default : return {...state}
    }
};
