import React, {Component, Fragment} from 'react';
import '../App.css';
import {Header} from "./Layouts";
import Content from "./Content";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabValue : 0
        }
    }

    onTabClick = (tabIndex)=>{
        this.setState({tabValue:tabIndex})
    }

    render() {
        return (
            <div className="App">
                <Fragment>
                    <Header onTabClick={this.onTabClick} tabValue={this.state.tabValue}/>
                    <Content tabValue={this.state.tabValue} />
                </Fragment>
            </div>
        );
    }
}

export default App;
