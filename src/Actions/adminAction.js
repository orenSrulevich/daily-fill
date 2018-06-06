//updateAdminData

export function updateAdmin(propName,propValue) {
    return {
        type:"UPDATE_ADMIN",
        payload: {
            propName,
            propValue
        }
    }
}
