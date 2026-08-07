import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import BlogHub from './pages/BlogHub';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import SolutionsHub from './pages/solutions/SolutionsHub';
import SolutionCategoryHub from './pages/solutions/SolutionCategoryHub';
import SolutionDetail from './pages/solutions/SolutionDetail';
import { useCaseItems, industryItems, teamItems } from './data/solutions';
import PageStub from './pages/PageStub';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import FeatureDetail from './pages/FeatureDetail';
import Login from './pages/Login';
import ManualsSupport from './pages/ManualsSupport';
import UseCases from './pages/UseCases';

function PageRouteWrapper() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Subtle Web Audio UI Synthesizer Helper
  useEffect(() => {
    let audioCtx = null;
    function initAudio() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }

    function playTick(freq, duration, gainVal) {
      try {
        initAudio();
        if (!audioCtx || audioCtx.state !== 'running') return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq || 950, audioCtx.currentTime);
        gain.gain.setValueAtTime(gainVal || 0.025, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + (duration || 0.025));
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + (duration || 0.025));
      } catch (e) {
        // Fallback silently if audio context restricted
      }
    }

    const handleClick = (e) => {
      const target = e.target.closest('button, a, .st-trigger, .st-card, input[type="submit"], .btn');
      if (target) playTick(1000, 0.02, 0.025);
    };

    const handleMouseEnter = (e) => {
      const target = e.target.closest('button, .st-card, .btn');
      if (target) playTick(750, 0.015, 0.012);
    };

    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
    };
  }, []);

  return (
    <main id="main-content" key={location.pathname} className="st-page-enter" style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

            <Route path="/features" element={<Features />} />
            <Route path="/features/:slug" element={<FeatureDetail />} />
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
            <Route path="/integrations/:slug" element={<FeatureDetail />} />
            <Route path="/partners" element={<Partners />} />

            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/manuals-support" element={<ManualsSupport />} />
            <Route path="/resources/blog" element={<BlogHub />} />
            <Route path="/resources/blog/:slug" element={<BlogDetail />} />
            <Route path="/resources/:slug" element={<ResourceArticleStub />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/blog" element={<BlogHub />} />
            <Route path="/blog" element={<BlogHub />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/solutions" element={<SolutionsHub />} />
            <Route
              path="/solutions/use-case"
              element={<SolutionCategoryHub category="By Use Case" basePath="/solutions/use-case" items={useCaseItems} />}
            />
            <Route
              path="/solutions/use-case/:slug"
              element={<SolutionDetail category="Use Cases" basePath="/solutions/use-case" />}
            />
            <Route
              path="/solutions/industry"
              element={<SolutionCategoryHub category="By Industry" basePath="/solutions/industry" items={industryItems} />}
            />
            <Route
              path="/solutions/industry/:slug"
              element={<SolutionDetail category="Industries" basePath="/solutions/industry" />}
            />
            <Route
              path="/solutions/team"
              element={<SolutionCategoryHub category="By Team" basePath="/solutions/team" items={teamItems} />}
            />
            <Route
              path="/solutions/team/:slug"
              element={<SolutionDetail category="Teams" basePath="/solutions/team" />}
            />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/legal" element={<PageStub title="Legal & Regulatory Notices" category="Legal & Compliance" />} />
            <Route path="/status" element={<PageStub title="System Operational Status" category="Infrastructure & Reliability" />} />

            <Route path="/use-cases" element={<UseCases />} />

            <Route path="*" element={<PageStub title="Page Not Found" category="Navigation" />} />
          </Routes>
        </main>
  );
}

export default function App() {
  return (
    <DemoModalProvider>
      <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <PageRouteWrapper />
        <Footer />
        <DemoModal />
      </div>
    </DemoModalProvider>
  );
}
