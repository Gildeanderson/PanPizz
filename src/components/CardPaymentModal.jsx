import { X, CreditCard } from 'lucide-react';
import { useState } from 'react';

export function CardPaymentModal({ isOpen, onClose, onConfirm }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    if (!isOpen) return null;

    const handleMaskCard = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})/g, '$1 ').trim();
        setCardNumber(value.substring(0, 19));
    };

    const handleMaskExpiry = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 3) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        setExpiry(value.substring(0, 5));
    };

    return (
        <div className="modal-overlay glass" onClick={onClose}>
            <div className="modal-content animate-slide-up checkout-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><X size={24} /></button>
                <div className="modal-header">
                    <h2 className="modal-title">Pagamento Seguro</h2>
                    <p className="modal-subtitle">Insira os dados do cartão para concluir o pedido premium.</p>
                </div>

                <div className="credit-card-preview glass">
                    <div className="card-chip"></div>
                    <div className="card-number">{cardNumber || '•••• •••• •••• ••••'}</div>
                    <div className="card-footer">
                        <div className="card-holder">
                            <span>TITULAR DO CARTÃO</span>
                            <div>NOME IMPRESSO</div>
                        </div>
                        <div className="card-expiry">
                            <span>VALIDADE</span>
                            <div>{expiry || 'MM/AA'}</div>
                        </div>
                    </div>
                </div>

                <form className="auth-form" onSubmit={(e) => { e.preventDefault(); onConfirm(); }}>
                    <div className="form-group">
                        <label>Número do Cartão</label>
                        <div className="input-with-icon">
                            <CreditCard size={18} className="input-icon" />
                            <input type="text" placeholder="0000 0000 0000 0000" value={cardNumber} onChange={handleMaskCard} required />
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>Validade</label>
                            <input type="text" placeholder="MM/AA" value={expiry} onChange={handleMaskExpiry} required />
                        </div>
                        <div className="form-group">
                            <label>CVV</label>
                            <input type="text" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 4))} required />
                        </div>
                    </div>

                    <button className="btn-primary w-full" style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
                        Confirmar Pagamento
                    </button>
                </form>
            </div>
        </div>
    );
}
