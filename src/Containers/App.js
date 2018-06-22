import React, {Component, Fragment} from 'react';
import '../App.css';
import {connect, Provider} from "react-redux";
import Header from "./Layouts/Header";
import Content from "../Components/Content";
import {updateApp} from "../Actions/appAction";
import SpreadSheet from "../Services/SpreadSheet";


class App extends Component {
    constructor(props) {
        super(props);
    };


    componentDidMount() {
        const params = {
            spreadsheetId: this.props.spreadsheetId,
            range: this.props.spreadsheetTabName
        };
        SpreadSheet.initGapi(() => {
            SpreadSheet.getSpredSheetData(params).then((data) => {
                    this.props.updateAppData('spreadsheetData',data);
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
        tabValue: state.ui.tabValue,
        spreadsheetId : state.app.spreadsheetId,
        spreadsheetTabName : state.app.spreadsheetTabName,
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



