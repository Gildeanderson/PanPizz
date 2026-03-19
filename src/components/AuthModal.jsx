import { X } from 'lucide-react';
import { useState } from 'react';

export function AuthModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay glass" onClick={onClose}>
            <div className="modal-content animate-slide-up" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><X size={24} /></button>
                <div className="modal-header">
                    <h2 className="modal-title">{isLogin ? 'Bem-vindo de volta' : 'Crie sua conta'}</h2>
                    <p className="modal-subtitle">
                        {isLogin ? 'Entre para fazer seus pedidos premium.' : 'Junte-se a nós para a melhor experiência.'}
                    </p>
                </div>

                <div className="auth-tabs">
                    <button className={`auth-tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={`auth-tab ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Cadastro</button>
                </div>

                <form className="auth-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    {!isLogin && (
                        <div className="form-group">
                            <label>Nome Completo</label>
                            <input type="text" placeholder="Seu nome" required />
                        </div>
                    )}
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" placeholder="seu@email.com" required />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>

                    <button className="btn-primary w-full" style={{ marginTop: '1rem' }}>
                        {isLogin ? 'Entrar' : 'Criar Conta'}
                    </button>
                </form>
            </div>
        </div>
    );
}
