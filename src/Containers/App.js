import React, {Component, Fragment} from 'react';
import '../App.css';
import {connect, Provider} from "react-redux";
import Header from "./Layouts/Header";
import Content from "../Components/Content";
import Loading from "../Components/Loading";
import MyForm from "../Components/MyForm.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    };

    componentDidMount() {
        this.setState({isLoading: false});
    }

    render() {
        if (this.state.isLoading === true) {
            return (<Loading textToDisplay="Loading"></Loading>)
        }
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
        tabValue: state.uiReducer.tabValue
    }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);



