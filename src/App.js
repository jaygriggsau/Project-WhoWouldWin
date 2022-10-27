import './App.css';
import GetFighters from './GetFighters';

function App() {
  return (
    <div className="App">
      <h1>Who Would Win</h1>
      <section className='instructions'>
        <h2 style={{color: "white"}}>Search for a hero a click "Get Fighter" to lock them in. Once you have selected two fighters, click the "Fight" button to makee them fight!</h2>
      </section>
      <section className='mainContent'>
        <GetFighters />
      </section>
    </div>
  );
}

export default App;
