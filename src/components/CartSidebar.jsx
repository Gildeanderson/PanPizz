import { X, ShoppingBag, CreditCard, Plus, Minus, Trash2 } from 'lucide-react';

export function CartSidebar({ isOpen, onClose, onCheckout, cartItems = [], cartTotal = 0, onUpdateQuantity, onRemoveItem }) {
    return (
        <>
            {isOpen && <div className="cart-overlay glass" onClick={onClose} />}
            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Seu Carrinho</h2>
                    <button className="btn-icon" onClick={onClose}><X size={24} /></button>
                </div>

                <div className="cart-body">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart-state">
                            <ShoppingBag size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                            <p>Seu carrinho está vazio.</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Que tal adicionar uma pizza premium ou um pão artesanal?</p>
                        </div>
                    ) : (
                        <div className="cart-items-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{item.name}</h4>
                                        <div className="text-accent" style={{ fontWeight: 'bold' }}>R$ {(item.price * item.quantity).toFixed(2)}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', padding: '0.2rem' }}>
                                        <button className="btn-icon" style={{ width: '28px', height: '28px' }} onClick={() => onUpdateQuantity(item.id, -1)}><Minus size={14} /></button>
                                        <span style={{ width: '20px', textAlign: 'center', fontSize: '0.9rem' }}>{item.quantity}</span>
                                        <button className="btn-icon" style={{ width: '28px', height: '28px' }} onClick={() => onUpdateQuantity(item.id, 1)}><Plus size={14} /></button>
                                    </div>
                                    <button style={{ background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer', padding: '0.5rem' }} onClick={() => onRemoveItem(item.id)}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="cart-footer glass">
                    <div className="cart-total">
                        <span>Total</span>
                        <span className="text-accent">R$ {cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="btn-primary w-full" onClick={onCheckout} disabled={cartItems.length === 0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', opacity: cartItems.length === 0 ? 0.5 : 1, cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer' }}>
                        <CreditCard size={20} />
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </>
    );
}
