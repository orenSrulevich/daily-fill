export default {
    /// return data as string (default today)
    /// if (!useIsraeliFormat) => YYYY-MM-DD
    /// if(useIsraeliFormat) => DD/MM/YYY
    getDateAsString : (useIsraeliFormat, date) => {
        let d = date || new Date();

        let day  = d.getDate();
        let month  = d.getMonth() +1;
        let year = d.getFullYear();

        let returnDate = `${day}/${month}/${year}`;

        if(!useIsraeliFormat){
            if(day < 10){
                day = "0" + day;
            }
            if(month < 10){
                month = "0" + month;
            }
            returnDate = `${year}-${month}-${day}`;
        }

        console.log("date : " , returnDate);

        return returnDate;
    },

    /// Retrieve the text from the cell, return Empty string by default
    extractSpecificDateText : (rowData,dateAsString,employeeName) => {
        const name = employeeName || "Oren";
        const values = rowData.result.values[0];

        let columnIndex = -1;
        for (var i = 0; i < values.length; i++) {
            if (values[i].toLowerCase() === name.toLowerCase()) {
                columnIndex = i;
                break;
            }
        }

        if (columnIndex === -1) {
            return ""
        }

        let rowIndex = -1;
        for (var j = 0; j < rowData.result.values.length; j++) {
            const firstDataPoint = rowData.result.values[j][0];
            if (firstDataPoint !== "Weekend") {
                if (firstDataPoint === dateAsString) {
                    rowIndex = j;
                    break;
                }
            }
        }

        if (rowIndex === -1) {
            return ""
        }

        const cellText = rowData.result.values[rowIndex][columnIndex];
        return cellText || "";

    }
}