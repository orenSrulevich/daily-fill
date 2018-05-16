import React, {Component, Fragment} from "react";
import {Button, Input, TextField} from "material-ui";
import Separator from "./Seperator";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spreadsheetUrl:'',
            emailView:'Here is where you see the email to be send..',
            toAdress:''
        };
    }


    render() {
        return (
            <Fragment>
                <h1> Admin </h1>
                <Separator/>
                <form noValidate>
                    <Input
                        defaultValue={this.state.spreadsheetUrl}
                        placeholder="Spreadsheet URL"
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <Separator/>
                    <TextField
                            id="date"
                            label="Selected Date"
                            type="date"
                            defaultValue="2017-05-24"
                            //className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    <h3>Team filling status</h3>
                    <table>
                        <tbody>
                            <tr>
                               <th>Name</th>
                               <th>Status</th>
                            </tr>
                            <tr>
                                <td>Roy</td>
                                <td>V</td>
                            </tr>
                            <tr>
                                <td>Danny</td>
                                <td>X</td>
                            </tr>
                            <tr>
                                <td>Carmel</td>
                                <td>V</td>
                            </tr>
                            <tr>
                                <td>Oren</td>
                                <td>X</td>
                            </tr>
                        </tbody>
                    </table>
                    <Separator/>
                    <Button variant="raised" color="primary">Generate Email</Button>
                    <Separator/>
                    <p>{this.state.emailView}</p>
                    <Separator/>
                    <Input
                        defaultValue={this.state.toAdress}
                        placeholder="Recipient email"
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <Separator/>
                    <Button variant="raised" color="primary">Send Email</Button>
                </form>
            </Fragment>
        );
    }

    static propTypes = {};

}

export default Admin;
