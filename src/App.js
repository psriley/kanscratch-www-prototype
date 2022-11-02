import logo from './images/logo.svg';
import TicTacToe from './ticTacToe.js';
import placeholder from './images/placeholder.png'
import './App.css';
import { Link } from "react-router-dom";
import Tbar from "./components/topbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tbar/>
        <div className="Content">
          <div className="Container">
            <div className="Container">
                <div className="Classrooms">
                  Classrooms
                  <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", border: "2px solid red"}}>
                    Looks like you don't have any classrooms yet.
                  </div>
                </div>
                <div className="Assignments">
                  Assignments
                  <div style={{gap: "1vh", display: "flex", flexWrap: "wrap", flexDirection: "column", border: "2px solid red"}}>
                    <img src={placeholder}/>
                    <img src={placeholder}/>
                    <img src={placeholder}/>
                  </div>
                </div>
            </div>
            <div>
              <div className="AssignmentView">
                <div>
                  Details
                  <Link to="/details">
                    <img src={placeholder}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
