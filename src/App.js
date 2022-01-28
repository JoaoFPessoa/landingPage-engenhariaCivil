import GlobalStyles from './assets/styles/global'
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Header from './components/Header';

function App() {
  return (
    <>
    <GlobalStyles />
      <Header />
      <Banner />
      <AboutUs />
    </>
  );
}

export default App;
