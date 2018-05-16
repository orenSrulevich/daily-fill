import React from "react";

class Loading extends React.Component{
    constructor(props){
        super(props)

        this.state={
            text:props.textToDisplay
        }
    }


    componentDidMount(){
        this.intrval = window.setInterval(()=>{
            if(this.state.text === `${this.props.textToDisplay}...`){
                this.setState({text : this.props.textToDisplay})
            }else{
                this.setState((currentState)=>{
                    return{
                        text : currentState.text + '.'
                    }
                })
            }
        },300);

    }

    componentWillUnmount(){
        window.clearInterval(this.intrval);
    }

    render(){
        return <p>{this.state.text}</p>
    }
}

export default Loading;