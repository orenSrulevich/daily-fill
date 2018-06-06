import CookieHandler from "../Services/CookieHandler";
import Common from "../Services/Common";


const init = () => {
    const cookieData = CookieHandler.retrieve();
    const today = Common.getTodayAsString();
    const adminReducerInitialState = {
        selectedDate : Common.getTodayAsString(),
        spreadsheetUrl: cookieData.spreadsheetUrl || "",
        emailView: "",
        fromAddress: cookieData.fromAddress || "",
        toAddress: cookieData.toAddress || "",
        emailTemplateData: "",
        RockyStatus: cookieData.RockyStatus || "",
        NpdStatus: cookieData.NpdStatus || "",
        TolunaStatus: cookieData.TolunaStatus || "",
        fillingData: []
    };
    return adminReducerInitialState;
};

const adminReducerInitialState = init();

const extractFillingData = (data) => {
    if(!data){
        return [];
    }
    const names = data.result.values[0].filter(name => name !== "Date");
    let returnObj = [];
    const dateAsString = Common.getTodayAsString();

    names.map((name)=>{
        const text = Common.extractSpecificDateText(data,dateAsString,name);
        returnObj.push({
            name: name,
            didFill: text !== "" ? 'Yes' : 'No'
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
                const fillingData = extractFillingData(action.payload.propValue);
                return{
                    ...state,
                    fillingData
                };
                break;
            }
        default :
            return {...state}
    }
};
