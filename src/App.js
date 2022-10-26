import './App.css';
import GetFighters from './GetFighters';

function App() {
  return (
    <div className="App">
      <section>
        <h1>Who Would Win</h1>
      </section>
      <section className='mainContent'>
        <GetFighters />
      </section>
    </div>
  );
}

export default App;
