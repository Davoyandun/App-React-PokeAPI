import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LandingPg from './components/LandingPg'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPg/>
      </div>
    </BrowserRouter>
  );
}
export default App;
