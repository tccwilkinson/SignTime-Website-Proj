import Hero from '../components/Hero';
import TrustSecurity from '../components/TrustSecurity';
import EnterpriseFeatures from '../components/EnterpriseFeatures';
import InteractiveCarousel from '../components/InteractiveCarousel';
import { useDemoModal } from '../context/DemoModalContext';

export default function Home() {
  const { open } = useDemoModal();

  return (
    <>
      <Hero onOpenDemo={open} />
      <TrustSecurity onOpenDemo={open} />
      <EnterpriseFeatures onOpenDemo={open} />
      <InteractiveCarousel onOpenDemo={open} />
    </>
  );
}
