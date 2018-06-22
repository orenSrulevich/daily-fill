import CookieHandler from "../Services/CookieHandler";
import Common from "../Services/Common";


const init = () => {
    const cookieData = CookieHandler.retrieve();
    const adminReducerInitialState = {
        selectedDate: Common.getDateAsString(),
        emailView: "",
        emailTemplateData: [],
        fillingData: [],
        templateView: false,
        /// Fill from cookie is possible
        fromAddress: cookieData.fromAddress || "",
        toAddress: cookieData.toAddress || "",
        RockyStatus: cookieData.RockyStatus || "",
        NpdStatus: cookieData.NpdStatus || "",
        TolunaStatus: cookieData.TolunaStatus || "",

    };
    return adminReducerInitialState;
};

const adminReducerInitialState = init();



export default (state = adminReducerInitialState, action) => {
    switch (action.type) {
        case "UPDATE_ADMIN":
            let {propName, propValue} = action.payload;
            return {
                ...state,
                [propName]: propValue,
            };
            break;
        case "UPDATE_APP_DATA":
            if (action.payload.propName === "spreadsheetData") {
                const fillingDataAndTemplate = Common.extractFillingData(action.payload.propValue);
                return {
                    ...state,
                    fillingData: fillingDataAndTemplate.fillingData,
                    emailTemplateData: fillingDataAndTemplate.emailTemplateData
                };
                break;
            }
        case "TOGGLE_EMAIL_VIEW":
            return {
                ...state,
                templateView: !state.templateView
            }
            break;
        default :
            return {...state}
    }
};
