import React from "react";

class ToggleColor extends React.Component {
    
    state = { text1: "red"}

    // changeColor = () => {
    //     if(this.state.text1 == "red"){
    //         this.setState({text1: "green"})
    //     }
    //     else{
    //         this.setState({text1: "red"})
    //     }
    // }

    // שורת אחת במקום שורות 7-14
    changeColor = () => this.setState({text1: this.state.text1 == "red" ? "green" : "red"});

    render() {
        const styleRed = {color: this.state.text1};
        return (
            <div>
                <p onClick={this.changeColor} style={styleRed}>{this.props.text1}</p>
            </div>
        )
    }
}

export default ToggleColor;