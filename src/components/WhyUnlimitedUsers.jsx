import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';
import './WhyUnlimitedUsers.css';

export default function WhyUnlimitedUsers() {
  return (
    <Section id="why-unlimited-users" variant="deep">
      <Reveal>
        <SectionHeader
          className="wuu-header"
          eyebrow="Pricing that doesn't punish growth"
          heading="Every seat included."
          accent="Every signature accounted for."
          subhead="Per-seat pricing forces a choice: pay for everyone who touches an agreement, or share a login. SignTime removes the choice."
        />
      </Reveal>

      <Reveal delay={100}>
        <Card hover={false} className="wuu-subblock">
          <h3 className="wuu-subblock-heading">
            Shared logins aren't a workaround. They're a liability.
          </h3>
          <p className="wuu-subblock-body">
            When four people share one account, your audit trail can't say who signed. Per-seat
            pricing created that problem. Unlimited users solves it.
          </p>
        </Card>
      </Reveal>

      <div className="wuu-cta">
        <Button variant="secondary" to="/pricing">
          See how the math works <ArrowRight size={18} />
        </Button>
      </div>
    </Section>
  );
}
