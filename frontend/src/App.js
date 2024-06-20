import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/Signup';
import Dashboard from './components/DashBoard';
import Forget from './components/forget';
import PrivacyPolicy from './components/policy';
import Contact from './components/Contactus.jsx';
import Terms from './components/Terms_and_condition';
import FAQ from './components/faq.jsx';
import StockTable from './components/stock';
import Home from './components/Home';
import App1 from './components/landingm';
import Custom from './components/custom';
import Customize from './components/Customize';
import AboutUsPage from './components/Aboutus';
import Dashboard1 from './components/tanu';
import Feedback from './components/tanuf';
import SelectFlavours from './components/SelectFlavours';
import Checkout from './components/Checkout';
import ButtonComponent from './components/button_main';
import AnotherPage from './components/first_page';
import AnotherPage1 from './components/second_page';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/password" element={<Forget />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/stock" element={<StockTable />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<App1 />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/custompage" element={<Customize />} />
        <Route path="/select" element={<SelectFlavours />} />
        <Route path="/check" element={<Checkout />} />
        <Route path="/abt" element={<AboutUsPage />} />
        <Route path="/button" element={<AnotherPage />} />
        <Route path="/button1" element={<AnotherPage1 />} />
      </Routes>
    </Router>
  );
}

export default App;