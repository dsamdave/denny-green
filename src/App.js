import './App.scss';
import Firstpage from './components/Firstpage';
import Header from './components/Header';
import Headimage from './components/Headimage';
import Navigation from './components/Navigation';
import Secondpage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Navigation />
        <Headimage />
        <Firstpage />
        <Secondpage />
        <Thirdpage />
        </div>
    </div>
  );
}

export default App;
