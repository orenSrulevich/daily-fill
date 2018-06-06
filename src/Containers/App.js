import React, {Component, Fragment} from 'react';
import '../App.css';
import {connect, Provider} from "react-redux";
import Header from "./Layouts/Header";
import Content from "../Components/Content";
import Loading from "../Components/Loading";
import MyForm from "../Components/MyForm.js";
import {updateApp} from "../Actions/appAction";
import SpreadSheet from "../Services/SpreadSheet";
import {updateEmployee} from "../Actions/employeeAxtion";
import Common from "../Services/Common";

class App extends Component {
    constructor(props) {
        super(props);
    };


    componentDidMount() {
        const dateAsString = Common.getTodayAsString();
        SpreadSheet.initGapi(() => {
            SpreadSheet.getSpredSheetData().then((data) => {
                    this.props.updateAppData('spreadsheetData',data);

                    // shouldn't be here
                    const text = Common.extractSpecificDateText(data,dateAsString);
                    this.props.updateEmployee("dailyText",text);


                }
            );
        });

    }


    render() {
        return (
            <div className="App">
                <Fragment>
                    <Header/>
                    <Content tabValue={this.props.tabValue}/>
                    {/*<MyForm />*/}
                </Fragment>
            </div>)

    }
}

const mapStateToProps = (state) => {
    return {
        tabValue: state.ui.tabValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAppData: (propName, propValue) => {
            dispatch(updateApp(propName, propValue))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



