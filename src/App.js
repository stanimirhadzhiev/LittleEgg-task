import './App.css';
import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';
import { Testimonials } from './components/Testimonials/Testimonials';
import { ServicesList } from './components/ServicesList/ServicesList';
import { Ctas } from './components/Ctas/Ctas';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <Testimonials/>
        <ServicesList/>
        <Ctas/>
        <Footer/>
    </div>
  );
}

export default App;
