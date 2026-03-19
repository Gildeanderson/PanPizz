import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export function Toast({ message, isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="toast-notification animate-slide-up" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
            <div className="toast-content glass" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,107,0,0.3)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <CheckCircle2 size={24} className="text-accent" />
                <span style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--text-primary)' }}>{message}</span>
                <button className="btn-icon" onClick={onClose} style={{ width: '30px', height: '30px', marginLeft: '1rem', border: 'none' }}><X size={16} /></button>
            </div>
        </div>
    );
}
