import React, {Component} from "react";
import {connect} from "react-redux";
import {setName} from "../Actions/userActions";

class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h3>MAIN</h3>
                <button
                    //onClick={this.props.changeUserName}
                    onClick = {()=>{this.props.setName('Oren Srulevich')}}
                >Change Name</button>
            </div>
        );
    }

    static propTypes = {};

}
const mapStateToProps = ()=>({});

const mapDispatchToProps = (dispatch)=>{
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Main)

//export default Main;
