import logo from './logo.svg';
import TicTacToe from './ticTacToe.js';
import kanscratch_logo from './kanscratch_logo.png'
import './App.css';
import './ticTacToe.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Topbar">
        <img src={kanscratch_logo} className="App-logo" alt="logo" />
          <span>Profile</span>
        </div>
        <div className="Container">
            <div className="Classrooms">
              Classrooms
              <div style={{border: "2px solid red", margin: "5vw", height: "50%"}}>
                Looks like you aren't in any classrooms yet.
              </div>
            </div>
            <div className="Assignments">
              Assignments
              <div style={{border: "2px solid red", margin: "5vw", height: "50%"}}>
                Looks like you don't have any assignments yet.
              </div>
            </div>
        </div>
        <div>
          <div style={{padding: "1vh", height: "40vh", width: "40vw", border: "2px solid white"}}>
            <TicTacToe />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
