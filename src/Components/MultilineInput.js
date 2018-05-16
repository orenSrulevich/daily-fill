import React, {Component} from "react";
import {TextField} from "material-ui";
import Loading from "./Loading.js";

class MultilineInput extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }



    render() {
        <h5>{this.props.isLoading}</h5>
        if(this.props.isLoading === true){
            return(<Loading textToDisplay="Grabbing you daily scrum"></Loading>);
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
                onChange={this.props.handleChange('dailyText')}
                margin="normal"
            />
        );
    }

    static propTypes = {};

}

export default MultilineInput;
