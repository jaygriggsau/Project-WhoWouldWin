import './App.css';
import Battle from './Battle';
import GetFighterOne from './GetFighterOne';
import GetFighterTwo from './GetFighterTwo';

function App() {
  return (
    <div className="App">
      <section>
        <h1>Who Would Win</h1>
      </section>
      <section class="fighterBox">
        <GetFighterOne />
      </section>
      <section class="fighterBox">
        <GetFighterTwo />
      </section>
      
    </div>
  );
}

export default App;
