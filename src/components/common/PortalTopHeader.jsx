import React from 'react';
import { useApp } from '../../context/AppContext';
import { DemoSwitcherRibbon } from './DemoSwitcherRibbon';
import { NormalPortalHeader } from './NormalPortalHeader';

export const PortalTopHeader = () => {
  const { isDemoMode } = useApp();

  // Mode 2: If entered explicitly via SIH26044 Demo Access on /login -> Show Demo Persona Switcher Ribbon
  if (isDemoMode) {
    return <DemoSwitcherRibbon />;
  }

  // Mode 1: Normal Authenticated User Mode -> Show Clean Normal Application Header
  return <NormalPortalHeader />;
};
