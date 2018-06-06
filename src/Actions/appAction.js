
export function updateApp(propName,propValue) {
    return {
        type:"UPDATE_APP_DATA",
        payload: {
            propName,
            propValue
        }
    }
}
