import React from "react";

class TowCounters extends React.Component{


    state = {count: 0 , count2: 0}
    

    firstCounter = () => {
        this.setState({count : this.state.count + 1})
        console.log(`count is : ${this.state.count}`);
    }
    secoundCounter = () => {
        this.setState({count2 : this.state.count2 + 1}) 
        console.log(`count2 is : ${this.state.count2}`);
    }

    render() {
        // console.log("hello render");
        return <section>
            <button onClick={this.firstCounter}>first counter</button>
            <button onClick={this.secoundCounter}>secound counter</button>
            <p>count is: {this.state.count}</p>
            <p>count2 is: {this.state.count2}</p>
        </section>
    }
}

export default TowCounters;