import React, {Component} from "react";
import {Grid} from "material-ui";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";


const styles = {
    Paper:{
        padding:20,
        marginTop:10,
        marginBottom:10
    }
}

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Grid container>
                <Grid item>
                    <LeftPanel styles={styles}></LeftPanel>
                </Grid>
                <Grid item>
                    <RightPanel styles={styles}></RightPanel>
                </Grid>
            </Grid>
        );
    }

    static propTypes = {};

}

export default index;
