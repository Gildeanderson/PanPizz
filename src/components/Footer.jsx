import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="logo" style={{ marginBottom: '1rem' }}>Pan<span>Pizz</span></div>
                    <p className="footer-desc">A união perfeita entre a arte da fermentação natural e a verdadeira paixão italiana pela pizza.</p>
                    <div className="social-links">
                        <a href="#" className="btn-icon"><Instagram size={20} /></a>
                        <a href="#" className="btn-icon"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Atendimento</h3>
                    <ul>
                        <li><a href="#menu">Cardápio</a></li>
                        <li><a href="#about">Nossa História</a></li>
                        <li><a href="#testimonials">Avaliações</a></li>
                        <li><a href="#">Trabalhe Conosco</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>
                    <ul>
                        <li><MapPin size={18} className="text-accent" /> Av. Premium, 1000 - Jardins</li>
                        <li><Phone size={18} className="text-accent" /> (11) 4002-8922</li>
                        <li><Mail size={18} className="text-accent" /> contato@panpizz.com.br</li>
                    </ul>
                </div>

                <div className="footer-newsletter glass">
                    <h3>Newsletter</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Receba as novidades quentinhas e ofertas exclusivas no seu email.</p>
                    <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Obrigado por se inscrever!"); }}>
                        <input type="email" placeholder="Seu melhor e-mail" required />
                        <button type="submit" className="btn-primary" style={{ padding: '10px', borderRadius: 'var(--radius-sm)' }}>Assinar</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} PanPizz Artesanal. Todos os direitos reservados.
            </div>
        </footer>
    );
}
