import CookieHandler from "../Services/CookieHandler";
import SpreadSheet from "../Services/SpreadSheet";

const getTodayAsString = () => {
    const today = new Date();
    const dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    if (mm < 10) {
        mm = '0' + mm;
    }
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;

}

/*const employeeReducerInitialState = () => {
    let baseInitObject = {
        employeeName: "Oren",
        project: "SX",
        selectedDate: getTodayAsString(),
        dailyText: "",
        isLoading: true
    }

    const cookieData = CookieHandler.retrieve();

    if (cookieData) {
        baseInitObject.employeeName = cookieData.employeeName
        baseInitObject.project = cookieData.project
    }

    SpreadSheet.getCellData().then((toadyText) => {
            baseInitObject.dailyText = toadyText;
        }
    );

    return baseInitObject;
};*/

const employeeReducerInitialState = {
    employeeName: "Oren",
    project: "SX",
    selectedDate: getTodayAsString(),
    dailyText: "",
    isLoading: true
}


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
