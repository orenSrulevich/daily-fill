import React, {Component, Fragment} from "react";
import {Button, Grid, TextField, Typography} from "material-ui";
import CookieHandler from "../Services/CookieHandler";
import SpreadSheet from "../Services/SpreadSheet";
import MultilineInput from "../Components/MultilineInput.js";
import JiraService from "../Services/JiraService";
import {updateEmployee} from "../Actions/employeeAxtion";
import {connect} from "react-redux";
import Common from "../Services/Common";

class Employee extends Component {
    constructor(props) {
        super(props);
        this.getFromJira = this.getFromJira.bind(this);
    }

    projects = [
        {
            value: 'SX',
            label: 'sx',
        }
    ];

    saveToCookie = () => {
        CookieHandler.save(this.props);
    };

    getFromJira = () => {
        this.props.updateEmployee('isLoading', true)
        JiraService.getTodayWork();

        //     .then((text) => {
        //     this.props.updateEmployee('dailyText', this.props.dailyText + "\n\n" + text)
        //     this.props.updateEmployee('isLoading', false)
        // });
    };

    updateDailyScrum = () => {
        this.saveToCookie();
        const range = Common.getCellRange("Oren", this.props.spreadsheetData, Common.getDateAsString(true));
        const spredSheetRange = {
            row: range.row + 1,
            col: Common.getColumnAsLatter(range.col)
        };
        SpreadSheet.updatCellData(this.props.dailyText, spredSheetRange).then((d) => {
            console.log("worked : ", d)
        }, (d) => {
            console.log("not working : ", d)
        });

    };

    handleChange = (event) => {
        //update store
        const name = event.target.name;
        this.props.updateEmployee(name, event.target.value);

        this.updateDailyText(event);
    };


    updateDailyText = (event) => {
        const name = event.target.name;

        //extract selected date
        let dateAsString = Common.getDateAsString(true, new Date(this.props.selectedDate));
        let employeeName = this.props.employeeName;

        if (name == "selectedDate") {
            //extract selected date
            dateAsString = Common.getDateAsString(true, new Date(event.target.value));
        }

        if (name == "employeeName") {
            //extract selected date
            employeeName = event.target.value;
        }

        //Extract Filling Data
        const dailyText = Common.extractSpecificDateText(this.props.spreadsheetData, dateAsString, employeeName);

        //update store
        this.props.updateEmployee("dailyText", dailyText);
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
                            name="selectedDate"
                            defaultValue={this.props.selectedDate}
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="with-placeholder"
                            label="Employee Name"
                            margin="normal"
                            onChange={this.handleChange}
                            name="employeeName"
                            value={this.props.employeeName}
                        />
                        <TextField
                            id="select-currency-native"
                            select
                            label="Project"
                            value={this.props.project}
                            onChange={this.handleChange}
                            name="project"
                            SelectProps={{
                                native: true,

                            }}
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
                            value={this.props.dailyText}
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

}


const mapStateToProps = (state) => {
    // debugger;
    return {
        employeeName: state.employee.employeeName,
        project: state.employee.project,
        selectedDate: state.employee.selectedDate,
        dailyText: state.employee.dailyText,
        isLoading: state.employee.isLoading,
        spreadsheetData: state.app.spreadsheetData
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
