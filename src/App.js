import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';

import './custom.scss';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
