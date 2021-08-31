import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='welcome-text'>
          <p>Welcome to Go Next!</p>
          <p>We're still booting up, but our aim is to be</p>
          <p>Your go-to place to find your next favorite game!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
