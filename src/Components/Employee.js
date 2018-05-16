import React, {Component, Fragment} from "react";
import {Button, Grid, TextField, Typography} from "material-ui";
import CookieHandler from "../Services/CookieHandler";
import SpreadSheet from "../Services/SpreadSheet";

const divStyle = {
    margin: '10px',
};

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: "",
            project: "SX",
            selectedDate: this.getTodayAsString(),
            dailyText: ""
        };
    }

    projects = [
        {
            value: 'SX',
            label: 'sx',
        },
        {
            value: 'PMC',
            label: 'pmc',
        }
    ];

    componentDidMount() {
        //fill data based on cookie
        const cookieData = CookieHandler.retrieve();

        if (cookieData) {
            this.setState({
                project: cookieData.project,
                employeeName: cookieData.employeeName
            })
        }

        SpreadSheet.getCellData().then((toadyText) => {
                this.setState({
                    dailyText: toadyText
                })
            }
        );


    }

    saveToCookie = () => {
        CookieHandler.save(this.state);
    }

    getTodayAsString = () => {
        const today = new Date();
        const dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        if(mm<10){
            mm = '0' + mm;
        }
        const yyyy = today.getFullYear();
        return `${yyyy}-${mm}-${dd}`;

    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <Fragment>
                <Grid container spacing={8} justify='center'>
                    <Grid container justify='space-between' direction='column' sm  style={{margin: 50, maxWidth: 500}}>
                        <Typography variant="subheading" gutterBottom>
                            Personal details
                        </Typography>
                        <TextField
                            id="with-placeholder"
                            label="Employee Name"
                            margin="normal"
                            //fullWidth
                            onChange={this.handleChange('employeeName')}
                            value={this.state.employeeName}
                        />
                        <TextField
                            id="select-currency-native"
                            select
                            label="Project"
                            value={this.state.project}
                            onChange={this.handleChange('project')}
                            SelectProps={{
                                native: true,

                            }}
                            //fullWidth
                            margin="normal">
                            {this.projects.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            id="date"
                            label="Selected Date"
                            type="date"
                            defaultValue={this.getTodayAsString()}
                            onChange={this.handleChange('selectedDate')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            //fullWidth
                        />
                    </Grid>
                    <Grid item sm style={{margin: 50, maxWidth: 500}}>
                        <Typography variant="subheading" gutterBottom>
                            Scrum
                        </Typography>
                        <TextField
                            id="multiline-flexible"
                            label="Daily Text"
                            multiline
                            rows="16"
                            fullWidth
                            rowsMax="16"
                            value={this.state.dailyText}
                            onChange={this.handleChange('dailyText')}
                            margin="normal"
                        />

                        <Button variant="raised" color="primary">From Jira</Button>


                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Button variant="raised" color="primary"
                            onClick={this.saveToCookie}>Submit</Button>
                </Grid>
            </Fragment>
        );
    }

    static propTypes = {};

}

export default Employee;
