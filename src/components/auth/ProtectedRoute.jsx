import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useApp, ROLE_DASHBOARDS } from '../../context/AppContext';

export const ProtectedRoute = ({ allowedRoles = [], children }) => {
  const { user, isAuthenticated } = useApp();
  const location = useLocation();

  // 1. If not authenticated, redirect to Login
  if (!isAuthenticated || !user) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  // Normalize role matching (e.g. academia & academician, governance & admin)
  const normalizedUserRole = user.role === 'academician' ? 'academia' : user.role === 'admin' ? 'governance' : user.role;
  const normalizedAllowed = allowedRoles.map(r => (r === 'academician' ? 'academia' : r === 'admin' ? 'governance' : r));

  // 2. Check role permissions
  const hasPermission = normalizedAllowed.includes(normalizedUserRole);

  if (!hasPermission) {
    const userDashboard = ROLE_DASHBOARDS[user.role] || '/portal/student/dashboard';
    return <Navigate to={userDashboard} replace />;
  }

  return children;
};

