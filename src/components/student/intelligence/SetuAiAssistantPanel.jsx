import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../../context/AppContext';
import {
  Sparkles,
  Send,
  X,
  ChevronRight,
  Bot,
  User,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Maximize2,
  Minimize2
} from 'lucide-react';

export const SetuAiAssistantPanel = ({ activeTab, onSelectTab }) => {
  const {
    lang,
    studentProfile,
    isSetuAiPanelOpen,
    setIsSetuAiPanelOpen,
    showToast,
    setStudentTab
  } = useApp();

  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState(() => [
    {
      id: 1,
      sender: 'setu',
      text: lang === 'hi'
        ? `नमस्ते ${studentProfile.hindiName || 'आरव'} 👋\n\nमैं आपका करियर इंटेलिजेंस सहायक हूँ। मैं यह समझने में आपकी सहायता कर सकता हूँ कि आपके कौशल, रिज़्यूमे और करियर की तैयारी आपके लक्ष्यों के साथ कैसे संरेखित हैं।`
        : `Hello ${studentProfile.name.split(' ')[0]} 👋\n\nI can help you understand how your verified skills, resume representation and opportunity preparation align with your target career goals.`,
      sourceTag: 'PROFILE-BASED',
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Contextual quick prompt chips based on activeTab
  const getChips = () => {
    if (activeTab === 'resume') {
      return [
        { label: lang === 'hi' ? 'मेरा रिज़्यूमे सुधारें' : 'Improve My Resume', action: 'improve_resume' },
        { label: lang === 'hi' ? 'रिज़्यूमे में कौन से कौशल छूटे हैं?' : 'Missing Skills in Resume', action: 'missing_skills' },
        { label: lang === 'hi' ? 'प्रोजेक्ट विवरण कैसे सुधारें?' : 'Improve Project Descriptions', action: 'project_desc' }
      ];
    }
    if (activeTab === 'company') {
      return [
        { label: lang === 'hi' ? 'मुझे इस कंपनी के लिए क्या सीखना चाहिए?' : 'What Should I Learn for this Company?', action: 'company_learn' },
        { label: lang === 'hi' ? 'मेरे कौशलों की तुलना करें' : 'Compare My Skills', action: 'compare_skills' },
        { label: lang === 'hi' ? '4-सप्ताह तैयारी योजना बनाएं' : 'Build Preparation Plan', action: 'prep_plan' }
      ];
    }
    if (activeTab === 'role') {
      return [
        { label: lang === 'hi' ? 'मेरी भूमिका अनुकूलता समझाएं' : 'Compare Me With a Role', action: 'compare_role' },
        { label: lang === 'hi' ? 'कौशल अंतर का समाधान' : 'Explain My Skill Gaps', action: 'explain_gaps' },
        { label: lang === 'hi' ? 'रोडमैप में कौशल जोड़ें' : 'Add Skills to Roadmap', action: 'add_roadmap' }
      ];
    }
    // Global / Overview
    return [
      { label: lang === 'hi' ? 'मेरा रिज़्यूमे विश्लेषित करें' : 'Analyze My Resume', action: 'improve_resume' },
      { label: lang === 'hi' ? 'कंपनी तैयारी कैसे करें?' : 'Prepare for a Company', action: 'company_learn' },
      { label: lang === 'hi' ? 'मेरे कौशल अंतर समझाएं' : 'Explain My Skill Gaps', action: 'explain_gaps' },
      { label: lang === 'hi' ? 'भूमिका के साथ तुलना' : 'Compare Me With a Role', action: 'compare_role' }
    ];
  };

  const handleSendMessage = (textToSend = inputQuery, sourceAction = null) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    // 1. Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: trimmed,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');

    // 2. Synthesize transparent, grounded Setu AI response
    setTimeout(() => {
      let botReply = '';
      let tag = 'PROFILE-BASED';

      const qLower = trimmed.toLowerCase();

      if (sourceAction === 'company_learn' || qLower.includes('company') || qLower.includes('learn') || qLower.includes('तैयारी')) {
        tag = 'ROLE-BASED & OPPORTUNITY-BASED';
        botReply = lang === 'hi'
          ? `आपके करियरसेतु प्रोफ़ाइल और चयनित सॉफ्टवेयर डेवलपर तैयारी संदर्भ के आधार पर, मैं इन प्राथमिकताओं की अनुशंसा करता हूँ:\n\n1. उन्नत डेटा संरचनाएं (वर्तमान तैयारी: 78%)\nअनुशंसित ध्यान: ग्राफ एल्गोरिद्म और डायनामिक प्रोग्रामिंग।\n\n2. बैकएंड आर्किटेक्चर (वर्तमान तैयारी: 74%)\nअनुशंसित ध्यान: REST APIs, कैशिंग और डेटाबेस डिज़ाइन।\n\n3. सिस्टम डिज़ाइन (वर्तमान तैयारी: 68%)\nअनुशंसित ध्यान: स्केलेबिलिटी मूलभूत सिद्धांत।\n\nआपकी सबसे मजबूत क्षमताएं रिएक्ट (92%), प्रोग्रामिंग फंडामेंटल्स (92%) और गिट (88%) हैं। अपने रिज़्यूमे में इन्हें और अधिक स्पष्टता से रेखांकित करने पर विचार करें।`
          : `Based on your verified CareerSetu profile and the selected Software Developer preparation context, I recommend prioritizing:\n\n1. Advanced Data Structures\nCurrent readiness: 78% • Target: 90%\nRecommended focus: Graph Algorithms and Dynamic Programming\n\n2. Backend Architecture\nCurrent readiness: 74% • Target: 88%\nRecommended focus: REST APIs, Redis caching, and relational database schema\n\n3. System Design Basics\nCurrent readiness: 68% • Target: 82%\nRecommended focus: Scalability fundamentals and microservice contracts\n\nYour strongest verified competencies are React Development (92%), Programming Fundamentals (92%), and Git (88%). Highlight these existing strengths prominently in your resume summary.`;
      } else if (sourceAction === 'missing_skills' || qLower.includes('missing') || qLower.includes('resume') || qLower.includes('रिज़्यूमे')) {
        tag = 'PROFILE-BASED';
        botReply = lang === 'hi'
          ? `आपके करियरसेतु प्रोफ़ाइल और अपलोड किए गए रिज़्यूमे की तुलना करने पर 6 मजबूत क्षमताएं रिज़्यूमे में अनुपस्थित हैं:\n\n• React.js (सत्यापित स्कोर 92%, रिज़्यूमे में कम साक्ष्य)\n• Git & Version Control (सत्यापित 88%)\n• RESTful API Design (सत्यापित 86%)\n• Algorithmic Problem Solving (NPTEL गोल्ड प्रमाणित)\n• Team Collaboration\n• Modern JavaScript (ES6+)\n\nइन्हें रिज़्यूमे सुधार कार्यसूची से जोड़कर आप तुरंत अपने रिज़्यूमे तैयारी स्कोर को 78 से 89 तक ले जा सकते हैं।`
          : `Comparing your CareerSetu profile with your analyzed resume reveals 6 verified strengths not clearly highlighted in your resume:\n\n• React Development (92% verified score in projects, limited summary evidence)\n• Git & Pull Request Collaboration (88% verified)\n• RESTful API Integration (86% verified)\n• Algorithmic Problem Solving (NPTEL Elite certified)\n• Team Collaboration & Agile sprints\n• Modern JavaScript (ES6+)\n\nTip: You can use the Project Description Assistant in the Resume tab to phrase these with quantified outcomes.`;
      } else if (sourceAction === 'explain_gaps' || qLower.includes('gap') || qLower.includes('अंतर')) {
        tag = 'ROLE-BASED';
        botReply = lang === 'hi'
          ? `आपका प्राथमिक कौशल अंतर Docker & Containers (55%) तथा उन्नत ग्राफ एल्गोरिद्म (78%) में है। सॉफ्टवेयर डेवलपर उद्योग मानक 75% और 90% की मांग करते हैं।\n\nअनुशंसित अगला कदम: अपने पूर्ण-स्टैक ई-कॉमर्स प्रोजेक्ट को डॉकराइज़ करें और क्लाउड पर डिप्लॉय करें (+6 अंक तैयारी स्कोर)।`
          : `Your primary competency gaps for the Software Developer benchmark are Docker & Containers (currently 55% vs 75% target) and Graph Algorithms (78% vs 90% target).\n\nRecommended next action: Complete the containerization module for your capstone project. This bridges your largest industry alignment gap.`;
      } else {
        tag = 'PROFILE-BASED';
        botReply = lang === 'hi'
          ? `मैं आपके उपलब्ध करियरसेतु प्रोफ़ाइल का उपयोग करके व्यक्तिगत मार्गदर्शन प्रदान कर सकता हूँ। आपकी वर्तमान करियर तैयारी 82/100 और रिज़्यूमे तैयारी 78/100 है। आप ऊपर दिए गए त्वरित विकल्पों में से चुन सकते हैं या किसी विशिष्ट कंपनी/भूमिका के बारे में पूछ सकते हैं।`
          : `I can use your available CareerSetu profile information to provide personalized guidance. Your current Career Readiness is 82/100 and Resume Readiness is 78/100.\n\nYou can select any of the suggestions below or ask about specific company preparation requirements.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'setu',
          text: botReply,
          sourceTag: tag,
          timestamp: 'Just now'
        }
      ]);
    }, 450);
  };

  const chips = getChips();

  if (!isSetuAiPanelOpen) {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 800
        }}
      >
        <button
          onClick={() => setIsSetuAiPanelOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'var(--saffron-primary)',
            color: 'var(--pure-white)',
            padding: '12px 20px',
            borderRadius: '9999px',
            boxShadow: 'var(--shadow-saffron)',
            fontWeight: 800,
            fontSize: '0.88rem',
            cursor: 'pointer',
            border: '2px solid rgba(255, 255, 255, 0.9)',
            animation: 'pulseGlow 4s infinite'
          }}
        >
          <Sparkles size={18} />
          <span>Setu AI Assistant</span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--pure-white)' }} />
        </button>
      </div>
    );
  }

  return (
    <aside
      className="setu-ai-panel"
      style={{
        width: '100%',
        maxWidth: '340px',
        backgroundColor: 'var(--pure-white)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--light-border)',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 140px)',
        position: 'sticky',
        top: '105px',
        overflow: 'hidden'
      }}
    >
      {/* 1. Assistant Header */}
      <div
        style={{
          padding: '14px 16px',
          borderBottom: '1px solid var(--light-border)',
          backgroundColor: 'var(--warm-ivory)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'var(--saffron-primary)',
              color: 'var(--pure-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Sparkles size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--govt-ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Setu AI</span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success-green)' }} />
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted-dark)' }}>
              {lang === 'hi' ? 'करियर इंटेलिजेंस सहायक' : 'Career Intelligence Assistant'}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsSetuAiPanelOpen(false)}
          style={{
            padding: '6px',
            borderRadius: '6px',
            backgroundColor: 'transparent',
            color: 'var(--muted-text)',
            cursor: 'pointer'
          }}
          title="Minimize Assistant"
        >
          <X size={18} />
        </button>
      </div>

      {/* 2. Messages Container */}
      <div
        style={{
          flex: 1,
          padding: '14px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {messages.map((msg) => {
          const isSetu = msg.sender === 'setu';
          return (
            <div
              key={msg.id}
              style={{
                alignSelf: isSetu ? 'flex-start' : 'flex-end',
                maxWidth: '92%',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
              className="fade-in"
            >
              <div
                style={{
                  backgroundColor: isSetu ? 'var(--pure-white)' : 'var(--indigo-surface)',
                  color: 'var(--govt-ink)',
                  padding: '12px 14px',
                  borderRadius: isSetu ? '4px 14px 14px 14px' : '14px 4px 14px 14px',
                  border: isSetu ? '1px solid rgba(232, 117, 22, 0.25)' : '1px solid rgba(49, 46, 129, 0.15)',
                  boxShadow: isSetu ? '0 2px 6px rgba(0,0,0,0.02)' : 'none',
                  fontSize: '0.82rem',
                  lineHeight: 1.48,
                  whiteSpace: 'pre-line'
                }}
              >
                {msg.text}
              </div>

              {/* Source Tag for transparency */}
              {isSetu && msg.sourceTag && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingLeft: '4px' }}>
                  <ShieldCheck size={11} color="var(--deep-indigo)" />
                  <span style={{ fontSize: '0.64rem', fontWeight: 800, color: 'var(--deep-indigo)', letterSpacing: '0.02em' }}>
                    {msg.sourceTag}
                  </span>
                </div>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* 3. Contextual Quick Chips */}
      <div
        style={{
          padding: '8px 12px',
          borderTop: '1px solid var(--light-border)',
          backgroundColor: 'var(--warm-ivory)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px'
        }}
      >
        {chips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(chip.label, chip.action)}
            style={{
              padding: '4px 10px',
              borderRadius: '9999px',
              backgroundColor: 'var(--pure-white)',
              border: '1px solid var(--light-border)',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: 'var(--govt-ink)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--saffron-primary)';
              e.currentTarget.style.color = 'var(--saffron-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--light-border)';
              e.currentTarget.style.color = 'var(--govt-ink)';
            }}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* 4. Text Input Bar */}
      <div
        style={{
          padding: '10px 12px',
          borderTop: '1px solid var(--light-border)',
          backgroundColor: 'var(--pure-white)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <input
          type="text"
          placeholder={lang === 'hi' ? 'सेतु एआई से प्रश्न पूछें...' : 'Ask Setu AI about skills, resume, company...'}
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--light-border)',
            backgroundColor: 'var(--warm-ivory)',
            fontSize: '0.82rem',
            fontFamily: 'inherit',
            outline: 'none'
          }}
        />

        <button
          onClick={() => handleSendMessage()}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: 'var(--saffron-primary)',
            color: 'var(--pure-white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0
          }}
          title="Send query"
        >
          <Send size={15} />
        </button>
      </div>

      {/* 5. Bottom Safe Guard Notice */}
      <div style={{ padding: '4px 12px 6px 12px', textAlign: 'center', fontSize: '0.62rem', color: 'var(--muted-text)', backgroundColor: 'var(--pure-white)' }}>
        {lang === 'hi' ? 'मार्गदर्शन उद्देश्य हेतु। चयन की गारंटी नहीं।' : 'Grounded in CareerSetu profile. Not a hiring guarantee.'}
      </div>
    </aside>
  );
};
