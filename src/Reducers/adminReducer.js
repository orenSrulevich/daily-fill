import CookieHandler from "../Services/CookieHandler";
import Common from "../Services/Common";


const init = () => {
    const cookieData = CookieHandler.retrieve();
    const today = Common.getDateAsString();
    const adminReducerInitialState = {
        selectedDate : Common.getDateAsString(),
        spreadsheetUrl: cookieData.spreadsheetUrl || "",
        emailView: "",
        fromAddress: cookieData.fromAddress || "",
        toAddress: cookieData.toAddress || "",
        emailTemplateData: [],
        RockyStatus: cookieData.RockyStatus || "",
        NpdStatus: cookieData.NpdStatus || "",
        TolunaStatus: cookieData.TolunaStatus || "",
        fillingData: [],
        templateView : false
    };
    return adminReducerInitialState;
};

const adminReducerInitialState = init();

const extractFillingData = (data) => {
    if(!data){
        return [];
    }
    const names = data.result.values[0].filter(name => name !== "Date");
    let returnObj = {fillingData : [], emailTemplateData:[]};
    const dateAsString = Common.getDateAsString(true);
    names.map((name)=>{
        const text = Common.extractSpecificDateText(data,dateAsString,name);
        console.log(name,":",text);
        returnObj.fillingData.push({
            name: name,
            didFill: text !== "" ? 'Yes' : 'No'
        });
        returnObj.emailTemplateData.push({
            name: name,
            text
        });
    });

    return returnObj;
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
        case "UPDATE_APP_DATA":
            if (action.payload.propName === "spreadsheetData") {
                const fillingDataAndTemplate = extractFillingData(action.payload.propValue);
                return{
                    ...state,
                    fillingData : fillingDataAndTemplate.fillingData,
                    emailTemplateData : fillingDataAndTemplate.emailTemplateData
                };
                break;
            }
        case "TOGGLE_EMAIL_VIEW":
            return {
                ...state,
                templateView : !state.templateView
            }
            break;
        default :
            return {...state}
    }
};
