import React from 'react';
import { HeroSection } from './HeroSection';
import { ScrollNarrativeTracker } from './ScrollNarrativeTracker';
import { SkillProfileSection } from './SkillProfileSection';
import { SkillGapSection } from './SkillGapSection';
import { RoadmapSection } from './RoadmapSection';
import { SmartMatchSection } from './SmartMatchSection';
import { HowItWorksSection } from './HowItWorksSection';
import { PlatformUsersSection } from './PlatformUsersSection';
import { OpportunitiesSection } from './OpportunitiesSection';
import { CollaborationSection } from './CollaborationSection';
import { InstitutionInsightsSection } from './InstitutionInsightsSection';
import { TrustSection } from './TrustSection';
import { ImpactSection } from './ImpactSection';
import { FinalCtaSection } from './FinalCtaSection';

export const LandingPage = () => {
  return (
    <main style={{ position: 'relative' }}>
      <ScrollNarrativeTracker />
      <HeroSection />
      <SkillProfileSection />
      <SkillGapSection />
      <RoadmapSection />
      <SmartMatchSection />
      <HowItWorksSection />
      <PlatformUsersSection />
      <OpportunitiesSection />
      <CollaborationSection />
      <InstitutionInsightsSection />
      <TrustSection />
      <ImpactSection />
      <FinalCtaSection />
    </main>
  );
};
