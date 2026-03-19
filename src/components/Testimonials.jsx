import { Star } from 'lucide-react';

export function Testimonials() {
    const reviews = [
        { id: 1, name: "Maria Augusta", role: "Cliente Premium", text: "A melhor pizza que já comi desde minha viagem à Nápoles. A massa é incrivelmente leve!", rating: 5 },
        { id: 2, name: "João Pedro", role: "Crítico Gastronômico", text: "A fermentação prolongada faz toda a diferença no sourdough. Perfeito para o café da manhã.", rating: 5 },
        { id: 3, name: "Carolina Silva", role: "Cliente Assídua", text: "Atendimento impecável e o ambiente do site reflete maravilhosamente a qualidade dos produtos.", rating: 5 }
    ];

    return (
        <section className="testimonials section-dark" id="testimonials">
            <div className="section-header">
                <h2 className="section-title">O Que Dizem da <span className="text-accent">Nossa Arte</span></h2>
                <p className="section-subtitle">A satisfação dos nossos clientes é o nosso maior prêmio.</p>
            </div>
            <div className="testimonials-grid menu-section" style={{ padding: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {reviews.map(review => (
                    <div key={review.id} className="testimonial-card glass animate-slide-up" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                        <div className="stars" style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                            {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="text-accent" />)}
                        </div>
                        <p className="testimonial-text" style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>"{review.text}"</p>
                        <div className="testimonial-author">
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{review.name}</h4>
                            <span className="author-role" style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{review.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
