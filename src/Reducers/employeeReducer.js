import SpreadSheet from "../Services/SpreadSheet";
import CookieHandler from "../Services/CookieHandler";
import Common from "../Services/Common"

const init = () => {
    let employeeReducerInitialState = {
        employeeName: "",
        //project: "SX",
        selectedDate: "",
        dailyText: "",
        isLoading: false
    }

    const cookieData = CookieHandler.retrieve();

    const today = Common.getDateAsString();
    employeeReducerInitialState.selectedDate = today;

    if (cookieData) {
        employeeReducerInitialState.project = cookieData.project;
        employeeReducerInitialState.employeeName = cookieData.employeeName;
    }

    return employeeReducerInitialState;
};

const employeeReducerInitialState = init();

export default (state = employeeReducerInitialState, action) => {
    switch (action.type) {
        case "UPDATE_EMPLOYEE":
            let {propName, propValue} = action.payload;
            return {
                ...state,
                [propName]: propValue,
            };
            break;
        case "UPDATE_APP_DATA":
            if (action.payload.propName === "spreadsheetData") {
                const dailyText = Common.extractSpecificDateText(
                    action.payload.propValue,
                    Common.getDateAsString(true),
                    "Oren");
                return{
                    ...state,
                    dailyText
                };
            }
            return {...state};
        default :
            return {...state};
    }
};


