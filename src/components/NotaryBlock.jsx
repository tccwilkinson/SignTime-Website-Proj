import React from 'react';
import Reveal from './Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import './NotaryBlock.css';

export default function NotaryBlock() {
  return (
    <Section id="notary" variant="light">
      <Reveal>
        <SectionHeader heading="Need notarization?" />

        <div className="notary-body">
          <p>
            The capability exists in our platform, but we haven't productized it yet — and we'd
            rather tell you that than overpromise.
          </p>
          <p>If notarization is part of your workflow, tell us what you need. We'll scope it with you.</p>
        </div>

        <div className="notary-cta">
          <a
            href="https://support.signtime.com/hc/en-us/requests/new"
            target="_blank"
            rel="noreferrer"
            className="btn btn-navy"
            style={{ padding: '14px 28px', fontSize: '15px', textDecoration: 'none', display: 'inline-block' }}
          >
            Talk to us about notary
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
