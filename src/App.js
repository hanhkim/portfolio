import './App.css';
import Home from './pages/home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;
