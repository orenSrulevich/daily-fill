import React, {Component, Fragment} from "react";
import {
    Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField,
    Typography
} from "material-ui";
import SpreadSheet from "../Services/SpreadSheet";
import EmailTemplate from "../Components/EmailTemplate";
import CookieHandler from "../Services/CookieHandler";
import {connect} from "react-redux";
import {toggleEmailTemplateView, updateAdmin, updateDate} from "../Actions/adminAction";
import Common from "../Services/Common";
import {updateApp} from "../Actions/appAction";


class Admin extends Component {
    constructor(props) {
        super(props);
    }

    handleDateChange = (event)=>{
        // update store
        this.handleChange(event);

        //extract selected date
        const newDate = new Date(event.target.value);

        //Extract Filling Data
        const fillingData = Common.extractFillingData(this.props.spreadsheetData,newDate);

        //update store
        this.props.updateAdminData("fillingData",fillingData.fillingData);
        this.props.updateAdminData("templateView",fillingData.templateView);
    };

    handleChange = (event) => {
        const name= event.target.name;
        this.props.updateAdminData(name,event.target.value);
    };

    handleChangeAndUpdateApp = (event) => {
        const name= event.target.name;
        this.props.updateAppData(name,event.target.value);
    };

    generateEmail = () => {
        //save products Status to cookie
        this.updateCookie();

        this.props.toggleEmailTemplateView();
    };

    updateCookie = () =>{
        const cookieData = {
            RockyStatus: this.props.RockyStatus,
            NpdStatus: this.props.NpdStatus,
            TolunaStatus: this.props.TolunaStatus,
            toAdress: this.props.toAdress,
            spreadsheetId: this.props.spreadsheetId,
            spreadsheetTabName : this.props.spreadsheetTabName
        };
        CookieHandler.update(cookieData);
    };

    render() {
        return (
            <Fragment>
                <Grid container spacing={8} justify='center'>
                    <Grid container justify='flex-start' direction='column' style={{margin: 50, maxWidth: 500}}>
                        <Typography variant="subheading" gutterBottom>
                            Status
                        </Typography>
                        <TextField
                            id="selected-date"
                            label="Selected Date"
                            type="date"
                            value={this.props.selectedDate}
                            name="selectedDate"
                            onChange={this.handleDateChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <h3>Team filling status</h3>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Did fill</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.fillingData.map(item => {
                                        return (
                                            <TableRow key={item.name}>
                                                <TableCell component="th" scope="row">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell>
                                                    {item.didFill}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                    <Grid item sm style={{margin: 50, maxWidth: 500}}>
                        <Typography variant="subheading" gutterBottom>
                            Spread Sheet Data
                        </Typography>
                        <TextField
                            id="rocky-status"
                            label="Spread Sheet Id"
                            margin="normal"
                            fullWidth
                            name="spreadsheetId"
                            onChange={this.handleChangeAndUpdateApp}
                            value={this.props.spreadsheetId}
                        />
                        <TextField
                            id="rocky-status"
                            label="Spread Sheet Tab Name"
                            margin="normal"
                            fullWidth
                            name="spreadsheetTabName"
                            onChange={this.handleChangeAndUpdateApp}
                            value={this.props.spreadsheetTabName}
                        />
                        <Button variant="raised" color="primary" onClick={this.updateCookie}>
                            <span>Save</span>
                        </Button>
                        <br /><br /><br />
                        <Typography variant="subheading" gutterBottom>
                            Email
                        </Typography>
                        <TextField
                            id="rocky-status"
                            label="Rocky for PP Client State"
                            margin="normal"
                            fullWidth
                            name="RockyStatus"
                            onChange={this.handleChange}
                            value={this.props.RockyStatus}
                        />
                        <TextField
                            id="npd-status"
                            label="NPD State"
                            margin="normal"
                            fullWidth
                            name="NpdStatus"
                            onChange={this.handleChange}
                            value={this.props.NpdStatus}
                        />
                        <TextField
                            id="toluna-status"
                            label="Toluna State"
                            margin="normal"
                            fullWidth
                            name="TolunaStatus"
                            onChange={this.handleChange}
                            value={this.props.TolunaStatus}
                        />
                        <Button variant="raised" color="primary" onClick={this.generateEmail}>
                            {this.props.templateView ? <span>Hide&nbsp;</span> : <span>Show&nbsp;</span>} Email Template
                        </Button>

                        {/*<TextField*/}
                            {/*id="recipient-email"*/}
                            {/*label="Recipient email"*/}
                            {/*margin="normal"*/}
                            {/*fullWidth*/}
                            {/*name="toAdress"*/}
                            {/*onChange={this.handleChange}*/}
                            {/*value={this.props.toAdress}*/}
                        {/*/>*/}

                        {/*<Button variant="raised" color="primary">Send Email</Button>*/}

                    </Grid>
                </Grid>
                <Grid container spacing={8} justify='center'>
                    {this.props.templateView ?
                        <EmailTemplate
                            data={this.props}/>
                        : <div>...</div>}
                </Grid>
            </Fragment>
        );
    }

    static propTypes = {};

}


const mapStateToProps = (state) => {
    return {
        emailView: state.admin.emailView,
        fromAddress: state.admin.fromAddress,
        toAddress: state.admin.toAddress,
        selectedDate: state.admin.selectedDate,
        emailTemplateData: state.admin.emailTemplateData,
        RockyStatus: state.admin.RockyStatus,
        NpdStatus: state.admin.NpdStatus,
        TolunaStatus: state.admin.TolunaStatus,
        fillingData : state.admin.fillingData,
        templateView: state.admin.templateView,
        spreadsheetId: state.app.spreadsheetId,
        spreadsheetTabName : state.app.spreadsheetTabName,
        spreadsheetData: state.app.spreadsheetData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAdminData: (propName, propValue) => {
            dispatch(updateAdmin(propName, propValue))
        },
        updateAppData :(propName, propValue)=>{
            dispatch(updateApp(propName, propValue))
        },
        toggleEmailTemplateView :()=>{
            dispatch(toggleEmailTemplateView())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

//export default Admin;
