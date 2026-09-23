import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../translations';
import { initialStudentProfile, sampleOpportunities, initialApplications, candidatePool } from '../mockData';

export const ROLE_DASHBOARDS = {
  student: '/portal/student/dashboard',
  industry: '/portal/industry/dashboard',
  academia: '/portal/academia/dashboard',
  academician: '/portal/academia/dashboard',
  institution: '/portal/institution/dashboard',
  governance: '/portal/governance/dashboard',
  admin: '/portal/governance/dashboard'
};

export const DEMO_USERS = {
  student: {
    id: 'DEMO-STU-001',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@iitd.ac.in',
    role: 'student',
    roleName: 'Student',
    roleNameHi: 'छात्र',
    organization: 'Indian Institute of Technology, Delhi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    targetDashboard: '/portal/student/dashboard',
    headline: 'Final Year B.Tech CSE • Full Stack & Cloud Developer',
    description: 'Explore student skill mapping, career intelligence, resume audit and opportunities.'
  },
  industry: {
    id: 'DEMO-IND-002',
    name: 'Priya Sen',
    email: 'priya.sen@techinnovations.in',
    role: 'industry',
    roleName: 'Industry & Recruiter',
    roleNameHi: 'उद्योग एवं रिक्रूटर',
    organization: 'Tech Innovations Lab',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    targetDashboard: '/portal/industry/dashboard',
    headline: 'Director of Talent Acquisition',
    description: 'Explore talent discovery, candidate skill matching and opportunity postings.'
  },
  academia: {
    id: 'DEMO-ACA-003',
    name: 'Dr. Ramesh Kulkarni',
    email: 'r.kulkarni@vjti.ac.in',
    role: 'academia',
    roleName: 'Academician / Faculty',
    roleNameHi: 'शिक्षाविद एवं संकाय',
    organization: 'Veermata Jijabai Technological Institute (VJTI)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    targetDashboard: '/portal/academia/dashboard',
    headline: 'Head of Department, Computer Science & Engineering',
    description: 'Explore student skill insights, cohort gap monitoring and curriculum guidance.'
  },
  institution: {
    id: 'DEMO-INS-004',
    name: 'Dr. Sunita Rao',
    email: 'dean.acad@nit.edu.in',
    role: 'institution',
    roleName: 'Institution Admin',
    roleNameHi: 'संस्थान प्रबंधन',
    organization: 'National Institute of Technology',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    targetDashboard: '/portal/institution/dashboard',
    headline: 'Dean of Academic & Placement Affairs',
    description: 'Explore institutional analytics, placement metrics and industry partnership tracking.'
  },
  governance: {
    id: 'DEMO-GOV-005',
    name: 'Rajesh Verma, IAS',
    email: 'rajesh.verma@gov.in',
    role: 'governance',
    roleName: 'Platform Governance',
    roleNameHi: 'प्रशासन एवं नियमन',
    organization: 'Ministry of Education / AICTE Platform Monitoring Cell',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    targetDashboard: '/portal/governance/dashboard',
    headline: 'Joint Secretary, National Skills & Higher Education',
    description: 'Explore platform-wide analytics, nationwide skill trends and compliance reports.'
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Authentication State with local persistence
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('careersetu_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const isAuthenticated = !!user;

  // SIH Demo Mode State (Only active when entered via SIH26044 Demo Access)
  const [isDemoMode, setIsDemoMode] = useState(() => {
    return localStorage.getItem('careersetu_demo_mode') === 'true';
  });

  // Language State with persistence
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('careersetu_lang') || 'en';
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('careersetu_lang', newLang);
    if (newLang === 'hi') {
      document.body.classList.add('lang-hi');
    } else {
      document.body.classList.remove('lang-hi');
    }
  };

  useEffect(() => {
    if (lang === 'hi') {
      document.body.classList.add('lang-hi');
    } else {
      document.body.classList.remove('lang-hi');
    }
  }, [lang]);

  // Theme (Dark / Light / System) State with persistence
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('careersetu_theme') || 'light';
  });

  const applyThemeToDom = (targetTheme) => {
    let resolvedTheme = targetTheme;
    if (targetTheme === 'system') {
      resolvedTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', resolvedTheme);
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('careersetu_theme', newTheme);
    applyThemeToDom(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  useEffect(() => {
    applyThemeToDom(theme);

    if (theme === 'system' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemChange = () => applyThemeToDom('system');
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }
  }, [theme]);

  // Helper for safe JSON API requests and error handling
  const safeFetchJson = async (url, options = {}) => {
    let response;
    try {
      response = await fetch(url, options);
    } catch (netErr) {
      console.error(`Network fetch error for ${url}:`, netErr);
      throw new Error('Unable to connect to the authentication server. Please try again.');
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const text = await response.text();
      console.error(`Expected JSON from ${url} but received (Content-Type: ${contentType}):`, text);
      throw new Error('Authentication service configuration error.');
    }

    let data;
    try {
      data = await response.json();
    } catch (jsonErr) {
      console.error(`JSON parsing error for ${url}:`, jsonErr);
      throw new Error('Authentication service configuration error.');
    }

    return { response, data };
  };

  // Check Server-Side Session on Mount
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    async function initSession() {
      try {
        const { data } = await safeFetchJson('/api/auth/session', { credentials: 'include' });
        if (data.authenticated && data.user) {
          setUser(data.user);
          localStorage.setItem('careersetu_auth_user', JSON.stringify(data.user));
        }
      } catch (err) {
        console.error('Session check failed:', err);
      } finally {
        setAuthLoading(false);
      }
    }
    initSession();
  }, []);

  // Real Backend Password Auth Methods
  const loginWithPassword = async (email, password) => {
    const { response, data } = await safeFetchJson('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Incorrect email or password.');
    }
    if (data.user) {
      setUser(data.user);
      setIsDemoMode(false);
      localStorage.setItem('careersetu_demo_mode', 'false');
      localStorage.setItem('careersetu_auth_user', JSON.stringify(data.user));
    }
    return data;
  };

  const registerUser = async ({ name, email, password, role, organization }) => {
    const { response, data } = await safeFetchJson('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role, organization }),
      credentials: 'include'
    });

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Registration failed.');
    }
    if (data.user) {
      setUser(data.user);
      setIsDemoMode(false);
      localStorage.setItem('careersetu_demo_mode', 'false');
      localStorage.setItem('careersetu_auth_user', JSON.stringify(data.user));
    }
    return data;
  };

  const completeOnboarding = async (profileData) => {
    const { response, data } = await safeFetchJson('/api/auth/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData),
      credentials: 'include'
    });

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Onboarding failed.');
    }
    if (data.user) {
      setUser(data.user);
      localStorage.setItem('careersetu_auth_user', JSON.stringify(data.user));
    }
    return data;
  };

  const logout = async () => {
    try {
      await safeFetchJson('/api/auth/logout', { method: 'POST', credentials: 'include' });
    } catch (e) {
      console.error('Logout error:', e);
    }
    setUser(null);
    setIsDemoMode(false);
    localStorage.removeItem('careersetu_auth_user');
    localStorage.removeItem('careersetu_demo_mode');
    showToast(
      lang === 'hi' ? 'सफलतापूर्वक साइन आउट किया गया।' : 'Signed out successfully.',
      'info'
    );
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auth Operations - SIH26044 Demo Mode (Intentional Demo Selection)
  const loginAsDemo = (roleKey) => {
    // Demo login explicitly sets isDemoMode = true
    setIsDemoMode(true);
    localStorage.setItem('careersetu_demo_mode', 'true');

    const demoUser = DEMO_USERS[roleKey] || DEMO_USERS.student;
    setUser(demoUser);
    localStorage.setItem('careersetu_auth_user', JSON.stringify(demoUser));
    showToast(
      lang === 'hi'
        ? `SIH26044 डेमो: ${demoUser.name} (${demoUser.roleNameHi}) के रूप में लॉगिन किया गया`
        : `SIH26044 Demo Mode: Signed in as ${demoUser.name} (${demoUser.roleName})`,
      'info'
    );
    navigate(demoUser.targetDashboard);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return demoUser;
  };

  const register = ({ name, email, password, role, organization }) => {
    // Registration enters normal mode
    setIsDemoMode(false);
    localStorage.setItem('careersetu_demo_mode', 'false');

    const newUser = {
      id: `USER-${Date.now().toString().slice(-4)}`,
      name: name || (email ? email.split('@')[0] : 'CareerSetu User'),
      email: email || 'user@careersetu.in',
      role: role || 'student',
      roleName: (role || 'student').charAt(0).toUpperCase() + (role || 'student').slice(1),
      organization: organization || 'CareerSetu Partner Institute',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      targetDashboard: ROLE_DASHBOARDS[role || 'student'] || '/portal/student/dashboard'
    };

    setUser(newUser);
    localStorage.setItem('careersetu_auth_user', JSON.stringify(newUser));
    showToast(
      lang === 'hi'
        ? `खाता सफलतापूर्वक बनाया गया! स्वागत है, ${newUser.name}`
        : `Account created successfully! Welcome to CareerSetu, ${newUser.name}.`,
      'success'
    );
    navigate(newUser.targetDashboard);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return newUser;
  };

  const switchDemoRole = (newRole) => {
    setIsDemoMode(true);
    localStorage.setItem('careersetu_demo_mode', 'true');
    const demoUser = DEMO_USERS[newRole] || DEMO_USERS.student;
    setUser(demoUser);
    localStorage.setItem('careersetu_auth_user', JSON.stringify(demoUser));
    showToast(
      lang === 'hi'
        ? `डेमो हितधारक बदला: ${demoUser.name} (${demoUser.roleNameHi})`
        : `Switched demo persona to: ${demoUser.name} (${demoUser.roleName})`,
      'info'
    );
    navigate(demoUser.targetDashboard);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Derive currentView from path for backwards compatibility
  const getCurrentViewFromPath = (pathname) => {
    if (pathname.includes('/student')) return 'student';
    if (pathname.includes('/industry')) return 'industry';
    if (pathname.includes('/academia')) return 'academician';
    if (pathname.includes('/institution')) return 'institution';
    if (pathname.includes('/governance') || pathname.includes('/admin')) return 'admin';
    return 'landing';
  };

  const currentView = getCurrentViewFromPath(location.pathname);

  const setCurrentView = (view) => {
    const portalViews = ['student', 'industry', 'academician', 'academia', 'institution', 'admin', 'governance'];
    if (portalViews.includes(view)) {
      const targetRole = view === 'academician' ? 'academia' : view === 'admin' ? 'governance' : view;
      if (!user) {
        navigate(`/login?role=${targetRole}`);
      } else {
        navigate(ROLE_DASHBOARDS[targetRole] || '/portal/student/dashboard');
      }
    } else {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [studentTab, setStudentTab] = useState('overview');
  const [industryTab, setIndustryTab] = useState('dashboard');
  const [academicianTab, setAcademicianTab] = useState('dashboard');

  // Dynamic Data States
  const [studentProfile, setStudentProfile] = useState(initialStudentProfile);
  const [opportunities, setOpportunities] = useState(sampleOpportunities);
  const [applications, setApplications] = useState(initialApplications);
  const [candidates, setCandidates] = useState(candidatePool);

  // Career Intelligence States
  const [activeIntelligenceTab, setActiveIntelligenceTab] = useState('overview');
  const [intelligenceTarget, setIntelligenceTarget] = useState(null);
  const [isSetuAiPanelOpen, setIsSetuAiPanelOpen] = useState(true);
  const [resumeChecklist, setResumeChecklist] = useState([
    { id: 1, text: "Highlight React competency in technical summary", textHi: "तकनीकी सारांश में रिएक्ट क्षमता उजागर करें", completed: true, points: 3 },
    { id: 2, text: "Add measurable project outcome to e-commerce capstone", textHi: "ई-कॉमर्स प्रोजेक्ट में मापनीय परिणाम जोड़ें", completed: true, points: 4 },
    { id: 3, text: "Improve backend project description with REST & DB details", textHi: "बैकएंड प्रोजेक्ट विवरण में REST और DB विवरण सुधारें", completed: false, points: 4 },
    { id: 4, text: "Add Git and GitHub CI/CD collaboration evidence", textHi: "गिट और सीआई/सीडी सहयोग साक्ष्य शामिल करें", completed: false, points: 3 },
    { id: 5, text: "Add link to KrishiAI live demonstration & repository", textHi: "कृषि-एआई लाइव डेमो और गिटहब लिंक जोड़ें", completed: false, points: 4 }
  ]);
  const [resumeReadinessScore, setResumeReadinessScore] = useState(78);

  const toggleResumeChecklistItem = (id) => {
    setResumeChecklist((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item));
      const totalPoints = updated.reduce((acc, item) => (item.completed ? acc + item.points : acc), 0);
      const newScore = 71 + totalPoints; // base 71, initial with 2 checked = 71 + 7 = 78, all 5 checked = 71 + 18 = 89-90
      setResumeReadinessScore(newScore);
      return updated;
    });
  };

  const navigateToIntelligence = (target = null, subTab = 'overview') => {
    if (target) {
      setIntelligenceTarget(target);
    }
    setActiveIntelligenceTab(subTab);
    setStudentTab('intelligence');
    if (!location.pathname.startsWith('/student')) {
      navigate('/student/dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modals & Active Selections
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isPostOpportunityOpen, setIsPostOpportunityOpen] = useState(false);

  // Toast Notifications
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success', duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Quick Apply to Opportunity
  const applyToOpportunity = (opp) => {
    const exists = applications.find((a) => a.opportunityId === opp.id);
    if (exists) {
      showToast(
        lang === 'hi' ? 'आप पहले ही इस अवसर हेतु आवेदन कर चुके हैं!' : 'You have already applied to this opportunity!',
        'info'
      );
      return;
    }

    const newApp = {
      id: `APP-${Date.now().toString().slice(-4)}`,
      opportunityId: opp.id,
      role: opp.title,
      company: opp.company,
      appliedDate: new Date().toISOString().split('T')[0],
      stage: 'Under Review',
      statusBadge: 'Application Submitted',
      stageIndex: 1,
      notes: 'Smart skill match score attached: ' + opp.matchScore + '% verified.',
      nextAction: 'Awaiting recruiter screening review'
    };

    setApplications((prev) => [newApp, ...prev]);
    showToast(
      lang === 'hi'
        ? `बधाई! ${opp.title} के लिए आपका आवेदन सफलतापूर्वक जमा कर दिया गया है।`
        : `Success! Application submitted for ${opp.title} at ${opp.company}.`,
      'success'
    );
  };

  // Post New Opportunity (Industry)
  const addNewOpportunity = (newOpp) => {
    const opp = {
      ...newOpp,
      id: `OPP-${Date.now().toString().slice(-4)}`,
      deadlineDays: 30,
      matchScore: 92,
      verifiedCompany: true,
      companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80',
      whyMatch: 'Candidate profile satisfies primary algorithmic and framework prerequisites.'
    };
    setOpportunities((prev) => [opp, ...prev]);
    showToast(
      lang === 'hi'
        ? `अवसर सफलतापूर्वक प्रकाशित हुआ: ${opp.title}`
        : `Opportunity successfully posted: ${opp.title}`,
      'success'
    );
  };

  // Update Readiness Score on Assessment Completion
  const updateReadinessFromAssessment = (addedPoints) => {
    setStudentProfile((prev) => {
      const newScore = Math.min(96, Math.max(60, prev.readinessScore + addedPoints));
      return {
        ...prev,
        readinessScore: newScore,
        categories: {
          ...prev.categories,
          problemSolving: {
            ...prev.categories.problemSolving,
            score: Math.min(95, prev.categories.problemSolving.score + 4)
          },
          industryAlignment: {
            ...prev.categories.industryAlignment,
            score: Math.min(92, prev.categories.industryAlignment.score + 5)
          }
        }
      };
    });
  };

  // Translation lookup helper
  const t = translations[lang] || translations.en;

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        t,
        currentView,
        setCurrentView,
        studentTab,
        setStudentTab,
        industryTab,
        setIndustryTab,
        academicianTab,
        setAcademicianTab,
        studentProfile,
        setStudentProfile,
        opportunities,
        applications,
        candidates,
        selectedOpportunity,
        setSelectedOpportunity,
        selectedCandidate,
        setSelectedCandidate,
        isPostOpportunityOpen,
        setIsPostOpportunityOpen,
        applyToOpportunity,
        addNewOpportunity,
        updateReadinessFromAssessment,
        activeIntelligenceTab,
        setActiveIntelligenceTab,
        intelligenceTarget,
        setIntelligenceTarget,
        isSetuAiPanelOpen,
        setIsSetuAiPanelOpen,
        resumeChecklist,
        toggleResumeChecklistItem,
        resumeReadinessScore,
        setResumeReadinessScore,
        navigateToIntelligence,
        toasts,
        showToast,
        removeToast,
        // Auth state & methods
        user,
        isAuthenticated,
        authLoading,
        isDemoMode,
        setIsDemoMode,
        loginWithPassword,
        registerUser,
        completeOnboarding,
        loginAsDemo,
        logout,
        switchDemoRole,
        // Theme state & methods
        theme,
        setTheme,
        toggleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
