import logo from './airbnb-logo.png';
import photoGrid from './photo-grid.png'
import './App.css';
import Card from './Card.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className='container'>
        <img src={photoGrid} className='App-photo-grid' alt='photo-grid'/>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
      </div>
    </div>
  );
}

export default App;
