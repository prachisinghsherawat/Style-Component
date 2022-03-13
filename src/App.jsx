import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button"

function App() {
  return (
    <div className="App">
      
       <div className="updiv">
         <Button theme={"blue"}> Primary Button </Button>
         <Button> Default Button </Button>
         <Button theme={"dashed"}> Dashed Button </Button>
      </div>
      
      <div className="downdiv">
         <Button theme={"text"}> Text Button </Button>
         <Button theme={"link"}> <a href='https://www.google.com'> Link Button </a></Button>
      </div>

    </div>
  );
}

export default App;
