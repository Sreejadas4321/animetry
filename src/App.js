
import Action from './components/Action section/Action';
import Anime from './components/Anime section/Anime';
import Family from './components/Family section/Family';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Romance from './components/Romance section/Romance';



function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
    </div>
    <Home/>
    <Anime/>
    <Family/>
    <Action/>
    <Romance/>
    </>
  );
}

export default App;
