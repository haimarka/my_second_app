// import logo from './logo.svg';
import './App.css';
import Counter from './component/counter';
import TowCounters from './component/twoCounters';
import TwoCountersSmart from './component/TwoCountersSmart';
import CounterSmart from './component/counterSmart';
import ToggleColor from './component/toggleColor';
import Input from './component/input';

function App() {
  return (
    <div className="App">
        <h1>hello react</h1>
        {/* <Counter/>
        <TowCounters/> */}
        {/* <TwoCountersSmart/>
        <CounterSmart num={5}/> */}
        <ToggleColor text1="click to see change colors"/>
        <Input />

    </div>
  );
}

export default App;
