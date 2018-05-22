import React, {Component} from "react";
import {TextField} from "material-ui";
import Loading from "./Loading.js";

class MultilineInput extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        if(this.props.isLoading === true){
            return(
                <Loading textToDisplay="Grabbing your data, please wait">
                </Loading>
            );
        }
        return (
            <TextField
                id="multiline-flexible"
                label="Daily Text"
                multiline
                rows="16"
                fullWidth
                rowsMax="16"
                value={this.props.dailyText}
                onChange={(e)=>{this.props.handleChange(("dailyText",e.target.value))}}
                margin="normal"
            />
        );
    }

    static propTypes = {};

}

export default MultilineInput;
