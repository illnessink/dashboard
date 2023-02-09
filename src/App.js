import Sidebar from './components/Sidebar';
import Info from './components/Info';
import Visitors from './components/Visitors';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <section className='infoBoxSec'>
        <Info whichTitle="Reviews" statOne={1281} />
        <Info whichTitle="Average Rating" statOne={4.6} />
        <Info whichTitle="Sentiment Analysis" statOne={960} statTwo={122} statThree={321} />
      </section>
      <Visitors />
    </div>
  );
}

export default App;
