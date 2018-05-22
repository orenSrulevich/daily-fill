import React, {Component, Fragment} from "react";
import {Button, Grid, TextField, Typography} from "material-ui";
import CookieHandler from "../Services/CookieHandler";
import SpreadSheet from "../Services/SpreadSheet";
import MultilineInput from "../Components/MultilineInput.js";
import JiraService from "../Services/JiraService";
import {updateEmployee} from "../Actions/employeeAxtion";
import {connect} from "react-redux";

class Employee extends Component {
    constructor(props) {
        super(props);
        this.getFromJira = this.getFromJira.bind(this);
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
            this.props.updateEmployee('project', cookieData.project)
            this.props.updateEmployee('employeeName', cookieData.employeeName)
        }

        SpreadSheet.getCellData().then((toadyText) => {
                this.props.updateEmployee('dailyText', toadyText)
                this.props.updateEmployee('isLoading', false)
            }
        );


    }

    saveToCookie = () => {
        CookieHandler.save(this.props);
    }

    getFromJira = () => {
        this.props.updateEmployee('isLoading', true)
        JiraService.getTodayWork().then((text) => {
            this.props.updateEmployee('dailyText', this.props.dailyText + "\n\n" + text)
            this.props.updateEmployee('isLoading', false)
        });

    };

    updateDailyScrum = () => {
        this.saveToCookie();
        JiraService.setTodayWork(this.props.dailyText);
    };

    render() {
        return (
            <Fragment>
                <Grid container spacing={8} justify='center'>
                    <Grid container justify='flex-start' direction='column' style={{margin: 50, maxWidth: 500}}>
                        <Typography variant="subheading" gutterBottom>
                            Personal details
                        </Typography>
                        <TextField
                            id="date"
                            label="Selected Date"
                            type="date"
                            defaultValue={this.props.selectedDate}
                            onChange={(e) => {
                                this.props.updateEmployee('selectedDate', e.target.value)
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            //fullWidth
                        />
                        <TextField
                            id="with-placeholder"
                            label="Employee Name"
                            margin="normal"
                            //fullWidth
                            onChange={
                                (e) => {
                                    this.props.updateEmployee('employeeName', e.target.value)
                                }
                            }
                            value={this.props.employeeName}
                        />
                        <TextField
                            id="select-currency-native"
                            select
                            label="Project"
                            value={this.props.project}
                            onChange={(e) => {
                                this.props.updateEmployee('project', e.target.value)
                            }}
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

                    </Grid>
                    <Grid item sm style={{margin: 50, maxWidth: 500}}>
                        <Typography variant="subheading" gutterBottom>
                            Scrum
                        </Typography>
                        <MultilineInput
                            isLoading={this.props.isLoading}
                            dailyText={this.props.dailyText}
                            handleChange={this.props.updateEmployee}
                        />

                        {this.props.isLoading ?
                            <Button variant="flat" color="primary" disabled>Import From Jira</Button> :
                            <Button variant="flat" color="primary" onClick={this.getFromJira}>Import From Jira</Button>
                        }


                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Button variant="raised" color="primary"
                            onClick={this.updateDailyScrum}>Submit</Button>
                </Grid>
            </Fragment>
        );
    }

    static propTypes = {};

}


const mapStateToProps = (state) => {
    // debugger;
    return {
        employeeName: state.employeeReducer.employeeName,
        project: state.employeeReducer.project,
        selectedDate: state.employeeReducer.selectedDate,
        dailyText: state.employeeReducer.dailyText,
        isLoading: state.employeeReducer.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmployee: (propName, propValue) => {
            dispatch(updateEmployee(propName, propValue))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee)

//export default Employee;
