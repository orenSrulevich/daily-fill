import React, {Component} from "react";
import {AppBar, Paper, Tabs, Toolbar, Typography} from "material-ui";
import {Tab} from "material-ui/Tabs";

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
                            ()=>{
                                this.props.onTabClick(0)
                            }}
                        />
                        <Tab label="Scrum Master" onClick={
                            ()=>{
                                this.props.onTabClick(1)}}
                        />
                    </Tabs>
                </Paper>
            </AppBar>)
    }
}

export default Header;