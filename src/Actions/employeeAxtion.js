export function updateEmployee(propName,propValue) {
    return {
        type:"UPDATE_EMPLOYEE",
        payload: {
            propName,
            propValue
        }
    }
}
