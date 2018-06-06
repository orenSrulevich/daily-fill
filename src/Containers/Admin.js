import React, {Component, Fragment} from "react";
import {
    Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField,
    Typography
} from "material-ui";
import SpreadSheet from "../Services/SpreadSheet";
import EmailTemplate from "../Components/EmailTemplate";
import CookieHandler from "../Services/CookieHandler";
import {connect} from "react-redux";
import {updateAdmin} from "../Actions/adminAction";


class Admin extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        const name= event.target.name;
        this.props.updateAdminData(name,event.target.value);
    };

    generateEmail = () => {
        //save products Status to cookie
        CookieHandler.update({
            RockyStatus: this.props.RockyStatus,
            NpdStatus: this.props.NpdStatus,
            TolunaStatus: this.props.TolunaStatus,
            toAdress: this.props.toAdress
        });


        SpreadSheet.GetEmailTemplateData().then((emailTemplateData) => {
            this.setState({
                emailTemplateData
            })
        });
    }

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
                            onChange={this.handleChange}
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
                        <Button variant="raised" color="primary" onClick={this.generateEmail}>Generate Email</Button>
                        {/*{this.props.isLoading ?*/}
                            {/*<Button variant="raised" color="primary" disabled>Generate Email</Button> :*/}
                            {/*<Button variant="raised" color="primary" onClick={this.generateEmail}>Generate*/}
                                {/*Email</Button>*/}
                        {/*}*/}


                        <TextField
                            id="recipient-email"
                            label="Recipient email"
                            margin="normal"
                            fullWidth
                            name="toAdress"
                            onChange={this.handleChange}
                            value={this.props.toAdress}
                        />

                        <Button variant="raised" color="primary">Send Email</Button>

                    </Grid>
                </Grid>
                <Grid container spacing={8} justify='center'>
                    <EmailTemplate data={this.props}/>
                </Grid>
            </Fragment>
        );
    }

    static propTypes = {};

}


const mapStateToProps = (state) => {
    return {
        spreadsheetUrl: state.admin.spreadsheetUrl,
        emailView: state.admin.emailView,
        fromAddress: state.admin.fromAddress,
        toAddress: state.admin.toAddress,
        selectedDate: state.admin.selectedDate,
        emailTemplateData: state.admin.emailTemplateData,
        RockyStatus: state.admin.RockyStatus,
        NpdStatus: state.admin.NpdStatus,
        TolunaStatus: state.admin.TolunaStatus,
        fillingData : state.admin.fillingData,
        spreadsheetData: state.app.spreadsheetData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAdminData: (propName, propValue) => {
            dispatch(updateAdmin(propName, propValue))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

//export default Admin;
