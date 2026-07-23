import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import { DemoModalProvider } from './context/DemoModalContext';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Security from './pages/Security';
import CustomersHub from './pages/CustomersHub';
import TempleUniversityJapan from './pages/case-studies/TempleUniversityJapan';
import CodeChrysalis from './pages/case-studies/CodeChrysalis';
import Qtnet from './pages/case-studies/Qtnet';
import KcDat from './pages/case-studies/KcDat';
import Rotoworks from './pages/case-studies/Rotoworks';
import KravMaga from './pages/case-studies/KravMaga';
import Hccr from './pages/case-studies/Hccr';
import Curvegrid from './pages/case-studies/Curvegrid';
import HimenoGumi from './pages/case-studies/HimenoGumi';
import GlobalBrains from './pages/case-studies/GlobalBrains';
import Greenvolt from './pages/case-studies/Greenvolt';
import CsiThailand from './pages/case-studies/CsiThailand';
import LeaseJapanHr from './pages/case-studies/LeaseJapanHr';
import Integrations from './pages/Integrations';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import ResourceArticleStub from './pages/ResourceArticleStub';
import News from './pages/News';
import PageStub from './pages/PageStub';

export default function App() {
  return (
    <DemoModalProvider>
      <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <main id="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/security" element={<Security />} />

            <Route path="/customers" element={<CustomersHub />} />
            <Route path="/customers/temple-university-japan" element={<TempleUniversityJapan />} />
            <Route path="/customers/code-chrysalis" element={<CodeChrysalis />} />
            <Route path="/customers/qtnet" element={<Qtnet />} />
            <Route path="/customers/kc-dat" element={<KcDat />} />
            <Route path="/customers/rotoworks" element={<Rotoworks />} />
            <Route path="/customers/krav-maga" element={<KravMaga />} />
            <Route path="/customers/hccr" element={<Hccr />} />
            <Route path="/customers/curvegrid" element={<Curvegrid />} />
            <Route path="/customers/himeno-gumi" element={<HimenoGumi />} />
            <Route path="/customers/global-brains" element={<GlobalBrains />} />
            <Route path="/customers/greenvolt" element={<Greenvolt />} />
            <Route path="/customers/csi-thailand" element={<CsiThailand />} />
            <Route path="/customers/lease-japan-hr" element={<LeaseJapanHr />} />
            <Route path="/customers/:slug" element={<PageStub title="Customer Story" />} />

            <Route path="/integrations" element={<Integrations />} />
            <Route path="/partners" element={<Partners />} />

            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<ResourceArticleStub />} />
            <Route path="/news" element={<News />} />

            <Route path="/contact" element={<PageStub title="Contact Us" />} />

            <Route path="/solutions" element={<PageStub title="Solutions" />} />
            <Route path="/solutions/use-case" element={<PageStub title="Solutions by Use Case" />} />
            <Route path="/solutions/use-case/:slug" element={<PageStub title="Solutions by Use Case" />} />
            <Route path="/solutions/industry" element={<PageStub title="Solutions by Industry" />} />
            <Route path="/solutions/industry/:slug" element={<PageStub title="Solutions by Industry" />} />
            <Route path="/solutions/team" element={<PageStub title="Solutions by Team" />} />
            <Route path="/solutions/team/:slug" element={<PageStub title="Solutions by Team" />} />

            <Route path="*" element={<PageStub title="Page Not Found" />} />
          </Routes>
        </main>

        <Footer />
        <DemoModal />
      </div>
    </DemoModalProvider>
  );
}
