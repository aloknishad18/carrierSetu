import React, { useState, useEffect } from 'react';
import { useApp } from '../../../context/AppContext';
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Copy,
  Edit3,
  ListCheck,
  AlertCircle,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  ChevronRight,
  RotateCcw,
  Check
} from 'lucide-react';

export const ResumeIntelligenceModule = () => {
  const {
    lang,
    t,
    resumeReadinessScore,
    resumeChecklist,
    toggleResumeChecklistItem,
    showToast
  } = useApp();

  const tr = t.careerIntelligence?.resume || {};

  // Upload & Analysis State
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);
  const [analysisStep, setAnalysisStep] = useState(6);
  const [fileName, setFileName] = useState('Aarav_Sharma_Resume.pdf');
  const [fileSize, setFileSize] = useState('1.8 MB');
  const [copiedId, setCopiedId] = useState(null);

  // Selected project for description assistant
  const [selectedProject, setSelectedProject] = useState('ecommerce');
  const [customOriginalText, setCustomOriginalText] = useState('Developed an e-commerce website for local shop owners with product lists and cart.');
  const [isEditingSuggestion, setIsEditingSuggestion] = useState(false);
  const [customSuggestionText, setCustomSuggestionText] = useState(
    'Built a responsive full-stack e-commerce platform using React and Node.js with JWT authentication, REST API integration, and MongoDB, cutting inventory checkout time by 35%.'
  );

  const analysisSteps = [
    { id: 1, text: lang === 'hi' ? 'रिज़्यूमे संरचना पढ़ना' : 'Reading resume structure' },
    { id: 2, text: lang === 'hi' ? 'कौशलों की पहचान' : 'Identifying skills & tools' },
    { id: 3, text: lang === 'hi' ? 'प्रोजेक्ट्स एवं अनुभव का पता लगाना' : 'Detecting projects and experience' },
    { id: 4, text: lang === 'hi' ? 'करियरसेतु प्रोफ़ाइल के साथ तुलना' : 'Comparing with CareerSetu profile' },
    { id: 5, text: lang === 'hi' ? 'लक्ष्य भूमिका संरेखण का मूल्यांकन' : 'Evaluating target role alignment' },
    { id: 6, text: lang === 'hi' ? 'सुधार सिफारिशें तैयार करना' : 'Generating improvement recommendations' }
  ];

  const handleSimulateUpload = (name = 'Aarav_Sharma_Resume.pdf', size = '1.8 MB') => {
    setFileName(name);
    setFileSize(size);
    setAnalyzing(true);
    setAnalyzed(false);
    setAnalysisStep(1);

    const stepInterval = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev >= 6) {
          clearInterval(stepInterval);
          setAnalyzing(false);
          setAnalyzed(true);
          showToast(
            lang === 'hi' ? 'रिज़्यूमे विश्लेषण सफलतापूर्वक संपन्न!' : 'Resume analysis complete with 6 improvement priorities!',
            'success'
          );
          return 6;
        }
        return prev + 1;
      });
    }, 450);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    showToast(lang === 'hi' ? 'सुझाव क्लिपबोर्ड पर कॉपी हो गया!' : 'Suggestion copied to clipboard!', 'success');
    setTimeout(() => setCopiedId(null), 2500);
  };

  const completedChecklistCount = resumeChecklist.filter((c) => c.completed).length;

  const missingStrengths = [
    {
      id: 'react',
      name: 'React Development',
      nameHi: 'रिएक्ट डेवलपमेंट',
      reason: 'Strong competency (92%) detected in CareerSetu assessments and projects, but limited evidence found in uploaded resume summary.',
      reasonHi: 'करियरसेतु मूल्यांकन (92%) में मजबूत क्षमता है, किंतु रिज़्यूमे सारांश में सीमित साक्ष्य मिले हैं।',
      suggestion: 'Add to Technical Skills: "Frontend Architecture: React.js (Hooks, Context, State Optimization)"'
    },
    {
      id: 'git',
      name: 'Git & Version Control',
      nameHi: 'गिट एवं वर्ज़न कंट्रोल',
      reason: 'Verified collaboration strength (88%) with active pull request evidence, yet missing from core competencies.',
      reasonHi: '88% सत्यापित सहयोग स्कोर, फिर भी मुख्य कौशल सूची में इसका स्पष्ट उल्लेख नहीं है।',
      suggestion: 'Include: "Version Control & CI: Git, GitHub PR workflows, Branching Strategies"'
    },
    {
      id: 'api',
      name: 'RESTful API Integration',
      nameHi: 'रेस्ट एपीआई इंटीग्रेशन',
      reason: 'High score in backend integration benchmark (86%), but not highlighted in recent project bullet points.',
      reasonHi: 'बैकएंड एपीआई मानक (86%) में उच्च स्कोर, किंतु हाल के प्रोजेक्ट्स में स्पष्ट नहीं है।',
      suggestion: 'Mention: "Designed and consumed secure REST APIs with error handling and pagination."'
    },
    {
      id: 'dsa',
      name: 'Algorithmic Problem Solving',
      nameHi: 'एल्गोरिद्मिक समस्या समाधान',
      reason: 'NPTEL algorithmic certification verified on CareerSetu, needs prominent placement.',
      reasonHi: 'करियरसेतु पर एनपीटीईएल प्रमाणन सत्यापित है, जिसे रिज़्यूमे में प्रमुख स्थान मिलना चाहिए।',
      suggestion: 'Add under Education/Certifications: "Data Structures in Java - NPTEL (Elite Gold Certification)"'
    },
    {
      id: 'collab',
      name: 'Team Collaboration & Agile',
      nameHi: 'टीम सहयोग एवं एजाइल',
      reason: 'Demonstrated in university hackathons and multi-member college capstones.',
      reasonHi: 'यूनिवर्सिटी हैकाथॉन और बहु-सदस्यीय प्रोजेक्ट्स में प्रदर्शित क्षमता।',
      suggestion: 'Add: "Collaborated in Agile sprints using Jira & GitHub project boards."'
    },
    {
      id: 'js',
      name: 'Modern JavaScript (ES6+)',
      nameHi: 'आधुनिक जावास्क्रिप्ट (ES6+)',
      reason: '90% competency verified in platform assessment; ensure it is listed alongside frontend frameworks.',
      reasonHi: '90% सत्यापित क्षमता; इसे रिज़्यूमे में रिएक्ट के साथ प्रमुखता से सूचीबद्ध करें।',
      suggestion: 'Include: "Asynchronous JavaScript (Promises, Async/Await), Event Loop, Closures"'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} className="fade-in">
      
      {/* 1. Step 1: Upload & Status Card */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--saffron-primary)', fontWeight: 800, marginBottom: '6px' }}>
              <FileCheck size={14} /> STEP 1: RESUME INPUT
            </div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.uploadHeading || 'Analyze Your Resume'}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
              {tr.uploadSub || 'Upload your resume to understand how effectively it represents your skills and career strengths.'}
            </p>
          </div>

          <span className="badge badge-indigo" style={{ fontSize: '0.74rem' }}>
            <ShieldCheck size={12} /> {tr.analyzedNotice ? 'Benchmark-Aligned' : 'Verified Benchmarks'}
          </span>
        </div>

        {/* Drag & Drop Upload Zone */}
        <div
          style={{
            border: '2px dashed var(--light-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 20px',
            backgroundColor: 'var(--warm-ivory)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            transition: 'border-color var(--transition-base)'
          }}
          onDragOver={(e) => {
            e.preventDefault();
            e.currentTarget.style.borderColor = 'var(--saffron-primary)';
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.currentTarget.style.borderColor = 'var(--light-border)';
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.style.borderColor = 'var(--light-border)';
            const file = e.dataTransfer.files[0];
            if (file) {
              handleSimulateUpload(file.name, `${(file.size / (1024 * 1024)).toFixed(1)} MB`);
            }
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'var(--saffron-light)',
              color: 'var(--saffron-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <UploadCloud size={26} />
          </div>

          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
              {tr.dropZoneText || 'Drag & Drop Resume (PDF or DOCX)'}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)', marginTop: '2px' }}>
              {lang === 'hi' ? 'समर्थित प्रारूप: PDF, DOCX (अधिकतम 5MB)' : 'Supported: PDF, DOCX (Max 5MB)'}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '4px' }}>
            <label
              className="btn-secondary"
              style={{
                padding: '8px 16px',
                fontSize: '0.84rem',
                cursor: 'pointer',
                margin: 0
              }}
            >
              <input
                type="file"
                accept=".pdf,.docx"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleSimulateUpload(file.name, `${(file.size / (1024 * 1024)).toFixed(1)} MB`);
                  }
                }}
              />
              <span>{tr.browseBtn || 'Browse Files'}</span>
            </label>

            <button
              onClick={() => handleSimulateUpload('Aarav_Sharma_Resume.pdf', '1.8 MB')}
              className="btn-primary"
              disabled={analyzing}
              style={{ padding: '8px 18px', fontSize: '0.84rem' }}
            >
              <Sparkles size={14} />
              <span>{analyzing ? (lang === 'hi' ? 'विश्लेषण जारी...' : 'Analyzing...') : (lang === 'hi' ? 'नमूना रिज़्यूमे का विश्लेषण करें' : 'Analyze Current Resume')}</span>
            </button>
          </div>
        </div>

        {/* Uploaded File Pill Status */}
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            backgroundColor: 'var(--warm-ivory-alt)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--light-border)',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={20} color="var(--deep-indigo)" />
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{fileName}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)' }}>{fileSize} • PDF Document</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-green" style={{ fontSize: '0.74rem' }}>
              <CheckCircle2 size={12} /> {tr.sampleReady || 'Ready for Analysis'}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--muted-dark)' }}>
              {tr.analyzedNotice || 'Resume content analyzed'}
            </span>
          </div>
        </div>

        {/* Processing State Animation */}
        {analyzing && (
          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--indigo-surface)',
              border: '1px solid rgba(49, 46, 129, 0.15)'
            }}
            className="fade-in"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  border: '2px solid var(--saffron-primary)',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }}
              />
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>
                {lang === 'hi' ? 'आपके रिज़्यूमे का विश्लेषण किया जा रहा है...' : 'Analyzing your resume with CareerSetu Intelligence...'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
              {analysisSteps.map((s) => {
                const isPassed = analysisStep >= s.id;
                const isCurrent = analysisStep === s.id;
                return (
                  <div
                    key={s.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.8rem',
                      fontWeight: isPassed ? 700 : 500,
                      color: isPassed ? 'var(--govt-ink)' : 'var(--muted-text)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isPassed ? (
                      <CheckCircle2 size={15} color="var(--success-green)" />
                    ) : (
                      <Clock size={15} color="var(--muted-text)" />
                    )}
                    <span>{s.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 2. Top Summary: Resume Readiness Score */}
      {analyzed && (
        <div
          style={{
            padding: '28px 32px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
          className="fade-in"
        >
          <div style={{ maxWidth: '560px' }}>
            <span className="badge badge-saffron" style={{ marginBottom: '8px' }}>
              <Sparkles size={12} /> {tr.readinessScoreTitle || 'Resume Readiness Score'}
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {resumeReadinessScore} / 100
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-dark)', marginTop: '6px', lineHeight: 1.5 }}>
              {tr.readinessScoreMessage ||
                'Good foundation. Your resume can better highlight some of your strongest skills and project evidence.'}
            </p>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', marginTop: '8px' }}>
              {lang === 'hi'
                ? '* यह कोई पारंपरिक एटीएस स्कोर नहीं है। यह करियरसेतु के सत्यापित कौशल प्रोफ़ाइल और उद्योग अपेक्षाओं के साथ आपके रिज़्यूमे का संरेखण दर्शाता है।'
                : '* This is not a keyword ATS score. It reflects holistic alignment between your verified CareerSetu skills and target role expectations.'}
            </div>
          </div>

          {/* Premium Circular Score Gauge */}
          <div
            style={{
              position: 'relative',
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <svg style={{ width: '120px', height: '120px', transform: 'rotate(-90deg)' }}>
              <circle
                cx="60"
                cy="60"
                r="48"
                stroke="var(--warm-ivory-alt)"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                stroke="var(--saffron-primary)"
                strokeWidth="10"
                strokeDasharray={`${(resumeReadinessScore / 100) * 301} 301`}
                strokeLinecap="round"
                fill="none"
                style={{ transition: 'stroke-dasharray 0.8s ease' }}
              />
            </svg>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 900, color: 'var(--govt-ink)', lineHeight: 1 }}>
                {resumeReadinessScore}
              </div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--saffron-primary)' }}>READINESS</div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Four Analysis Dimensions */}
      {analyzed && (
        <div>
          <div style={{ marginBottom: '14px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? 'चार आयामी मूल्यांकन' : 'Four Analysis Dimensions'}
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {/* Dimension 1: Profile Representation */}
            <div
              className="interactive-card"
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--pure-white)',
                border: '1px solid var(--light-border)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>
                  1. {tr.dimensions?.dim1Title || 'PROFILE REPRESENTATION'}
                </span>
                <span className="badge badge-green" style={{ fontSize: '0.76rem' }}>85 / 100</span>
              </div>
              <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--warm-ivory-alt)', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: '85%', height: '100%', backgroundColor: 'var(--success-green)' }} />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', lineHeight: 1.45 }}>
                {tr.dimensions?.dim1Desc || 'How well your verified CareerSetu profile is represented in your resume.'}
              </p>
              <div style={{ fontSize: '0.74rem', color: 'var(--saffron-primary)', fontWeight: 700, marginTop: '8px' }}>
                +3 skills can be highlighted
              </div>
            </div>

            {/* Dimension 2: Skill Alignment */}
            <div
              className="interactive-card"
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--pure-white)',
                border: '1px solid var(--light-border)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>
                  2. {tr.dimensions?.dim2Title || 'SKILL ALIGNMENT'}
                </span>
                <span className="badge badge-green" style={{ fontSize: '0.76rem' }}>82 / 100</span>
              </div>
              <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--warm-ivory-alt)', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: '82%', height: '100%', backgroundColor: 'var(--success-green)' }} />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', lineHeight: 1.45 }}>
                {tr.dimensions?.dim2Desc || 'How effectively your skills align with your selected target role.'}
              </p>
              <div style={{ fontSize: '0.74rem', color: 'var(--deep-indigo)', fontWeight: 700, marginTop: '8px' }}>
                Matches Software Developer profile
              </div>
            </div>

            {/* Dimension 3: Project & Experience Evidence */}
            <div
              className="interactive-card"
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--pure-white)',
                border: '1px solid var(--light-border)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>
                  3. {tr.dimensions?.dim3Title || 'PROJECT & EXPERIENCE EVIDENCE'}
                </span>
                <span className="badge badge-orange" style={{ fontSize: '0.76rem' }}>70 / 100</span>
              </div>
              <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--warm-ivory-alt)', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: '70%', height: '100%', backgroundColor: 'var(--warm-orange)' }} />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', lineHeight: 1.45 }}>
                {tr.dimensions?.dim3Desc || 'How clearly your projects demonstrate practical skills and outcomes.'}
              </p>
              <div style={{ fontSize: '0.74rem', color: 'var(--bharat-red)', fontWeight: 700, marginTop: '8px' }}>
                Priority: Needs measurable metrics
              </div>
            </div>

            {/* Dimension 4: Resume Structure */}
            <div
              className="interactive-card"
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--pure-white)',
                border: '1px solid var(--light-border)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>
                  4. {tr.dimensions?.dim4Title || 'RESUME STRUCTURE'}
                </span>
                <span className="badge badge-green" style={{ fontSize: '0.76rem' }}>92 / 100</span>
              </div>
              <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--warm-ivory-alt)', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: '92%', height: '100%', backgroundColor: 'var(--success-green)' }} />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', lineHeight: 1.45 }}>
                {tr.dimensions?.dim4Desc || 'How clearly your resume content is organized and presented.'}
              </p>
              <div style={{ fontSize: '0.74rem', color: 'var(--success-green)', fontWeight: 700, marginTop: '8px' }}>
                Clean layout & standard sectioning
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Profile vs Resume Comparison */}
      {analyzed && (
        <div
          style={{
            padding: '28px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
              {lang === 'hi' ? 'कौशल अंतर संरेखण' : 'PROFILE COMPARISON ENGINE'}
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.comparisonHeading || 'CareerSetu Profile vs Resume'}
            </h3>
          </div>

          {/* Stats Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '14px',
              padding: '16px',
              backgroundColor: 'var(--warm-ivory)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--light-border)',
              marginBottom: '24px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', fontWeight: 600 }}>{lang === 'hi' ? 'सत्यापित कौशल' : 'Verified Skills'}</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>24</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', fontWeight: 600 }}>{lang === 'hi' ? 'रिज़्यूमे में उल्लिखित' : 'Skills Mentioned in Resume'}</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--govt-ink)' }}>18</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', fontWeight: 600 }}>{lang === 'hi' ? 'रिज़्यूमे में अनुपस्थित मजबूत कौशल' : 'Strong Skills Missing From Resume'}</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>6</div>
            </div>
          </div>

          {/* Missing Strengths Grid */}
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '12px' }}>
              {tr.recommendedToHighlight || 'RECOMMENDED TO HIGHLIGHT'}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '14px' }}>
              {missingStrengths.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--warm-ivory)',
                    border: '1px solid var(--light-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <CheckCircle2 size={16} color="var(--saffron-primary)" />
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                        {lang === 'hi' ? item.nameHi : item.name}
                      </h4>
                    </div>

                    <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--muted-text)', textTransform: 'uppercase' }}>
                      {tr.whyItMatters || 'Why it matters'}:
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', lineHeight: 1.45, marginTop: '2px' }}>
                      {lang === 'hi' ? item.reasonHi : item.reason}
                    </p>
                  </div>

                  <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button
                      onClick={() => handleCopy(item.suggestion, item.id)}
                      className="btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                    >
                      {copiedId === item.id ? <Check size={13} color="var(--success-green)" /> : <Copy size={13} />}
                      <span>{copiedId === item.id ? (lang === 'hi' ? 'कॉपी हुआ' : 'Copied!') : (tr.viewSuggestion || 'Copy Phrasing')}</span>
                    </button>
                    <span style={{ fontSize: '0.7rem', color: 'var(--muted-text)' }}>
                      +3% Readiness impact
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. Resume Improvement Priorities */}
      {analyzed && (
        <div
          style={{
            padding: '28px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <span className="badge badge-red" style={{ marginBottom: '6px' }}>
              {tr.highPriority || 'HIGH PRIORITY'}
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.prioritiesHeading || 'Resume Improvement Priorities'}
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
              {tr.priorityDesc || 'Add measurable outcomes to projects. Never automatically overwrite; recommendations are presented for your review.'}
            </p>
          </div>

          {/* Comparison Cards: Current vs Suggested */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '18px',
              marginBottom: '20px'
            }}
          >
            {/* Current Description */}
            <div
              style={{
                padding: '18px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--warm-ivory)',
                border: '1px solid var(--light-border)'
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--muted-text)', marginBottom: '8px' }}>
                {tr.currentDesc || 'CURRENT DESCRIPTION'}:
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--muted-dark)',
                  backgroundColor: 'var(--pure-white)',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  lineHeight: 1.5
                }}
              >
                "Developed an e-commerce website for local shop owners with product lists and cart."
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--bharat-red)', marginTop: '8px', fontWeight: 600 }}>
                • Lacks technical stack depth (React, Node, DB)
                <br />• Missing measurable business or performance metrics
              </div>
            </div>

            {/* Suggested Improvement */}
            <div
              style={{
                padding: '18px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--saffron-light)',
                border: '1px solid rgba(232, 117, 22, 0.3)'
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--saffron-primary)', marginBottom: '8px' }}>
                {tr.suggestedImprovement || 'SUGGESTED IMPROVEMENT'} (ACTION + TECH + PROBLEM + OUTCOME):
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--govt-ink)',
                  backgroundColor: 'var(--pure-white)',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(232, 117, 22, 0.3)',
                  lineHeight: 1.5,
                  fontWeight: 500
                }}
              >
                "Built a responsive full-stack e-commerce platform using <strong>React</strong> and <strong>Node.js</strong> with JWT authentication, REST API integration, and MongoDB, cutting inventory checkout time by <strong>35%</strong>."
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--success-green)', marginTop: '8px', fontWeight: 600 }}>
                ✓ Quantified impact (35% faster)
                <br />✓ Proves verified React & REST API competence
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <button
              onClick={() => handleCopy(
                'Built a responsive full-stack e-commerce platform using React and Node.js with JWT authentication, REST API integration, and MongoDB, cutting inventory checkout time by 35%.',
                'priority-sugg'
              )}
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.84rem' }}
            >
              {copiedId === 'priority-sugg' ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedId === 'priority-sugg' ? (lang === 'hi' ? 'कॉपी हुआ' : 'Copied!') : (tr.copyBtn || 'Copy Suggestion')}</span>
            </button>

            <button
              onClick={() => {
                setIsEditingSuggestion(!isEditingSuggestion);
                showToast(lang === 'hi' ? 'नीचे प्रोजेक्ट विवरण सहायक सक्रिय हुआ' : 'Project description assistant opened below', 'info');
              }}
              className="btn-secondary"
              style={{ padding: '8px 18px', fontSize: '0.84rem' }}
            >
              <Edit3 size={14} />
              <span>{tr.editBtn || 'Customize Phrasing'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 6. Project Description Assistant (Interactive Tool) */}
      {analyzed && (
        <div
          style={{
            padding: '28px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
              {lang === 'hi' ? 'इंटरएक्टिव सहायक' : 'INTERACTIVE TOOL'}
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.projectAssistantHeading || 'Improve Project Descriptions'}
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
              {tr.projectAssistantSub || 'Setu AI analyzes Action + Technology + Problem + Outcome structure without overwriting your content.'}
            </p>
          </div>

          {/* Project Selector Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {[
              { id: 'ecommerce', label: 'E-Commerce Platform' },
              { id: 'setuconnect', label: 'SetuConnect Job Matcher' },
              { id: 'krishiai', label: 'KrishiAI Yield Predictor' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProject(p.id);
                  if (p.id === 'ecommerce') {
                    setCustomOriginalText('Developed an e-commerce website for local shop owners with product lists and cart.');
                    setCustomSuggestionText('Built a responsive full-stack e-commerce platform using React and Node.js with JWT authentication, REST API integration, and MongoDB, cutting inventory checkout time by 35%.');
                  } else if (p.id === 'setuconnect') {
                    setCustomOriginalText('Created a job portal matcher in nodejs and mongodb.');
                    setCustomSuggestionText('Architected SetuConnect, an asynchronous job-matching microservice using Node.js, React, and MongoDB, achieving 92% algorithmic accuracy across 10,000+ candidate records.');
                  } else {
                    setCustomOriginalText('Trained a python model for crops prediction in university.');
                    setCustomSuggestionText('Engineered KrishiAI using Python, FastAPI, and Scikit-Learn to forecast crop yields with 89% accuracy; awarded 2nd prize in National University Innovation Hackathon.');
                  }
                }}
                style={{
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: selectedProject === p.id ? 700 : 500,
                  backgroundColor: selectedProject === p.id ? 'var(--deep-indigo)' : 'var(--warm-ivory)',
                  color: selectedProject === p.id ? 'var(--pure-white)' : 'var(--govt-ink)',
                  border: '1px solid var(--light-border)'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input & Live Formula Structure */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--muted-dark)', display: 'block', marginBottom: '6px' }}>
                {lang === 'hi' ? 'वर्तमान प्रोजेक्ट विवरण:' : 'Your Current Project Draft:'}
              </label>
              <textarea
                value={customOriginalText}
                onChange={(e) => setCustomOriginalText(e.target.value)}
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  backgroundColor: 'var(--warm-ivory)',
                  fontSize: '0.88rem',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--saffron-primary)', display: 'block', marginBottom: '6px' }}>
                {lang === 'hi' ? 'सेतु एआई अनुशंसित संरचना:' : 'Setu AI Recommended High-Impact Phrasing:'}
              </label>
              <textarea
                value={customSuggestionText}
                onChange={(e) => setCustomSuggestionText(e.target.value)}
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(232, 117, 22, 0.4)',
                  backgroundColor: 'var(--pure-white)',
                  fontSize: '0.88rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  color: 'var(--govt-ink)',
                  fontWeight: 500
                }}
              />
            </div>
          </div>

          {/* Breakdown Chips: Action + Tech + Problem + Impact */}
          <div
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--warm-ivory)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="badge badge-indigo" style={{ fontSize: '0.72rem' }}>ACTION: Built / Engineered</span>
              <span className="badge badge-saffron" style={{ fontSize: '0.72rem' }}>TECH: React / Node / FastAPI</span>
              <span className="badge badge-orange" style={{ fontSize: '0.72rem' }}>PROBLEM: Manual Latency</span>
              <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>IMPACT: 35% Faster</span>
            </div>

            <button
              onClick={() => handleCopy(customSuggestionText, 'custom-proj-sugg')}
              className="btn-primary"
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
            >
              {copiedId === 'custom-proj-sugg' ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedId === 'custom-proj-sugg' ? (lang === 'hi' ? 'कॉपी हुआ' : 'Copied!') : (lang === 'hi' ? 'कॉपी करें' : 'Copy Phrasing')}</span>
            </button>
          </div>
        </div>
      )}

      {/* 7. Resume Improvement Checklist (Interactive) */}
      {analyzed && (
        <div
          style={{
            padding: '28px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
                <ListCheck size={12} /> {tr.checklistHeading || 'RESUME IMPROVEMENT PLAN'}
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                {lang === 'hi' ? 'सक्रिय रिज़्यूमे सुधार कार्यसूची' : 'Dynamic Improvement Action Checklist'}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--muted-dark)', marginTop: '2px' }}>
                {tr.checklistNote || 'Interactive plan: Confirming updates dynamically raises your Resume Readiness Score.'}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>
                {completedChecklistCount} / {resumeChecklist.length} {lang === 'hi' ? 'पूर्ण' : 'completed'}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)' }}>
                {lang === 'hi' ? `वर्तमान तैयारी स्कोर: ${resumeReadinessScore}/100` : `Current Readiness: ${resumeReadinessScore}/100`}
              </div>
            </div>
          </div>

          {/* Checklist Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {resumeChecklist.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  toggleResumeChecklistItem(item.id);
                  showToast(
                    item.completed
                      ? (lang === 'hi' ? 'कार्य प्रगति पर पुनः मार्क किया गया' : 'Item unmarked')
                      : (lang === 'hi' ? `बधाई! +${item.points} अंक रिज़्यूमे तैयारी स्कोर में जोड़े गए` : `Progress saved! +${item.points} points added to Resume Readiness`),
                    'info'
                  );
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: item.completed ? 'var(--success-light)' : 'var(--warm-ivory)',
                  border: `1px solid ${item.completed ? 'rgba(21, 128, 61, 0.3)' : 'var(--light-border)'}`,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '5px',
                      backgroundColor: item.completed ? 'var(--success-green)' : 'var(--pure-white)',
                      border: `1.5px solid ${item.completed ? 'var(--success-green)' : 'var(--light-border)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--pure-white)',
                      flexShrink: 0
                    }}
                  >
                    {item.completed && <Check size={14} strokeWidth={3} />}
                  </div>
                  <span
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: item.completed ? 600 : 500,
                      color: item.completed ? '#0F6830' : 'var(--govt-ink)',
                      textDecoration: item.completed ? 'line-through' : 'none'
                    }}
                  >
                    {lang === 'hi' ? item.textHi : item.text}
                  </span>
                </div>

                <span
                  className="badge"
                  style={{
                    backgroundColor: item.completed ? 'var(--pure-white)' : 'var(--warm-ivory-alt)',
                    color: item.completed ? 'var(--success-green)' : 'var(--muted-dark)',
                    fontSize: '0.72rem'
                  }}
                >
                  +{item.points} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
