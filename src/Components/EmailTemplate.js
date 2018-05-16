import React, {Component,Fragment} from "react";
import {Table, TableBody, TableHead, TableRow} from "material-ui";
import TableCell from "material-ui/es/Table/TableCell";
import Loading from "./Loading";

class EmailTemplate extends Component {
    constructor(props) {
        super(props);
        //this.state = {};
    }

//ProductsState
    render() {
        if(!this.props.data.emailTemplateData.length){
            return (<div>...</div>)
        }
        return (
            <Fragment>
                <Table>
                    <TableHead style={{backgroundColor:'#FFF9A3'}}>
                        <TableRow>
                            <TableCell style={{width:'12%'}}>Date</TableCell>
                            <TableCell>Scrum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                          <TableCell>{this.props.data.selectedDate}</TableCell>
                          <TableCell>
                              <Table>
                                  <TableHead>
                                      <TableRow>
                                          {this.props.data.emailTemplateData.map((item)=>(
                                              <TableCell>{item.name}</TableCell>
                                          ))}
                                      </TableRow>
                                  </TableHead>
                                  <TableBody>
                                      <TableRow>
                                          {this.props.data.emailTemplateData.map((item)=>(
                                              <TableCell>{item.text}</TableCell>
                                          ))}
                                      </TableRow>
                                  </TableBody>
                              </Table>
                          </TableCell>
                      </TableRow>
                    </TableBody>
                </Table>
                <Table>
                    <TableHead style={{backgroundColor:'#FFF9A3'}}>
                        <TableRow>
                            <TableCell style={{width:'12%'}}>Entity</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Rocky</TableCell>
                            <TableCell>{this.props.data.RockyStatus}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Npd</TableCell>
                            <TableCell>{this.props.data.NpdStatus}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Toluna</TableCell>
                            <TableCell>{this.props.data.TolunaStatus}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Fragment>
        );
    }

    static propTypes = {};

}

export default EmailTemplate;
