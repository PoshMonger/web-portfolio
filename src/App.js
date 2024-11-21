import logo from './logo.svg';
import { NavBar } from './components/NavBar/NavBar'
import { Banner } from './components/Banner/Banner'
import { Skills } from './components/Skills'

import {Projects} from './components/Projects'
import {Contact} from './components/Contact';
import {Footer} from './components/Footer'
import './app.css';
import './app-mobile.css';
import './app-tablet.css';
import './app-desktop.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
