import React from "react";

class CounterSmart extends React.Component{


    state = {count: this.props.num}
    

    firstCounter = () => {
        this.setState({count : this.state.count + 1})
        console.log(`count is : ${this.state.count}`);
    }
    secoundCounter = () => {
        this.setState({count : this.state.count - 1}) 
        console.log(`count is : ${this.state.count}`);
    }

    render() {
        // console.log("hello render");
        return <section>
            <button onClick={this.firstCounter}>first counter</button>
            <button onClick={this.secoundCounter}>secound counter</button>
            <p>count is: {this.state.count}</p>
        </section>
    }
}

export default CounterSmart;