import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ProductMenu } from './components/ProductMenu'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { AuthModal } from './components/AuthModal'
import { CartSidebar } from './components/CartSidebar'
import { CardPaymentModal } from './components/CardPaymentModal'
import { Toast } from './components/Toast'

function App() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // Toast State
    const [toastMessage, setToastMessage] = useState('');
    const [toastVisible, setToastVisible] = useState(false);

    const showToast = (message) => {
        setToastMessage(message);
        setToastVisible(true);
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsPaymentOpen(true);
    };

    const handlePaymentSuccess = async () => {
        setIsPaymentOpen(false);
        showToast('Processando pedido...');

        try {
            // 1. Enviar para o banco
            const res = await fetch('http://localhost:3000/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items: cartItems, total: cartTotal })
            });
            const data = await res.json();

            // 2. Limpar e notificar o usuário com sucesso
            setCartItems([]);
            showToast(data.success ? 'Pagamento aprovado! Obrigado pela preferência!' : 'Aviso: Pedido local criado (Back-end offline)');
        } catch (err) {
            // Fallback: se o node não estiver rodando, ainda fingimos que deu certo na UI
            setCartItems([]);
            showToast('Pagamento aprovado (Modo Offline)!');
            console.warn("API Node.js não acessível. Modo fallback ativo.");
        }
    };

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        showToast(`Adicionado: ${product.name}`);
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="app-container">
            <Header onOpenAuth={() => setIsAuthOpen(true)} onOpenCart={() => setIsCartOpen(true)} cartCount={cartCount} />

            <main>
                <Hero />
                <AboutSection />
                <ProductMenu onAddToCart={addToCart} />
                <Testimonials />
            </main>

            <Footer />

            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onCheckout={handleCheckout}
                cartItems={cartItems}
                cartTotal={cartTotal}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
            />
            <CardPaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} onConfirm={handlePaymentSuccess} />
            <Toast message={toastMessage} isVisible={toastVisible} onClose={() => setToastVisible(false)} />
        </div>
    )
}

export default App
