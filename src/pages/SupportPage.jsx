import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp, ROLE_DASHBOARDS } from '../context/AppContext';
import {
  HelpCircle,
  Search,
  BookOpen,
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Sparkles,
  Award,
  Compass,
  Briefcase,
  KeyRound,
  MessageSquare
} from 'lucide-react';

export const SupportPage = ({ embedded = false }) => {
  const { user, lang } = useApp();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const backDashboard = user ? (ROLE_DASHBOARDS[user.role] || '/portal/student/dashboard') : '/';

  const faqs = [
    {
      id: 1,
      icon: Compass,
      question: lang === 'hi' ? 'मैं अपना कौशल मूल्यांकन कैसे पूरा करूं?' : 'How do I complete my skill assessment?',
      answer:
        lang === 'hi'
          ? 'छात्र पोर्टल में "कौशल मूल्यांकन" (Skill Assessment) टैब पर जाएं। अपना लक्षित उद्योग क्षेत्र चुनें और हमारे एडेप्टिव AI टेस्ट को पूरा करें। सफल समापन पर आपको AI-सत्यापित डिजिटल बैज प्राप्त होगा।'
          : 'Navigate to the Skill Assessment tab in your Student Portal. Choose your targeted industry domain and take our adaptive multiple-choice assessment to earn verified skill badges.'
    },
    {
      id: 2,
      icon: Sparkles,
      question: lang === 'hi' ? 'मेरा कौशल अंतर (Skill Gap) कैसे निकाला जाता है?' : 'How is my skill gap calculated?',
      answer:
        lang === 'hi'
          ? 'हमारा करियर सेटू इंजन आपके सत्यापित कौशल प्रोफ़ाइल की तुलना भारत के 5,000+ वास्तविक समय के उद्योग जॉब विवरणों (Job Descriptions) के साथ करता है।'
          : 'Our CareerSetu engine compares your verified skill profile against real-time industry job requirement vectors across 5,000+ national hiring postings.'
    },
    {
      id: 3,
      icon: Award,
      question: lang === 'hi' ? 'मैं अपनी प्रोफ़ाइल और प्रमाणपत्र कैसे अपडेट करूं?' : 'How do I update my profile and certificates?',
      answer:
        lang === 'hi'
          ? 'पोर्टल के "मेरे कौशल" या "पोर्टफोलियो" अनुभाग में जाएं। आप अपने प्रोजेक्ट्स, शिक्षा, और नए प्रमाणपत्र आसानी से जोड़ सकते हैं।'
          : 'Visit the My Skills or Portfolio section inside your portal to add new projects, educational background, micro-credentials, and verified certifications.'
    },
    {
      id: 4,
      icon: BookOpen,
      question: lang === 'hi' ? 'करियर इंटेलिजेंस इंजन (Career Intelligence) कैसे काम करता है?' : 'How does Career Intelligence work?',
      answer:
        lang === 'hi'
          ? 'करियर इंटेलिजेंस राष्ट्रीय रोजगार रुझानों, उद्योग मांग मानचित्रों और पाठ्यचर्या मैट्रिक्स का विश्लेषण करके व्यक्तिगत शिक्षण पथों की सिफारिश करता है।'
          : 'Career Intelligence analyzes national employment trends, industry demand heatmaps, and curriculum alignment metrics to recommend personalized learning pathways.'
    },
    {
      id: 5,
      icon: Briefcase,
      question: lang === 'hi' ? 'मैं किसी अवसर या इंटर्नशिप के लिए कैसे आवेदन करूं?' : 'How do I apply for an opportunity or internship?',
      answer:
        lang === 'hi'
          ? 'पोर्टल में "अवसर" (Opportunities) टैब ब्राउज़ करें, पात्रता मानदंड देखें, और अपने सत्यापित CareerSetu पोर्टफोलियो का उपयोग करके सीधे आवेदन करें।'
          : 'Browse the Opportunities tab in your portal, view requirements, and click "Apply Now" using your verified CareerSetu digital portfolio.'
    },
    {
      id: 6,
      icon: KeyRound,
      question: lang === 'hi' ? 'मैं अपना पासवर्ड या ईमेल कैसे बदलूं?' : 'How do I change my password or email?',
      answer:
        lang === 'hi'
          ? 'पोर्टल सेटिंग्स (Settings) पृष्ठ पर जाएं और सुरक्षा अनुभाग के अंतर्गत अपना नया पासवर्ड अपडेट करें।'
          : 'Navigate to the Settings page in your portal and update your credentials under the Security & Password section.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '1000px', margin: embedded ? '0 auto' : '32px auto', padding: '0 20px', width: '100%' }}>
      {/* Header & Back Button */}
      {!embedded && (
        <div style={{ marginBottom: '24px' }}>
          <button
            onClick={() => navigate(backDashboard)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: 'var(--saffron-primary)',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              marginBottom: '12px'
            }}
          >
            <ArrowLeft size={16} />
            <span>{lang === 'hi' ? 'डैशबोर्ड पर वापस जाएं' : 'Back to Dashboard'}</span>
          </button>
        </div>
      )}

      {/* Hero Banner with Search */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--deep-indigo) 0%, #1E1B4B 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px 28px',
          color: '#FFFFFF',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '32px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(232, 117, 22, 0.25)', color: '#FDBA74', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.78rem', fontWeight: 800, marginBottom: '14px' }}>
          <HelpCircle size={14} />
          <span>CAREERSETU HELP CENTER • SIH26044</span>
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '10px', letterSpacing: '-0.02em' }}>
          {lang === 'hi' ? 'हम आपकी क्या सहायता कर सकते हैं?' : 'CareerSetu Help & Support'}
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.82)', maxWidth: '600px', margin: '0 auto 24px' }}>
          {lang === 'hi'
            ? 'कौशल मूल्यांकन, उद्योग इंटर्नशिप, या खाता प्राथमिकताओं के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें।'
            : 'Find answers about skill gap analysis, verified certifications, industry opportunities, or platform account settings.'}
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: '540px', margin: '0 auto', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-text)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'hi' ? 'अपनी समस्या या प्रश्न खोजें...' : 'How can we help? Search topic...'}
            style={{
              width: '100%',
              padding: '14px 16px 14px 48px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              fontSize: '0.95rem',
              backgroundColor: 'var(--pure-white)',
              color: '#1C1B1A',
              boxShadow: 'var(--shadow-md)',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* FAQs Grid / Accordion */}
      <div style={{ marginBottom: '36px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '16px' }}>
          {lang === 'hi' ? 'सामान्य प्रश्न और समाधान (FAQ)' : 'Frequently Asked Questions'}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          {filteredFaqs.map((faq) => {
            const IconComponent = faq.icon;
            const isExpanded = expandedFaq === faq.id;

            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: 'var(--pure-white)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--saffron-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <IconComponent size={16} color="var(--saffron-primary)" />
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                      {faq.question}
                    </span>
                  </div>
                  {isExpanded ? <ChevronUp size={18} color="var(--muted-text)" /> : <ChevronDown size={18} color="var(--muted-text)" />}
                </button>

                {isExpanded && (
                  <div style={{ padding: '0 20px 16px 64px', fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.6, borderTop: '1px solid var(--light-border)', paddingTop: '12px' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Support Contact Box */}
      <div
        style={{
          backgroundColor: 'var(--pure-white)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          border: '1px solid var(--light-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--saffron-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Mail size={22} color="var(--saffron-primary)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? 'क्या आपको अभी भी सहायता चाहिए?' : 'Still need assistance?'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>
              {lang === 'hi'
                ? 'हमारी सहायता टीम से संपर्क करें: support@careersetuu.example (SIH26044 डेमोंस्ट्रेशन हेल्पडेस्क)'
                : 'Contact our support desk: support@careersetuu.example (SIH26044 Demonstration Helpdesk)'}
            </p>
          </div>
        </div>

        <button
          onClick={() => window.open('mailto:support@careersetuu.example')}
          className="btn-primary"
          style={{ padding: '10px 20px', fontSize: '0.88rem' }}
        >
          <MessageSquare size={15} />
          <span>{lang === 'hi' ? 'ईमेल द्वारा संपर्क करें' : 'Contact Support Desk'}</span>
        </button>
      </div>
    </div>
  );
};
