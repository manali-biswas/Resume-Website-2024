import './App.css';
import NavbarComponent from './components/Navbar';
import Intro from './components/Intro';
import Work from './components/Work';
import Education from './components/Edu';
import Volunteer from './components/Volunteer';
import Awards from './components/Awards';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <ScrollToTopButton />
      <NavbarComponent />
      <Intro />
      <Work />
      <Education />
      <Volunteer />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
