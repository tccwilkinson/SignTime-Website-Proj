import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import { DemoModalProvider } from './context/DemoModalContext';
import Home from './pages/Home';
import Features from './pages/Features';
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
            <Route path="/pricing" element={<PageStub title="Pricing" />} />
            <Route path="/security" element={<PageStub title="Security & Compliance" />} />

            <Route path="/customers" element={<PageStub title="Customer Success Stories" />} />
            <Route path="/customers/:slug" element={<PageStub title="Customer Story" />} />

            <Route path="/integrations" element={<PageStub title="Integrations" />} />
            <Route path="/partners" element={<PageStub title="Partners" />} />

            <Route path="/resources" element={<PageStub title="Resources" />} />
            <Route path="/resources/:slug" element={<PageStub title="Resource Article" />} />
            <Route path="/news" element={<PageStub title="News" />} />

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
