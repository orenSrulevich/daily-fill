import React, {Component, Fragment} from "react";
import {
    Button, Grid, Input, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField,
    Typography
} from "material-ui";
import SpreadSheet from "../Services/SpreadSheet";
import EmailTemplate from "./EmailTemplate";
import CookieHandler from "../Services/CookieHandler";


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spreadsheetUrl: '',
            emailView: 'Here is where you see the email to be send..',
            toAdress: '',
            selectedDate: this.getTodayAsString(),
            emailTemplateData: [],
            isLoading: false,
            RockyStatus: '',
            NpdStatus: '',
            TolunaStatus: '',

        };
    }

    fillingData = [
        {name: 'Carmel', didFill: 'Yes'},
        {name: 'Danny', didFill: 'No'},
        {name: 'Oren', didFill: 'No'},
        {name: 'Roy', didFill: 'Yes'}
    ]

    componentDidMount() {
        //fill data based on cookie
        const cookieData = CookieHandler.retrieve();
        if (cookieData) {
            this.setState({
                RockyStatus: cookieData.RockyStatus,
                NpdStatus: cookieData.NpdStatus,
                TolunaStatus: cookieData.TolunaStatus,
                toAdress: cookieData.toAdress
            })
        }
    }


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    getTodayAsString = () => {
        const today = new Date();
        const dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        if (mm < 10) {
            mm = '0' + mm;
        }
        const yyyy = today.getFullYear();
        return `${yyyy}-${mm}-${dd}`;

    }

    generateEmail = () => {
        this.setState({isLoading: true})
        //save products Status to cookie
        CookieHandler.update({
            RockyStatus: this.state.RockyStatus,
            NpdStatus: this.state.NpdStatus,
            TolunaStatus: this.state.TolunaStatus,
            toAdress: this.state.toAdress
        });


        SpreadSheet.GetEmailTemplateData().then((emailTemplateData) => {
            this.setState({
                emailTemplateData,
                isLoading: false
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
                            id="selecte-dDate"
                            label="Selected Date"
                            type="date"
                            value={this.state.selectedDate}
                            onChange={this.handleChange('selectedDate')}
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
                                    {this.fillingData.map(item => {
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
                            onChange={this.handleChange('RockyStatus')}
                            value={this.state.RockyStatus}
                        />
                        <TextField
                            id="npd-status"
                            label="NPD State"
                            margin="normal"
                            fullWidth
                            onChange={this.handleChange('NpdStatus')}
                            value={this.state.NpdStatus}
                        />
                        <TextField
                            id="toluna-status"
                            label="Toluna State"
                            margin="normal"
                            fullWidth
                            onChange={this.handleChange('TolunaStatus')}
                            value={this.state.TolunaStatus}
                        />

                        {this.state.isLoading ?
                            <Button variant="raised" color="primary" disabled>Generate Email</Button> :
                            <Button variant="raised" color="primary" onClick={this.generateEmail}>Generate
                                Email</Button>
                        }

                        <TextField
                            id="recipient-email"
                            label="Recipient email"
                            margin="normal"
                            fullWidth
                            onChange={this.handleChange('toAdress')}
                            value={this.state.toAdress}
                        />

                        <Button variant="raised" color="primary">Send Email</Button>

                    </Grid>
                </Grid>
                <Grid container spacing={8} justify='center'>
                    <EmailTemplate data={this.state}/>
                </Grid>
            </Fragment>
        );
    }

    static propTypes = {};

}

export default Admin;
