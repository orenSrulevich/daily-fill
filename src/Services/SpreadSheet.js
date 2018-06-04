const params = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: '1J6RqvJ871iJ5w-ZdhbzACDEHHKhgmRygPBG5VQVcRoU',  // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    range: 'Q2 2018',  // TODO: Update placeholder value.

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    //valueRenderOption: '',  // TODO: Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    //dateTimeRenderOption: '',  // TODO: Update placeholder value.
};

function makeApiCall() {

}

function initClient(callBack) {
    var API_KEY = 'AIzaSyCs57BECCdgXqK9Nysacr_HyJ8zPSaGETU';  // TODO: Update placeholder with desired API key.

    var CLIENT_ID = '51980450123-eo7utrs2evqqehqferbplmplloufvjoj.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

    // TODO: Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/drive.readonly'
    //   'https://www.googleapis.com/auth/spreadsheets'
    //   'https://www.googleapis.com/auth/spreadsheets.readonly'
    var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

    window.gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        callBack();
    });
}

function handleClientLoad() {
   // window.gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
        //makeApiCall();
    }
}

function handleSignInClick(event) {
    window.gapi.auth2.getAuthInstance().signIn();
}

handleClientLoad();

export default {
    initGapi:(callBack)=>{
      window.gapi.load('client:auth2', ()=>{initClient(callBack);});
    },
    getCellData: () => {
        window.gapi.auth2.getAuthInstance().signIn();
        return window.gapi.client.sheets.spreadsheets.values.get(params);;
    },
    updatCellData: (newText)=>{
        window.gapi.auth2.getAuthInstance().signIn();
        const valueRangeBody = {
            range:"Q2 2018!C:65",
            values:["Oren"]
        };//C65
        return window.gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody);
    },
    GetEmailTemplateData: () => {
        return new Promise((res, rej) => {
                const data = [
                    {
                        name: "Carmel",
                        text : "deploy new data push tyo codebook prod COD-576 Staging very slow with IP .\n" +
                        "PS-10687\n" +
                        "Soft Launch - MC (Multi Country) - Apply to all checkbox is not showing\n" +
                        "PS-10569\n" +
                        "NPD/Rocky - no available panelists in Random mode for out-go quota\n" +
                        "deep learning feasiiblity"
                    },
                    {
                        name: "Danny",
                        text : "deploy new data push tyo codebook prod COD-576 Staging very slow with IP .\n" +
                        "PS-10687\n" +
                        "Soft Launch - MC (Multi Country) - Apply to all checkbox is not showing\n" +
                        "PS-10569\n" +
                        "NPD/Rocky - no available panelists in Random mode for out-go quota\n" +
                        "deep learning feasiiblity"
                    },
                    {
                        name: "Barak",
                        text : "deploy new data push tyo codebook prod COD-576 Staging very slow with IP .\n" +
                        "PS-10687\n" +
                        "Soft Launch - MC (Multi Country) - Apply to all checkbox is not showing\n" +
                        "PS-10569\n" +
                        "NPD/Rocky - no available panelists in Random mode for out-go quota\n" +
                        "deep learning feasiiblity"
                    },
                    {
                        name: "Oren",
                        text : "deploy new data push tyo codebook prod COD-576 Staging very slow with IP .\n" +
                        "PS-10687\n" +
                        "Soft Launch - MC (Multi Country) - Apply to all checkbox is not showing\n" +
                        "PS-10569\n" +
                        "NPD/Rocky - no available panelists in Random mode for out-go quota\n" +
                        "deep learning feasiiblity"
                    }
                ];
                setTimeout(() => res(data), 2000)
            }
        )
    }
}