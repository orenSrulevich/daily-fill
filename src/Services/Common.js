/// PRIVATE
const getCellRange = (name, rowData, dateAsString) => {
    const values = rowData.result.values[0];
    let returnObj = {row: -1, col: -1};

    let columnIndex = -1;
    for (var i = 0; i < values.length; i++) {
        if (values[i].toLowerCase() === name.toLowerCase()) {
            columnIndex = i;
            break;
        }
    }

    if (columnIndex === -1) {
        return returnObj
    } else {
        returnObj.col = columnIndex;
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
        return returnObj
    } else {
        returnObj.row = rowIndex;
    }

    return returnObj;
}


export default {
    /// return data as string (default today)
    /// if (!useIsraeliFormat) => YYYY-MM-DD
    /// if(useIsraeliFormat) => DD/MM/YYY
    getDateAsString: (useIsraeliFormat, date) => {
        let d = date || new Date();

        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();

        let returnDate = `${day}/${month}/${year}`;

        if (!useIsraeliFormat) {
            if (day < 10) {
                day = "0" + day;
            }
            if (month < 10) {
                month = "0" + month;
            }
            returnDate = `${year}-${month}-${day}`;
        }

        console.log("date : ", returnDate);

        return returnDate;
    },

    getCellRange : getCellRange,

    /// Retrieve the text from the cell, return Empty string by default
    extractSpecificDateText: (rowData, dateAsString, employeeName) => {
        const name = employeeName || "Oren";

        const range = getCellRange(name, rowData, dateAsString)

        if (range.row == -1 || range.col == -1) {
            return "";
        }

        const cellText = rowData.result.values[range.row][range.col];
        return cellText || "";

    },

    /// get column Latter based on index up tp 20
    getColumnAsLatter: (index) => {
        const dictionary = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        return dictionary[index];
    }
}