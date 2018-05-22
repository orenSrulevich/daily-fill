import React, {Component} from "react";
import {AppBar, Paper, Tabs, Toolbar, Typography} from "material-ui";
import {Tab} from "material-ui/Tabs";
import {connect} from "react-redux";
import {setTab} from "../../Actions/uiActions";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="headline" color="inherit">
                        Daily Report System
                    </Typography>
                </Toolbar>
                <Paper>
                    <Tabs value={this.props.tabValue}
                          indicatorColor="primary"
                          textColor="primary"
                          centered>
                        <Tab label="Employee" onClick={
                            () => {
                                this.props.setTab(0)
                            }}
                        />
                        <Tab label="Scrum Master" onClick={
                            () => {
                                this.props.setTab(1)
                            }}
                        />
                    </Tabs>
                </Paper>
            </AppBar>)
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTab: (tabIndex) => {
            dispatch(setTab(tabIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
//export default Header;