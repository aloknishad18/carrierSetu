import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { assessmentQuestions } from '../../mockData';
import { CheckCircle2, ArrowRight, ArrowLeft, RotateCcw, Award, Sparkles } from 'lucide-react';

export const SkillAssessmentView = () => {
  const { lang, updateReadinessFromAssessment, showToast, studentProfile, setStudentTab } = useApp();
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(0);

  const q = assessmentQuestions[currentQIndex];
  const totalQ = assessmentQuestions.length;

  const handleSelect = (optionIdx) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQIndex]: optionIdx });
  };

  const handleNext = () => {
    if (currentQIndex < totalQ - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // Complete & compute
      let totalPts = 0;
      Object.keys(selectedAnswers).forEach((qIdx) => {
        const optIdx = selectedAnswers[qIdx];
        const opt = assessmentQuestions[qIdx]?.options[optIdx];
        if (opt) totalPts += opt.points;
      });
      const gained = Math.round((totalPts / (totalQ * 5)) * 10);
      setCalculatedScore(gained);
      updateReadinessFromAssessment(gained);
      setIsCompleted(true);
      showToast(
        lang === 'hi'
          ? `मूल्यांकन पूर्ण! आपकी करियर तैयारी में +${gained} अंकों की वृद्धि हुई है।`
          : `Assessment Completed! Career Readiness boosted by +${gained} points.`,
        'success'
      );
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQIndex(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="fade-in" style={{ maxWidth: '640px', margin: '40px auto', textAlign: 'center' }}>
        <div
          style={{
            backgroundColor: 'var(--pure-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 32px',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xl)'
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'var(--success-light)',
              color: 'var(--success-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}
          >
            <Award size={38} />
          </div>

          <span className="badge badge-green" style={{ marginBottom: '12px' }}>
            {lang === 'hi' ? 'मूल्यांकन सत्यापित' : 'Competency Verified'}
          </span>

          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
            {lang === 'hi' ? 'बधाई! मूल्यांकन पूर्ण हुआ' : 'Skill Assessment Completed!'}
          </h3>

          <p style={{ fontSize: '0.95rem', color: 'var(--muted-dark)', lineHeight: 1.6, marginBottom: '28px' }}>
            {lang === 'hi'
              ? 'आपके उत्तरों का राष्ट्रीय कौशल फ्रेमवर्क (NSDC) के अनुरूप मूल्यांकन किया गया है।'
              : 'Your responses have been verified against industry standards. Your updated profile is now visible to active recruiters.'}
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 28px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--indigo-surface)',
              border: '1px solid rgba(49, 46, 129, 0.15)',
              marginBottom: '32px'
            }}
          >
            <Sparkles size={24} color="var(--deep-indigo)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--deep-indigo)' }}>
                NEW CAREER READINESS SCORE
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--govt-ink)' }}>
                {studentProfile.readinessScore} <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--muted-text)' }}>/ 100</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setStudentTab('gap')}
              className="btn-primary"
            >
              <span>{lang === 'hi' ? 'कौशल अंतर देखें' : 'View Skill Gap Analysis'}</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={handleReset}
              className="btn-secondary"
            >
              <RotateCcw size={16} />
              <span>{lang === 'hi' ? 'पुनः प्रयास करें' : 'Retake Assessment'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto' }}>
      
      {/* Assessment Header */}
      <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
            {lang === 'hi' ? 'कौशल मूल्यांकन मॉड्यूल' : 'Diagnostic Competency Exam'}
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            {lang === 'hi' ? 'कौशल एवं अभिरुचि मूल्यांकन' : 'Adaptive Skill Assessment'}
          </h2>
        </div>
        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--saffron-primary)' }}>
          Question {currentQIndex + 1} of {totalQ}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--light-border)', borderRadius: '4px', overflow: 'hidden', marginBottom: '32px' }}>
        <div
          style={{
            height: '100%',
            width: `${((currentQIndex + 1) / totalQ) * 100}%`,
            backgroundColor: 'var(--saffron-primary)',
            transition: 'width 0.3s ease'
          }}
        />
      </div>

      {/* Question Card */}
      <div
        className="fade-in"
        key={q.id}
        style={{
          backgroundColor: 'var(--pure-white)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '32px'
        }}
      >
        <span className="badge badge-saffron" style={{ marginBottom: '14px', fontSize: '0.74rem' }}>
          {lang === 'hi' && q.categoryHi ? q.categoryHi : q.category}
        </span>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--govt-ink)', lineHeight: 1.45, marginBottom: '24px' }}>
          {lang === 'hi' && q.questionHi ? q.questionHi : q.question}
        </h3>

        {/* Options List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {q.options.map((opt, oIdx) => {
            const isChosen = selectedAnswers[currentQIndex] === oIdx;
            return (
              <div
                key={oIdx}
                onClick={() => handleSelect(oIdx)}
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  border: isChosen ? '2px solid var(--saffron-primary)' : '1px solid var(--light-border)',
                  backgroundColor: isChosen ? 'var(--saffron-light)' : 'var(--warm-ivory)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  transition: 'all 0.15s ease'
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: isChosen ? '6px solid var(--saffron-primary)' : '2px solid var(--light-border)',
                    backgroundColor: 'var(--pure-white)',
                    flexShrink: 0
                  }}
                />
                <span style={{ fontSize: '0.92rem', color: 'var(--govt-ink)', fontWeight: isChosen ? 600 : 500 }}>
                  {opt.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={() => setCurrentQIndex(Math.max(0, currentQIndex - 1))}
          disabled={currentQIndex === 0}
          className="btn-secondary"
          style={{ opacity: currentQIndex === 0 ? 0.4 : 1 }}
        >
          <ArrowLeft size={16} /> {lang === 'hi' ? 'पिछला' : 'Previous'}
        </button>

        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQIndex] === undefined}
          className="btn-primary"
          style={{ opacity: selectedAnswers[currentQIndex] === undefined ? 0.5 : 1 }}
        >
          <span>{currentQIndex === totalQ - 1 ? (lang === 'hi' ? 'मूल्यांकन जमा करें' : 'Submit Assessment') : (lang === 'hi' ? 'अगला प्रश्न' : 'Next Question')}</span>
          <ArrowRight size={16} className="btn-arrow" />
        </button>
      </div>

    </div>
  );
};
