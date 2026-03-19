import { useState, useEffect } from 'react';
import { ShoppingCart, Loader2 } from 'lucide-react';

export function ProductMenu({ onAddToCart }) {
    const [activeTab, setActiveTab] = useState('todas');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products');
                const result = await response.json();

                if (result.success) {
                    setProducts(result.data);
                } else {
                    console.error("Erro do servidor:", result.error);
                }
            } catch (err) {
                console.error("Não foi possível conectar ao back-end. Ele está rodando?", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = activeTab === 'todas'
        ? products
        : products.filter(p => p.category === activeTab);

    return (
        <section className="menu-section" id="menu">
            <div className="section-header" style={{ marginBottom: '2rem' }}>
                <h2 className="section-title">Nosso Cardápio</h2>
                <p className="section-subtitle">O melhor da panificação e pizzaria artesanal feito com paixão.</p>
            </div>

            <div className="menu-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <button
                    className={`auth - tab ${activeTab === 'todas' ? 'active' : ''} `}
                    onClick={() => setActiveTab('todas')}
                    style={{ flex: 'none', padding: '10px 24px', borderRadius: 'var(--radius-full)' }}
                >
                    Todas Dinâmicas
                </button>
                <button
                    className={`auth - tab ${activeTab === 'pizzaria' ? 'active' : ''} `}
                    onClick={() => setActiveTab('pizzaria')}
                    style={{ flex: 'none', padding: '10px 24px', borderRadius: 'var(--radius-full)' }}
                >
                    Pizzaria Clássica
                </button>
                <button
                    className={`auth - tab ${activeTab === 'padaria' ? 'active' : ''} `}
                    onClick={() => setActiveTab('padaria')}
                    style={{ flex: 'none', padding: '10px 24px', borderRadius: 'var(--radius-full)' }}
                >
                    Padaria Artesanal
                </button>
            </div>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem 0', color: 'var(--accent-primary)' }}>
                    <Loader2 size={40} className="animate-spin" style={{ animation: 'spin 1.5s linear infinite' }} />
                </div>
            ) : (
                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card glass animate-slide-up">
                            <div className="product-image-container">
                                <img src={product.img} alt={product.name} className="product-image" />
                                <div className="product-badge">{product.type}</div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-footer">
                                    <span className="product-price">R$ {product.price.toFixed(2)}</span>
                                    <button className="btn-icon" aria-label="Adicionar ao carrinho" onClick={() => onAddToCart(product)}>
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
