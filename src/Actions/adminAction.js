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
export function toggleEmailTemplateView() {
    return {
        type:"TOGGLE_EMAIL_VIEW"
    }
}

