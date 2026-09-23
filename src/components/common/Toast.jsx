import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '420px',
        width: 'calc(100% - 48px)',
        pointerEvents: 'none'
      }}
    >
      {toasts.map((toast) => {
        let bg = 'var(--pure-white)';
        let border = 'var(--light-border)';
        let icon = <CheckCircle2 size={20} color="var(--success-green)" />;

        if (toast.type === 'error') {
          border = 'rgba(185, 28, 28, 0.4)';
          icon = <AlertCircle size={20} color="var(--bharat-red)" />;
        } else if (toast.type === 'info') {
          border = 'rgba(49, 46, 129, 0.3)';
          icon = <Info size={20} color="var(--deep-indigo)" />;
        } else {
          border = 'rgba(21, 128, 61, 0.3)';
        }

        return (
          <div
            key={toast.id}
            className="fade-in"
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 18px',
              backgroundColor: bg,
              borderRadius: 'var(--radius-md)',
              border: `1px solid ${border}`,
              boxShadow: 'var(--shadow-xl)',
              color: 'var(--govt-ink)'
            }}
          >
            <div style={{ flexShrink: 0 }}>{icon}</div>
            <div style={{ flex: 1, fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>
              {toast.message}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                color: 'var(--muted-text)',
                padding: '4px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
