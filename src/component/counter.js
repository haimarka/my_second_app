import React from "react";

class Counter extends React.Component {
  

    state = {count: 0}

    counterClicks = () => {
        this.setState({count : this.state.count + 1})
        console.log(`count is : ${this.state.count}`);
    }
    counterClicksDown = () => {
        this.setState({count : this.state.count - 1})
        console.log(`count is : ${this.state.count}`);
    }

    render() {
        console.log("hello render");
        return <section>
            <button onClick={this.counterClicks}>Increment up</button>
            <button onClick={this.counterClicksDown}>Increment down</button>
            <p>count is: {this.state.count}</p>
        </section>
    }
}

export default Counter;