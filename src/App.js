import GlobalStyles from './assets/styles/global'
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Mission from './components/Mission';
import Services from './components/Services';
import WhatsAppLogo from './components/Whatsapp';

function App() {
  return (
    <>
    <GlobalStyles />
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Mission />
      <Footer />
      <WhatsAppLogo />
    </>
  );
}

export default App;
