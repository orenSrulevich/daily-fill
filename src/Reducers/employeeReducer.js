import SpreadSheet from "../Services/SpreadSheet";
import CookieHandler from "../Services/CookieHandler";
import Common from "../Services/Common"

const init = () => {
    let employeeReducerInitialState = {
        employeeName: "",
        project: "",
        selectedDate: "",
        dailyText: "",
        isLoading: false
    }

    const cookieData = CookieHandler.retrieve();

    var today = Common.getTodayAsString();
    employeeReducerInitialState.selectedDate = today;

    if (cookieData) {
        employeeReducerInitialState.project = cookieData.project;
        employeeReducerInitialState.employeeName = cookieData.employeeName;
    }

    return employeeReducerInitialState;
}

const employeeReducerInitialState = init();

export default (state = employeeReducerInitialState, action) => {
    switch (action.type) {
        case "UPDATE_EMPLOYEE":
            let {propName, propValue} = action.payload;
            return {
                ...state,
                [propName]: propValue,
            }
            break;
        default :
            return {...state}
    }
};
