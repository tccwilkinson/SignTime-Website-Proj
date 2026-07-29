import Hero from '../components/Hero';
import TrustSecurity from '../components/TrustSecurity';
import EnterpriseFeatures from '../components/EnterpriseFeatures';
import InteractiveCarousel from '../components/InteractiveCarousel';
import ScrollReveal from '../components/ScrollReveal';
import { useDemoModal } from '../context/DemoModalContext';

export default function Home() {
  const { open } = useDemoModal();

  return (
    <>
      <Hero onOpenDemo={open} />
      <ScrollReveal delay={100}>
        <TrustSecurity onOpenDemo={open} />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <EnterpriseFeatures onOpenDemo={open} />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <InteractiveCarousel onOpenDemo={open} />
      </ScrollReveal>
    </>
  );
}
