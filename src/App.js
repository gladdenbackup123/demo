import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Exit from './Exit';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Greet from './Greet';
import Time from './Time';
import Fruits from './Fruits';
import UserCard from './UserCard';
import Button from './Button';
import BadCounter from './BadCounter';
import GoodCounter from './GoodCounter';
import HelloFunctional from './HelloFunctional';
import HelloClass from './HelloClass';
import Toggle from './Toggle';
import UserInput from './UserInput';

function App() {
  const fruitsList = ["Apple","Banana","Mango","Cherry","Strawberry"];

  const showMessage = () =>{
    alert("Button Clicked.");
  }

  return (
    <div className="App">
        <Header/>
        <Greet name="Gladden" />
        <UserInput/>


        {/* <Toggle/> */}

        {/* <BadCounter/>
        <GoodCounter/>

        <HelloFunctional/>
        <HelloClass/> */}

        {/* <Fruits fruits={fruitsList}/>

        <UserCard name="Gladden" age={97} city="Mumbai" />
        <Footer/>
        <Button action={showMessage} /> */}
    </div>
  );
}

export default App;
