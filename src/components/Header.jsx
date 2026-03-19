import { ShoppingCart, User } from 'lucide-react';

export function Header({ onOpenAuth, onOpenCart, cartCount = 0 }) {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="header glass">
            <div className="logo">Pan<span>Pizz</span></div>
            <nav>
                <button className="nav-btn" onClick={() => scrollToSection('menu')}>Menu</button>
                <button className="nav-btn" onClick={() => scrollToSection('about')}>Sobre</button>
                <button className="nav-btn" onClick={onOpenAuth} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User size={18} />
                    Login
                </button>
                <button className="nav-btn btn-primary" onClick={onOpenCart} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 20px' }}>
                    <ShoppingCart size={18} />
                    Carrinho ({cartCount})
                </button>
            </nav>
        </header>
    );
}
