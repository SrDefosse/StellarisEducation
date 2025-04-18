import { Routes, Route } from 'react-router-dom'
import './App.css'

// Import Layout components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/utils/ScrollToTop'

// Import page components (adjust paths as needed)
import Home from './pages/Home'
import AboutPage from './pages/about/index'
import PreKPage from './pages/academics/prek/index'
import IBPage from './pages/academics/ib/index'
import LanguageImmersionPage from './pages/academics/languageimmersion/index'
import InternationalTeachersPage from './pages/academics/internationalteachers/index'
import AfterSchoolPage from './pages/afterSchool/index'
import AdmissionsPage from './pages/admissions/index'
import ContactPage from './pages/contact/index'
import TermsOfService from './pages/legal/TermsOfService'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar isTransparent={true}/>
      <Routes> {/* Define routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics/prek" element={<PreKPage />} />
        <Route path="/academics/ib" element={<IBPage />} />
        <Route path="/academics/languageimmersion" element={<LanguageImmersionPage />} />
        <Route path="/academics/internationalteachers" element={<InternationalTeachersPage />} />
        <Route path="/afterschool" element={<AfterSchoolPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
